module.exports = function(api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          extensions: ['.tsx', '.ts', 'ttf'],
          alias: {
            '@components': './src/components',
            '@containers': './src/containers',
            '@navigation': './src/navigation',
          },
        },
      ],
    ],
  }
}
