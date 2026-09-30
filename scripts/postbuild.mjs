// Nitro 3 bundles every dependency into .output/server, so it emits no package.json there.
// Hosts that expect the classic Nitro layout (e.g. Hostinger's Nitro preset) look for one.
import { writeFileSync } from "node:fs";

writeFileSync(
  ".output/server/package.json",
  JSON.stringify(
    { name: "sns-glam-server", private: true, type: "module", main: "index.mjs", scripts: { start: "node index.mjs" }, dependencies: {} },
    null,
    2,
  ) + "\n",
);
