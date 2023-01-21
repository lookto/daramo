module.exports = {
    root: true,
    plugins: ['@typescript-eslint', 'prettier'],
    extends: ['airbnb-base', 'airbnb-typescript/base', 'prettier'],
    parserOptions: {
        sourceType: 'module',
        project: ['./tsconfig.eslint.json', './packages/*/tsconfig.json'],
        allowAutomaticSingleRunInference: true,
        tsconfigRootDir: __dirname,
        warnOnUnsupportedTypeScriptVersion: false,
        EXPERIMENTAL_useSourceOfProjectReferenceRedirect: false,
    },
    rules: {
        'prettier/prettier': 'error',
        'no-console': 'off',
    },
    parser: '@typescript-eslint/parser',
};
