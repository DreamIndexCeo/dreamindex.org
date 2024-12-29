/** @type {import('@remix-run/dev').AppConfig} */
export default {
  ignoredRouteFiles: ["**/.*"],
  browserNodeBuiltinsPolyfill: {
    modules: {
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
      net: true,
    },
  },
  serverModuleFormat: "cjs", // Ensures CommonJS module format for the server
  future: {
    v2_errorBoundary: true,
    v2_normalizeFormMethod: true,
    v2_meta: true,
    v2_headers: true,
    v2_routeConvention: true,
    v2_dev: true,
  },
};
