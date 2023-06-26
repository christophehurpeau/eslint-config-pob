import fs from 'fs';
import { createCheckPackageWithWorkspaces } from 'check-package-dependencies';
import semver from 'semver';

const rootPkg = JSON.parse(
  fs.readFileSync(new URL('../package.json', import.meta.url)),
);

await createCheckPackageWithWorkspaces({
  isLibrary: () => true,
})
  .checkRecommended({
    onlyWarnsForInRootDependencies: {
      '*': {
        duplicateDirectDependency: ['semver'],
      },
    },
  })

  .forRoot((checkRootPkg) => {
    return checkRootPkg
      .checkSatisfiesVersionsFromDependency('./@pob/eslint-config', {
        devDependencies: ['eslint-config-airbnb-base'],
      })
      .checkSatisfiesVersionsFromDependency(
        './@pob/eslint-config-typescript-react',
        {
          devDependencies: ['eslint-config-airbnb'],
        },
      );
  })
  .forEach((checkPkg) => {
    const pkg = checkPkg.pkg;

    if (pkg.dependencies) {
      const configDependencies = [
        'eslint-config-airbnb-base',
        'eslint-config-airbnb',
      ];
      configDependencies.forEach((configDep) => {
        if (pkg.dependencies[configDep]) {
          const expectedVersion = rootPkg.devDependencies[configDep];
          if (pkg.dependencies[configDep].slice(1) !== expectedVersion) {
            throw new Error(
              `Invalid ${configDep} version in ${pkg.name}: should be ${expectedVersion}`,
            );
          }
        }
      });

      Object.keys(pkg.dependencies).forEach((configDep) => {
        if (
          configDep.startsWith('@pob') ||
          configDependencies.includes(configDep)
        ) {
          const configDepPkg = checkPkg.getDependencyPackageJson(configDep);

          if (!configDepPkg.peerDependencies) return;

          Object.keys(configDepPkg.peerDependencies).forEach((peerDep) => {
            if (
              !pkg.peerDependencies[peerDep] &&
              configDepPkg.peerDependenciesMeta &&
              configDepPkg.peerDependenciesMeta[peerDep] &&
              configDepPkg.peerDependenciesMeta[peerDep].optional
            ) {
              return;
            }

            const expectedVersion = configDepPkg.peerDependencies[peerDep];
            const actualVersion = pkg.peerDependencies[peerDep];

            if (!actualVersion) {
              throw new Error(
                `${pkg.name}: Missing peerDependency ${peerDep} ${expectedVersion} (${configDep})`,
              );
            }

            if (
              !semver.satisfies(
                semver.minVersion(actualVersion),
                expectedVersion,
              )
            ) {
              const message = `${pkg.name}: Invalid ${peerDep} version: ${actualVersion} doesn't satisfies ${expectedVersion} (${configDep})`;

              if (
                semver.gt(
                  semver.minVersion(actualVersion),
                  semver.minVersion(expectedVersion),
                )
              ) {
                console.warn(`Warning: ${message}`);
              } else {
                throw new Error(message);
              }
            }
          });
        }
      });
    }
  })
  .run();
