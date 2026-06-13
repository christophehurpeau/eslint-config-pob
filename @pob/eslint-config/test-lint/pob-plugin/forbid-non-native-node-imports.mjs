// eslint-disable-next-line @pob/forbid-non-native-node-imports, import-x/no-unresolved
import chalk from "chalk";

export function log(msg) {
  return chalk(msg);
}
