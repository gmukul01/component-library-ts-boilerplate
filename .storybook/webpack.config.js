const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const basePath = path.resolve(__dirname, '../', 'packages');

module.exports = ({ config, mode }) => {
    config.module.rules.push({
        test: /\.(ts|tsx)$/,
        include: basePath,
        exclude: [/node_modules/, /\.test.tsx?$/, /__snapshots__/, /__tests__/, /__dist__/],
        use: [
            {
                loader: require.resolve('babel-loader')
            },
            {
                loader: require.resolve('stylelint-custom-processor-loader')
            }
        ]
    });
    config.plugins.push(new ForkTsCheckerWebpackPlugin());

    config.resolve.extensions.push('.ts', '.tsx');
    config.resolve.plugins = [new TsconfigPathsPlugin()];

    return config;
};
