import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
    baseDirectory: __dirname,
});

const eslintConfig = [
    ...compat.extends("next/core-web-vitals"),
    {
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "module",
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
            },
        },
        rules: {
            "no-undef": "error",
            "no-unused-vars": "warn",
        },
        linterOptions: {
            reportUnusedDisableDirectives: true,
        },
    },
];

export default eslintConfig;
