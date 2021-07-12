[![CodeQL](https://github.com/renovatebot/node-schedule/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/renovatebot/node-schedule/actions/workflows/codeql-analysis.yml)
[![e2e](https://github.com/renovatebot/node-schedule/actions/workflows/e2e.yml/badge.svg)](https://github.com/renovatebot/node-schedule/actions/workflows/e2e.yml)
[![jest](https://github.com/renovatebot/node-schedule/actions/workflows/jest.yml/badge.svg)](https://github.com/renovatebot/node-schedule/actions/workflows/jest.yml)
[![lint](https://github.com/renovatebot/node-schedule/actions/workflows/lint.yml/badge.svg)](https://github.com/renovatebot/node-schedule/actions/workflows/lint.yml)

# node-schedule

> Utilities that Renovate bot will use to work with the upstream Node.js schedule

## Thank you @ralphtheninja

This package is based on the prior work of [@ralphtheninja](https://github.com/ralphtheninja).
The original work can be found here: https://github.com/ralphtheninja/lts-schedule.
This repository is based on the files/history from commit `f86953a` of the original repository.

Thank you very, very much @ralphtheninja for making the original package!

## Installation

Installation instructions will be added once there's a published package.

## How to use

```js
const isEOL = require('node-schedule').isEOL;
console.log(isEOL('v0.10')); // true
console.log(isEOL('v0.12')); // true
console.log(isEOL('v10')); // false
```

```js
const json = require('node-schedule').json;
console.log(JSON.stringify(json.v8, null, 2));
```

Yields:

```json
{
  "start": "2017-05-30",
  "lts": "2017-10-31",
  "maintenance": "2019-04-01",
  "end": "2019-12-31",
  "codename": "Carbon"
}
```

## API

### `const schedule = require('node-schedule')`

Returns an object with the properties listed below.

### `schedule.isEOL(version)`

A function that returns `true` if `version` has reached End of Life (EOL), otherwise `false`.

`version` can be a string or a `Number`.

The following calls are equivalent:

```js
isEOL(4);
isEOL('4');
isEOL('v4');
isEOL('v4.8.7');
```

### `schedule.json`

An object with node.js versions as keys.
Each release object has the following properties:

- `start` (required) release start date
- `end` (required) release end date
- `codename` (optional) code name for the release
- `lts` (optional) date when LTS release begins, required for LTS releases
- `maintenance` (optional) date when the maintenance period begins

## Licenses

- [Original project license](ORIGINAL-LICENSE).
- [License for our additions](LICENSE).
