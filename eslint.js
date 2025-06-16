module.exports = {
  // Specify environments where the code will run
  env: {
    browser: true,        // Browser globals like window, document
    es2022: true,        // Enable ES2022 globals and syntax
    node: true,          // Node.js globals and scoping
    jest: true           // Jest testing globals
  },

  // Extend recommended configurations
  extends: [
    'eslint:recommended'  // ESLint's recommended rules
  ],

  // Parser options for modern JavaScript
  parserOptions: {
    ecmaVersion: 2022,    // Support modern JavaScript syntax
    sourceType: 'module'  // Enable ES6 modules (import/export)
  },

  // Custom rules for the utility library
  rules: {
    // ================================
    // ERROR PREVENTION
    // ================================
    
    // Require consistent use of semicolons
    'semi': ['error', 'always'],
    
    // Enforce consistent quote style
    'quotes': ['error', 'single', { 
      'avoidEscape': true,
      'allowTemplateLiterals': true 
    }],
    
    // Disallow unused variables (except function arguments)
    'no-unused-vars': ['error', { 
      'argsIgnorePattern': '^_',
      'varsIgnorePattern': '^_' 
    }],
    
    // Require === instead of ==
    'eqeqeq': ['error', 'always'],
    
    // Disallow console.log in production (warn in development)
    'no-console': 'warn',
    
    // Disallow debugger statements
    'no-debugger': 'error',
    
    // ================================
    // CODE STYLE & CONSISTENCY
    // ================================
    
    // Enforce consistent indentation (2 spaces)
    'indent': ['error', 2, { 
      'SwitchCase': 1,
      'ignoredNodes': ['ConditionalExpression']
    }],
    
    // Require space before function parentheses
    'space-before-function-paren': ['error', {
      'anonymous': 'always',
      'named': 'never',
      'asyncArrow': 'always'
    }],
    
    // Enforce spacing around operators
    'space-infix-ops': 'error',
    
    // Require spaces around keywords
    'keyword-spacing': 'error',
    
    // Enforce consistent spacing inside braces
    'object-curly-spacing': ['error', 'always'],
    
    // Enforce consistent spacing inside arrays
    'array-bracket-spacing': ['error', 'never'],
    
    // Require trailing commas in multiline structures
    'comma-dangle': ['error', {
      'arrays': 'never',
      'objects': 'never',
      'imports': 'never',
      'exports': 'never',
      'functions': 'never'
    }],
    
    // Enforce consistent comma spacing
    'comma-spacing': ['error', { 'before': false, 'after': true }],
    
    // ================================
    // BEST PRACTICES
    // ================================
    
    // Require curly braces for all control statements
    'curly': ['error', 'all'],
    
    // Disallow empty blocks
    'no-empty': ['error', { 'allowEmptyCatch': true }],
    
    // Require default case in switch statements
    'default-case': 'error',
    
    // Disallow multiple empty lines
    'no-multiple-empty-lines': ['error', { 'max': 2, 'maxEOF': 1 }],
    
    // Require consistent line breaks
    'linebreak-style': ['error', 'unix'],
    
    // Enforce maximum line length
    'max-len': ['warn', { 
      'code': 100,
      'ignoreUrls': true,
      'ignoreStrings': true,
      'ignoreTemplateLiterals': true,
      'ignoreComments': true
    }],
    
    // ================================
    // FUNCTION & VARIABLE NAMING
    // ================================
    
    // Enforce camelCase naming convention
    'camelcase': ['error', { 
      'properties': 'never',
      'ignoreDestructuring': true 
    }],
    
    // Require descriptive variable names
    'id-length': ['error', { 
      'min': 2,
      'exceptions': ['i', 'j', 'k', 'x', 'y', 'z', 'e', 'el', 'id']
    }],
    
    // ================================
    // MODERN JAVASCRIPT FEATURES
    // ================================
    
    // Prefer const over let when possible
    'prefer-const': 'error',
    
    // Prefer template literals over string concatenation
    'prefer-template': 'error',
    
    // Prefer arrow functions for callbacks
    'prefer-arrow-callback': 'error',
    
    // Require let or const instead of var
    'no-var': 'error',
    
    // Disallow duplicate imports
    'no-duplicate-imports': 'error',
    
    // ================================
    // ERROR HANDLING
    // ================================
    
    // Require error handling in callbacks
    'handle-callback-err': 'error',
    
    // Disallow empty catch blocks
    'no-empty-catch': 'off', // Allow empty catch for utility functions
    
    // ================================
    // DOCUMENTATION
    // ================================
    
    // Require JSDoc comments for functions (warning only)
    'valid-jsdoc': ['warn', {
      'requireReturn': false,
      'requireReturnDescription': false,
      'requireParamDescription': true
    }],
    
    // ================================
    // PERFORMANCE
    // ================================
    
    // Disallow unnecessary function binding
    'no-extra-bind': 'error',
    
    // Disallow unnecessary boolean casts
    'no-extra-boolean-cast': 'error'
  },

  // Override rules for specific file patterns
  overrides: [
    {
      // Test files can be more relaxed
      files: ['**/*.test.js', '**/__tests__/**/*.js'],
      rules: {
        'no-console': 'off',        // Allow console in tests
        'max-len': 'off',           // Allow longer lines in tests
        'prefer-arrow-callback': 'off' // Allow function declarations in tests
      }
    },
    {
      // Configuration files
      files: ['*.config.js', '.eslintrc.js', 'rollup.config.js'],
      env: {
        node: true,
        browser: false
      },
      rules: {
        'no-console': 'off'         // Allow console in config files
      }
    },
    {
      // Example and demo files
      files: ['examples/**/*.js', 'demo/**/*.js'],
      rules: {
        'no-console': 'off',        // Allow console in examples
        'no-unused-vars': 'warn'    // More relaxed for demo code
      }
    }
  ],

  // Global variables
  globals: {
    // Define any global variables your utilities might use
    // Example: 'myGlobalUtility': 'readonly'
  },

  // Ignore patterns (alternative to .eslintignore file)
  ignorePatterns: [
    'dist/',              // Built files
    'coverage/',          // Coverage reports
    'node_modules/',      // Dependencies
    '*.min.js'           // Minified files
  ]
};

// Alternative: .eslintrc.json format
/*
{
  "env": {
    "browser": true,
    "es2022": true,
    "node": true,
    "jest": true
  },
  "extends": ["eslint:recommended"],
  "parserOptions": {
    "ecmaVersion": 2022,
    "sourceType": "module"
  },
  "rules": {
    "semi": ["error", "always"],
    "quotes": ["error", "single"],
    "no-unused-vars": ["error", { "argsIgnorePattern": "^_" }],
    "eqeqeq": ["error", "always"],
    "no-console": "warn",
    "indent": ["error", 2],
    "prefer-const": "error",
    "no-var": "error"
  }
}
*/
