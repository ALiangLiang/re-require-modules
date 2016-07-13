
# re-require-modules
Watch module files and automatically update you modules.

## Why?
It's update your module code without restart entire node program. If you just change some partial code, it's better for you.

## Usage
```js
// Import first.
const REquire = require('re-require-modules');
// or use ES6 style
import REquire from 're-require-modules';

// First parameter use for determine turn on or true off watch mode.
const re = new REquire(true, './moduleA', './moduleB', './moduleC');
// or you can ignore first parameter. Default is open watch mode.
const re = new REquire('./moduleA', './moduleB', './moduleC');
// use array is available.
const re = new REquire('./moduleA', ['./moduleB', './moduleC'], './moduleD');

// ATTENTION!! It couldn't import build-in modules or modules installed from other place (npm).
const re = new REquire('fs', 'express'); // Failed.

// Use module.
// like this
re.moduleA
re.moduleB
re.moduleC
```

OK. Now, it's will watch these module file and update them.

## Test
```sh
npm test
```
Um... I'm lazy. The testing is too simple I know.
