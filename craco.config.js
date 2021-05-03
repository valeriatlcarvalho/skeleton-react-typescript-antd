const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            // modifyVars: {
            //   compact: true,
            // },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
