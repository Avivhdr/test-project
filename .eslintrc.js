module.exports = {

  // "parserOptions": {
  //   "ecmaVersion": 6,
  //   "sourceType": "module", 
  //   "ecmaFeatures": {
  //     "jsx": true
  //   },
  // },
  "parser": "babel-eslint", //babel(babel-eslint)/esprima?/typescript
  // "setting": // adding data that will be supplied to all rules. 
  // "root": // helps set different rules for different part of the app
  "env": {
    // "browser": false,     // browser global variables.
    // "node": false,        // Node.js global variables and Node.js-specific rules.
    // "es6": true,
    "jest": true
  },
  "globals": {
    "window": true,
    "navigator": true,
    "document": true,
    "google": true //true: enable overwritten
  },
  // sets of rules distributed as NPM packages.
  // can be used in "extends" (/recommended) or in "rule" (specific rule)
  // "plugins": [ 
  //   "react"
  // ],
  "extends": [
    "airbnb", // import/react/jsx-a11y
    // "eslint:recommended",
    // "plugin:react/recommended"
  ],
  "rules": { // overrides the rules from "extends"
    "no-nested-ternary": 2,
    "no-return-assign": 2,
    "no-use-before-define": 0,
    "no-confusing-arrow": [2, { "allowParens": true }],
    "indent": [2, 2, { "SwitchCase": 1 }], //    "editor.tabSize": 2,
    "react/prop-types": 2,
    "linebreak-style": [2, "windows"],
    "quotes": [2, "single"],
    "semi": [2, "always"],
    "no-undef": 1,
    "no-console": 1,
    "comma-dangle": 0,
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "react/prefer-stateless-function": 1,
    "jsx-quotes": [1, "prefer-double"],
    "arrow-parens": [2, "always"],
    "arrow-body-style": [2, "as-needed"],
    "brace-style": [2, "1tbs"],
    "class-methods-use-this": 0,
    "camelcase": [2, { "properties": "always" }],
    "global-require": 1,
    "max-len": 0,
    "newline-per-chained-call": [2, { "ignoreChainWithDepth": 2 }],
    "react/require-extension": 0,
    "react/jsx-first-prop-new-line": [2, "multiline"],
    "react/jsx-indent": [2, 2],
    "react/jsx-no-bind": [2, { "ignoreRefs": true }],
    "react/jsx-tag-spacing": [2, {
      "closingSlash": "never",
      "beforeSelfClosing": "always",
      "afterOpening": "never",
      "beforeClosing": "never"
    }],
    "function-paren-newline": 0,
  }
}