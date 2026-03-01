#!/usr/bin/env node

import { createCheckPackageWithWorkspaces } from "check-package-dependencies";
import semver from "semver";

await createCheckPackageWithWorkspaces({
  isLibrary: () => true,
})
  .checkRecommended({
    onlyWarnsForInRootDependencies: {
      "*": {
        duplicateDirectDependency: ["semver"],

        // most packages have not yet updated to eslint 10 but there are no errors.
        invalidPeerDependencyVersion: ["eslint"],
      },
    },
    onlyWarnsForInMonorepoPackagesDependencies: {
      "@pob/eslint-config": {
        "*": {
          // most packages have not yet updated to eslint 10 but there are no errors.
          invalidPeerDependencyVersion: ["eslint"],
        },
      },
    },
  })

  .forEach((checkPkg) => {
    const pkg = checkPkg.pkg;

    if (pkg.dependencies) {
      // const configDependencies = ['eslint-config-airbnb-base'];
      // configDependencies.forEach((configDep) => {
      //   if (pkg.dependencies[configDep]) {
      //     const expectedVersion = rootPkg.devDependencies[configDep];
      //     if (pkg.dependencies[configDep].slice(1) !== expectedVersion) {
      //       throw new Error(
      //         `Invalid ${configDep} version in ${pkg.name}: should be ${expectedVersion}`,
      //       );
      //     }
      //   }
      // });

      Object.keys(pkg.dependencies).forEach((configDep) => {
        if (
          configDep.startsWith("@pob") //||
          // configDependencies.includes(configDep)
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
