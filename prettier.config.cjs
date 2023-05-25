/** @type {import('prettier').Config} */

module.exports = {
  endOfLine: "lf",
  semi: true,
  singleQuote: false,
  tabWidth: 2,
  trailingComma: "es5",
  importOrder: [
    "^(react/(.*)$)|^(react$)",
    "^(jotai/(.*)$)|^(jotai$)",
    "<BUILT_IN_MODULES>",
    "<THIRD_PARTY_MODULES>",
    "",
    "^@/types$",
    "^(@/utils/(.*)$)|^(@/utils$)",
    "^(@/store/(.*)$)|^(@/store$)",
    "^(@/hooks/(.*)$)|^(@/hooks$)",
    "^(@/pages/(.*)$)|^(@/pages$)",
    "^(@/components/(.*)$)|^(@/components$)",
    "^@/styles/(.*)$",
    "^[./]",
  ],
  importOrderSeparation: false,
  importOrderSortSpecifiers: true,
  importOrderBuiltinModulesToTop: true,
  importOrderParserPlugins: ["typescript", "jsx", "decorators-legacy"],
  importOrderMergeDuplicateImports: true,
  importOrderCombineTypeAndValueImports: true,
  plugins: [
    "@ianvs/prettier-plugin-sort-imports",
    "prettier-plugin-tailwindcss",
  ],
};
