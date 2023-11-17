/* prettier-ignore */
import esbuildServe from "esbuild-server";

/* prettier-ignore */

esbuildServe({
  entryPoints: ["src/index.js"],
  bundle: true,
  outfile: "/dist/index.js",
  loglevel: "info",
  loader: {
    ".png": "file",
    ".html": "text",
  },
});
/* /prettier-ignore */
