module.exports = {
    "root": true,
    "env": {
        "es6": true,
        "node": true
    },
    "extends": [
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "plugin:jsdoc/recommended",
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": 2020,
        "project": "tsconfig.json",
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "settings": {
        "react": {
            "version": "detect" // Tells eslint-plugin-react to automatically detect the version of React to use
        }
    },
    "plugins": [
        "@typescript-eslint",
        "jsdoc"
    ],
    "rules": {
        "jsdoc/require-jsdoc": "off",
        "@typescript-eslint/adjacent-overload-signatures": "off",
        "@typescript-eslint/array-type": "off",
        "@typescript-eslint/ban-types": [
            "error",
            {
                "types": {
                    "Object": {
                        "message": "Avoid using the `Object` type. Did you mean `object`?"
                    },
                    "Function": {
                        "message": "Avoid using the `Function` type. Prefer a specific function type, like `() => void`."
                    },
                    "Boolean": {
                        "message": "Avoid using the `Boolean` type. Did you mean `boolean`?"
                    },
                    "Number": {
                        "message": "Avoid using the `Number` type. Did you mean `number`?"
                    },
                    "String": {
                        "message": "Avoid using the `String` type. Did you mean `string`?"
                    },
                    "Symbol": {
                        "message": "Avoid using the `Symbol` type. Did you mean `symbol`?"
                    }
                }
            }
        ],
        "@typescript-eslint/consistent-type-assertions": "off",
        "@typescript-eslint/consistent-type-definitions": "error",
        "@typescript-eslint/dot-notation": "off",
        "@typescript-eslint/explicit-member-accessibility": [
            "error",
            {
                "accessibility": "explicit"
            }
        ],
        "@typescript-eslint/indent": "off",
        "@typescript-eslint/camelcase": "off",
        "@typescript-eslint/interface-name-prefix": "off",
        '@typescript-eslint/no-non-null-assertion': 'off',
        "@typescript-eslint/member-ordering": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-misused-promises": "off",
        "@typescript-eslint/no-unsafe-assignment": "off",
        "@typescript-eslint/no-unsafe-return": "off",
        "@typescript-eslint/no-unsafe-member-access": "off",
        "@typescript-eslint/no-unsafe-call": "off",
        "@typescript-eslint/restrict-template-expressions": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/no-floating-promises": "error",
        "@typescript-eslint/no-namespace": "off",
        "@typescript-eslint/no-parameter-properties": "off",
        "@typescript-eslint/no-unused-expressions": "error",
        "@typescript-eslint/no-unused-vars": [
            "error", {
                "ignoreRestSiblings": true,
                "argsIgnorePattern": "^_"
            }
        ],
        "@typescript-eslint/no-use-before-define": "off",
        "@typescript-eslint/no-var-requires": "off",
        "@typescript-eslint/prefer-for-of": "error",
        "@typescript-eslint/prefer-function-type": "error",
        "@typescript-eslint/unbound-method": [
            "warn",
            {
                "ignoreStatic": true
            }
        ],
        "@typescript-eslint/quotes": [
            "error",
            "single"
        ],
        "@typescript-eslint/semi": [
            "error",
            "always"
        ],
        "@typescript-eslint/triple-slash-reference": [
            "error",
            {
                "path": "always",
                "types": "prefer-import",
                "lib": "always"
            }
        ],
        "@typescript-eslint/unified-signatures": "off",
        "arrow-body-style": "off",
        "arrow-parens": [
            "off",
            "always"
        ],
        "brace-style": [
            "error",
            "allman",
            {"allowSingleLine": true}
        ],
        "camelcase": "off",
        "comma-dangle": "off",
        "complexity": "off",
        "constructor-super": "error",
        "curly": "off",
        "eol-last": "off",
        "eqeqeq": [
            "error",
            "smart"
        ],
        "guard-for-in": "error",
        "id-blacklist": [
            "error",
            "any",
            "Number",
            "number",
            "String",
            "string",
            "Boolean",
            "boolean",
        ],
        "id-match": "error",
        "import/order": "off",
        "jsx-quotes": ["error", "prefer-single"],
        "max-classes-per-file": "off",
        "max-len": "off",
        "new-parens": "error",
        "no-bitwise": "error",
        "no-caller": "error",
        "no-cond-assign": "error",
        "no-console": "off",
        "no-debugger": "error",
        "no-empty": "error",
        "no-eval": "error",
        "no-fallthrough": "off",
        "no-invalid-this": "off",
        "no-multiple-empty-lines": "error",
        "no-new-wrappers": "error",
        "no-redeclare": "error",
        "no-shadow": [
            "error",
            {
                "hoist": "all"
            }
        ],
        "no-throw-literal": "error",
        "no-trailing-spaces": "off",
        "no-undef-init": "error",
        "no-underscore-dangle": "off",
        "no-unsafe-finally": "error",
        "no-unused-labels": "error",
        "object-shorthand": "error",
        "one-var": [
            "error",
            "never"
        ],
        "prefer-arrow/prefer-arrow-functions": "off",
        "quote-props": [
            "error",
            "consistent-as-needed"
        ],
        "radix": "error",
        "space-before-function-paren": [
            "error",
            {
                "anonymous": "never",
                "asyncArrow": "always",
                "named": "never"
            }
        ],
        "spaced-comment": [
            "error",
            "always",
            {
                "markers": [
                    "/"
                ]
            }
        ],
        "use-isnan": "error",
        "valid-typeof": "off",
        "react/prop-types": "off"
    }
};
