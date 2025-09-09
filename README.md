# grunt-mocha2025
A barebone mocha test runner for Grunt.

## Install

```
$ npm install --save-dev mocha grunt-mocha2025
```

## Usage

```js
require('load-grunt-tasks')(grunt);

grunt.initConfig({
  mocha2025: {
    tests: {
      src: ['tests/**/*Test.js'],
    }
  }
});
```

## Licence
MIT
