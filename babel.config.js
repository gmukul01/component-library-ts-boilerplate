module.exports = function(api) {
    api.cache(true);
    const presets = ['@babel/env', '@babel/react', '@babel/typescript'],
        plugins = [
            [
                'babel-plugin-styled-components',
                {
                    pure: true
                }
            ],
            '@babel/proposal-class-properties',
            '@babel/proposal-object-rest-spread'
        ],
        ignore = ['node_modules', '**/*.test.tsx', '**/*.test.ts', '**/*.story.tsx', '__snapshots__', '__tests__', '__stories__'];

    return { presets, plugins, ignore };
};
