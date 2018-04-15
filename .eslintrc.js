module.exports = {
  
  // "parserOptions": {
  //   "ecmaVersion": 6,
  //   "sourceType": "module", 
  //   "ecmaFeatures": {
  //     "jsx": true
  //   },
  // },
  // "parser": "babel-eslint", //babel/esprima?/typescript
  // "setting": 
  // "root":
  "env": {
    "browser": true, // support console object
    "es6": true,
    "node": true
  },
  "globals": {
    "google": true //true: enable overwritten
  },
  // sets of rules distributed as NPM packages.
  // can be used in "extends" (/recommended) or in "rule" (specific rule)
  "plugins": [ 
    // "react"
  ],
  "extends": [
    "airbnb", // import/react/jsx-a11y
    // "eslint:recommended",
    // "plugin:react/recommended"
  ],
  "rules": { // overrides the rules from "extends"
    "indent": [2, 2, {"SwitchCase": 1}],
    "react/prop-types": 2,
    "linebreak-style": [2, "windows"],
    "quotes": [2, "single"],
    "semi": [2, "always"],
    "no-undef": 1,
    "no-console": 0,

    // web-hub:
    // "linebreak-style":0,
    // "arrow-body-style": [1, "as-needed"],
    // "arrow-parens": ["error", "always"],
    // "brace-style": 1,
    // "class-methods-use-this": 0,
    // "camelcase": 0,
    // "comma-dangle": 0,
    // "keyword-spacing": 1,
    // "global-require": 1,
    // "import/imports-first": 0,
    // "import/newline-after-import": 0,
    // "import/no-dynamic-require": 0,
    // "import/no-extraneous-dependencies": 0,
    // "import/no-named-as-default": 0,
    // "import/no-unresolved": 2,
    // "import/no-webpack-loader-syntax": 0,
    // "import/prefer-default-export": 0,
    // "indent": [2, 2, {"SwitchCase": 1}],
    // "jsx-a11y/aria-props": 2,
    // "jsx-a11y/heading-has-content": 0,
    // "jsx-a11y/href-no-hash": 2,
    // "jsx-a11y/interactive-supports-focus": 1,
    // "jsx-a11y/label-has-for": 2,
    // "jsx-a11y/mouse-events-have-key-events": 2,
    // "jsx-a11y/no-noninteractive-element-interactions": 1,
    // "jsx-a11y/role-has-required-aria-props": 2,
    // "jsx-a11y/role-supports-aria-props": 2,
    // "jsx-quotes": [1, "prefer-double"],
    // "max-len": 0,
    // "newline-per-chained-call": 0,
    // "no-confusing-arrow": 0,
    // "no-console": 0,
    // "no-nested-ternary": 1,
    // "no-plusplus": [2, {"allowForLoopAfterthoughts": true}],
    // "no-trailing-spaces": [1, {"skipBlankLines": true}],
    // "no-return-assign": 1,
    // "no-unused-vars": 0,
    // "no-use-before-define": 0,
    // "object-curly-spacing": 1,
    // "object-shorthand": 1,
    // "padded-blocks": 0,
    // "prefer-rest-params": 0,
    // "prefer-template": 1,
    // "quotes":1,
    // "quote-props": 0,
    // "react/forbid-prop-types": 0,
    // "react/jsx-first-prop-new-line": [2, "multiline"],
    // "react/jsx-filename-extension": 0,
    // "react/jsx-indent": 1,
    // "react/jsx-no-bind": 1,
    // "react/jsx-no-target-blank": 0,
    // "react/jsx-tag-spacing": 1,
    // "react/no-array-index-key": 1,
    // "react/require-default-props": 0,
    // "react/require-extension": 0,
    // "react/self-closing-comp": 0,
    // "redux-saga/no-yield-in-race": 2,
    // "redux-saga/yield-effects": 2,
    // "require-yield": 0,
    // "space-before-blocks": 1
  }
}