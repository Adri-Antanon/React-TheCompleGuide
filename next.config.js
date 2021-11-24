const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

const imageConfig = {
  reactStrictMode: true,
  images: {
    domains: ["upload.wikimedia.org"],
  },
};

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      ...imageConfig,
      env: {
        mongodb_username: "Adri",
        mongodb_password: "Contra123",
        mongodb_clustername: "nextjscluster",
        mongodb_database: "meetups-dev",
      },
    };
  }

  return {
    ...imageConfig,
    env: {
      mongodb_username: "Adri",
      mongodb_password: "Contra123",
      mongodb_clustername: "nextjscluster",
      mongodb_database: "meetups",
    },
  };
};
