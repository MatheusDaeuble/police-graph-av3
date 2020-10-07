module.exports = api => {
  api.cache(true);

  return {
    plugins: [
      [
        'babel-plugin-root-import',
        {
          paths: [
            {
              rootPathSuffix: './src/components',
              rootPathPrefix: '~/',
            },
            {
              rootPathSuffix: './src/utils',
              rootPathPrefix: '!/',
            },
          ],
        },
      ],
    ],
  };
};
