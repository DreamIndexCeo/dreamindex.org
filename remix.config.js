/** @type {import('@remix-run/dev').AppConfig} */
export default {
  ignoredRouteFiles: ["**/.*"],
  browserNodeBuiltinsPolyfill: { modules: { 
    events: true,
    url: true,
    util: true,
    fs: true,
    http: true,
    https: true,
    zlib: true,
    stream: true,
    dns: true,
    os: true,
    path: true,
    crypto: true,
    tls: true,
    child_process: true,
    net: true
  } },
  // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  // publicPath: "/build/",
  // serverBuildPath: "build/index.js",
};
