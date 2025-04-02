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
        settings: {
            "import/resolver": {
                alias: {
                    map: [["@", "./src"]],
                    extensions: [".js", ".jsx", ".ts", ".tsx"],
                },
            },
        },
        rules: {
            "no-undef": "error",
            "no-unused-vars": "warn",
            "import/no-unresolved": "error", // Ensure imported modules exist
            "react/jsx-no-undef": "error", // Ensure components are imported
        },
        linterOptions: {
            reportUnusedDisableDirectives: true,
        },
    },
];

export default eslintConfig;
