'use strict';

/* eslint id-length: 'off', max-lines: 'off', array-bracket-newline: 'off', array-element-newline: 'off' */

module.exports = {
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module'
  },
  env: {
    node: true,
    es6: true
  },
  rules: {
    'comma-dangle': ['error', 'never'],
    'no-cond-assign': ['error', 'always'],
    'no-constant-condition': 'error',
    'no-dupe-args': 'error',
    'no-dupe-keys': 'error',
    'no-duplicate-case': 'error',
    'no-empty': 'error',
    'no-empty-character-class': 'error',
    'no-ex-assign': 'error',
    'no-extra-boolean-cast': 'error',
    'no-extra-parens': ['error', 'all', {
      conditionalAssign: true,
      nestedBinaryExpressions: false,
      returnAssign: false
    }],
    'no-extra-semi': 'error',
    'no-func-assign': 'error',
    'no-invalid-regexp': ['error', {allowConstructorFlags: ['u', 'y']}],
    'no-irregular-whitespace': 'error',
    'no-unsafe-negation': 'error',
    'no-obj-calls': 'error',
    'no-regex-spaces': 'error',
    'no-sparse-arrays': 'error',
    'no-unreachable': 'error',
    'use-isnan': 'error',
    'valid-jsdoc': 'error',
    'no-unexpected-multiline': 'error',
    'valid-typeof': ['error', {requireStringLiterals: true}],
    'accessor-pairs': 'error',
    'array-callback-return': 'error',
    'block-scoped-var': 'error',
    'complexity': 'error',
    'consistent-return': 'error',
    'curly': 'error',
    'default-case': 'error',
    'dot-location': ['error', 'property'],
    'dot-notation': ['error', {allowKeywords: true}],
    'eqeqeq': 'error',
    'no-caller': 'error',
    'no-case-declarations': 'error',
    'no-div-regex': 'error',
    'no-empty-function': 'error',
    'no-empty-pattern': 'error',
    'no-eq-null': 'error',
    'no-eval': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-extra-label': 'error',
    'no-fallthrough': 'error',
    'no-floating-decimal': 'error',
    'no-implicit-coercion': 'error',
    'no-implicit-globals': 'error',
    'no-implied-eval': 'error',
    'no-iterator': 'error',
    'no-labels': 'error',
    'no-lone-blocks': 'error',
    'no-loop-func': 'error',
    'no-magic-numbers': ['error', {ignoreArrayIndexes: true}],
    'no-multi-spaces': 'error',
    'no-multi-str': 'error',
    'no-global-assign': 'error',
    'no-new-func': 'error',
    'no-new-wrappers': 'error',
    'no-octal': 'error',
    'no-octal-escape': 'error',
    'no-param-reassign': 'error',
    'no-proto': 'error',
    'no-redeclare': 'error',
    'no-return-assign': 'error',
    'no-script-url': 'error',
    'no-self-assign': 'error',
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-throw-literal': 'error',
    'no-unmodified-loop-condition': 'error',
    'no-unused-expressions': 'error',
    'no-unused-labels': 'error',
    'no-useless-call': 'error',
    'no-useless-concat': 'error',
    'no-useless-escape': 'error',
    'no-void': 'error',
    'no-warning-comments': 'error',
    'no-with': 'error',
    'radix': 'error',
    'wrap-iife': ['error', 'inside'],
    'yoda': 'error',
    'no-catch-shadow': 'error',
    'no-delete-var': 'error',
    'no-label-var': 'error',
    'no-shadow': 'error',
    'no-shadow-restricted-names': 'error',
    'no-undef': 'error',
    'no-undefined': 'error',
    'no-use-before-define': 'error',
    'callback-return': 'error',
    'handle-callback-err': 'error',
    'no-mixed-requires': 'error',
    'no-new-require': 'error',
    'no-path-concat': 'error',
    'no-process-env': 'error',
    'no-process-exit': 'error',
    'array-bracket-spacing': ['error', 'never'],
    'brace-style': 'error',
    'camelcase': 'error',
    'comma-spacing': ['error', {
      before: false,
      after: true
    }],
    'comma-style': ['error', 'last'],
    'computed-property-spacing': ['error', 'never'],
    'eol-last': 'error',
    'func-style': ['error', 'expression'],
    'id-length': ['error', {
      min: 1,
      max: 25
    }],
    'indent': ['error', 2],
    'key-spacing': ['error', {
      beforeColon: false,
      afterColon: true
    }],
    'keyword-spacing': 'error',
    'linebreak-style': ['error', 'unix'],
    'max-depth': ['error', 4],
    'max-nested-callbacks': ['error', 4],
    'max-params': ['error', 4],
    'max-statements': ['error', 24],
    'max-statements-per-line': ['error', {max: 1}],
    'new-cap': 'error',
    'new-parens': 'error',
    'newline-per-chained-call': ['error', {ignoreChainWithDepth: 4}],
    'no-array-constructor': 'error',
    'no-bitwise': 'error',
    'no-continue': 'error',
    'no-inline-comments': 'error',
    'no-lonely-if': 'error',
    'no-mixed-spaces-and-tabs': 'error',
    'no-multiple-empty-lines': ['error', {
      max: 2,
      maxEOF: 1
    }],
    'no-negated-condition': 'error',
    'no-nested-ternary': 'error',
    'no-new-object': 'error',
    'no-plusplus': 'error',
    'no-trailing-spaces': 'error',
    'no-unneeded-ternary': 'error',
    'no-whitespace-before-property': 'error',
    'object-curly-spacing': ['error', 'never'],
    'one-var': ['error', 'never'],
    'operator-assignment': ['error', 'always'],
    'padded-blocks': ['error', {classes: 'always'}],
    'quote-props': ['error', 'consistent-as-needed', {keywords: true}],
    'quotes': ['error', 'single', {avoidEscape: true}],
    'require-jsdoc': ['error', {
      require: {
        FunctionDeclaration: true,
        MethodDefinition: true,
        ClassDeclaration: false
      }
    }],
    'semi': ['error', 'always'],
    'semi-spacing': ['error', {
      before: false,
      after: false
    }],
    'sort-vars': 'error',
    'space-before-blocks': ['error', {
      functions: 'always',
      keywords: 'always',
      classes: 'always'
    }],
    'space-before-function-paren': ['error', 'never'],
    'space-in-parens': ['error', 'never'],
    'space-unary-ops': [2, {
      words: true,
      nonwords: false
    }],
    'spaced-comment': ['error', 'always'],
    'wrap-regex': 'error',
    'lines-around-comment': ['error', {
      allowArrayStart: false,
      allowArrayEnd: false,
      allowBlockStart: true,
      allowBlockEnd: false,
      allowObjectStart: false,
      allowObjectEnd: false,
      afterBlockComment: false,
      afterLineComment: false,
      beforeBlockComment: true,
      beforeLineComment: true
    }],
    'arrow-body-style': ['error', 'as-needed'],
    'arrow-parens': ['error', 'always'],
    'arrow-spacing': ['error', {
      before: true,
      after: true
    }],
    'constructor-super': 'error',
    'no-class-assign': 'error',
    'no-confusing-arrow': ['error', {allowParens: true}],
    'no-const-assign': 'error',
    'no-dupe-class-members': 'error',
    'no-duplicate-imports': 'error',
    'no-new-symbol': 'error',
    'no-this-before-super': 'error',
    'no-useless-constructor': 'error',
    'no-var': 'error',
    'prefer-const': 'error',
    'prefer-rest-params': 'error',
    'prefer-template': 'error',
    'template-curly-spacing': 'error',
    'object-property-newline': ['error', {allowMultiplePropertiesPerLine: true}],
    'no-useless-rename': 'error',
    'rest-spread-spacing': ['error', 'never'],
    'max-lines': ['error', {
      max: 300,
      skipComments: true,
      skipBlankLines: true
    }],
    'object-curly-newline': ['error', {
      ObjectExpression: {minProperties: 0, multiline: true},
      ObjectPattern: 'never'
    }],
    'no-mixed-operators': ['error', {
      groups: [
        ['+', '-', '*', '/', '%', '**'],
        ['&', '|', '^', '~', '<<', '>>', '>>>'],
        ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
        ['&&', '||'],
        ['in', 'instanceof']
      ],
      allowSamePrecedence: true
    }],
    'no-tabs': 'error',
    'no-template-curly-in-string': 'error',
    'symbol-description': 'error',
    'line-comment-position': ['error', {position: 'above'}],
    'no-useless-return': 'error',
    'no-return-await': 'error',
    'require-await': 'error',
    'no-await-in-loop': 'error',
    'prefer-promise-reject-errors': 'error',
    'no-multi-assign': 'error',
    'class-methods-use-this': 'error',
    'func-call-spacing': ['error', 'never'],
    'jsx-quotes': ['error', 'prefer-double'],
    'no-console': 'warn',
    'no-debugger': 'error',
    'no-else-return': 'error',
    'no-new': 'error',
    'no-unsafe-finally': 'error',
    'no-unused-vars': ['error', {vars: 'local', args: 'after-used', ignoreRestSiblings: true}],
    'no-buffer-constructor': 'error',
    'lines-between-class-members': ['error', 'always'],
    'no-compare-neg-zero': 'error',
    'semi-style': ['error', 'last'],
    'padding-line-between-statements': [
      'error',
      {blankLine: 'always', prev: '*', next: 'return'},
      {blankLine: 'always', prev: ['const', 'let', 'var'], next: '*'},
      {blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var']},
      {blankLine: 'always', prev: 'directive', next: '*'},
      {blankLine: 'always', prev: ['for', 'do', 'while'], next: '*'},
      {blankLine: 'always', prev: '*', next: 'for'},
      {blankLine: 'always', prev: 'import', next: '*'},
      {blankLine: 'any', prev: 'import', next: 'import'},
      {blankLine: 'always', prev: 'if', next: '*'},
      {blankLine: 'always', prev: 'function', next: '*'},
      {blankLine: 'always', prev: '*', next: 'function'},
      {blankLine: 'always', prev: '*', next: 'export'},
      {blankLine: 'always', prev: '*', next: 'cjs-export'},
      {blankLine: 'any', prev: 'cjs-export', next: 'cjs-export'},
      {blankLine: 'any', prev: 'cjs-import', next: '*'},
      {blankLine: 'any', prev: 'cjs-import', next: 'cjs-import'}
    ],
    'for-direction': 'error',
    'switch-colon-spacing': 'error',
    'getter-return': 'error',
    'function-paren-newline': ['error', 'never'],
    'array-element-newline': ['error', {minItems: 3}],
    'array-bracket-newline': ['error', {multiline: true, minItems: 3}]
  },
  overrides: [
    {
      files: [
        '**/*.spec.js',
        '**/*.test.js'
      ],
      env: {mocha: true},
      rules: {
        'max-nested-callbacks': 'off',
        'max-statements': 'off',
        'no-unused-expressions': 'off',
        'no-unused-vars': 'off',
        'object-curly-newline': 'off',
        'padding-line-between-statements': [
          'error',
          {blankLine: 'always', prev: '*', next: 'return'},
          {blankLine: 'any', prev: ['const', 'let', 'var'], next: '*'},
          {blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var']},
          {blankLine: 'always', prev: 'directive', next: '*'},
          {blankLine: 'any', prev: ['for', 'do', 'while'], next: '*'},
          {blankLine: 'any', prev: '*', next: 'for'},
          {blankLine: 'any', prev: 'import', next: '*'},
          {blankLine: 'any', prev: 'import', next: 'import'},
          {blankLine: 'any', prev: 'if', next: '*'},
          {blankLine: 'any', prev: 'function', next: '*'},
          {blankLine: 'any', prev: '*', next: 'function'},
          {blankLine: 'any', prev: '*', next: 'export'},
          {blankLine: 'any', prev: '*', next: 'cjs-export'},
          {blankLine: 'any', prev: 'cjs-import', next: '*'},
          {blankLine: 'any', prev: 'cjs-import', next: 'cjs-import'}
        ],
        'array-element-newline': 'off',
        'array-bracket-newline': 'off'
      }
    }
  ]
};
