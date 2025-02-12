import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import simpleImportSort from 'eslint-plugin-simple-import-sort';

import tseslint from 'typescript-eslint';

export default tseslint.config(
    { ignores: ['dist', 'coverage', 'package-lock.json', 'package.json', '*.config.js'] },
    {
        extends: [js.configs.recommended, ...tseslint.configs.recommended],
        files: ['**/*.{ts,tsx}'],
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser,
        },
        plugins: {
            'react-hooks': reactHooks,
            'react-refresh': reactRefresh,

            'simple-import-sort': simpleImportSort,
        },
        rules: {
            ...reactHooks.configs.recommended.rules,
            'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
            'simple-import-sort/imports': 'error',
            'simple-import-sort/exports': 'error',
        },
    }
    // {
    //     "extends": [
    //       "eslint:recommended",
    //       "plugin:@typescript-eslint/recommended",
    //       "prettier"
    //     ],
    //     "plugins": [
    //       "@typescript-eslint",
    //       "simple-import-sort",
    //       "prettier"
    //     ],
    //     "parser": "@typescript-eslint/parser",
    //     "parserOptions": {
    //       "ecmaVersion": "latest",
    //       "sourceType": "module"
    //     },
    //     "rules": {
    //       "@typescript-eslint/no-explicit-any": "off",
    //       "simple-import-sort/imports": "error",
    //       "simple-import-sort/exports": "error",
    //       "prettier/prettier": [
    //         "off",
    //         {
    //           "endOfLine": "auto"
    //         }
    //       ]
    //     }
    //   }
);
