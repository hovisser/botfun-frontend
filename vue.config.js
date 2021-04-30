module.exports = {
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.(ts|service\.ts)$/,
          loader: 'ts-loader',
          // esModule: true,
          // include: [resolve('src')],
          options: {
            // transpileOnly: true,
            allowTsInNodeModules: true,
            appendTsSuffixTo: [/\.vue$/],
            ignoreDiagnostics: [
              2307,
            ],
          },
        },
        {
          test: /\.tpl\.html$/,
          loader: 'vue-template-loader',
          exclude: /index.html/,
          options: {
            transformToRequire: {
              // The key should be element name,
              // the value should be attribute name or its array
              img: 'src',
            },
          },
        },
      ],
    },
  },
};
