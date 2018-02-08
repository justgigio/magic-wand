Magic Wand
=========

Be a powerful Wizard with this amazing plugable book of spells

[![Build Status](https://travis-ci.org/giovanecosta/magic-wand.svg?branch=master)](https://travis-ci.org/giovanecosta/magic-wand)
[![Coverage Status](https://coveralls.io/repos/github/giovanecosta/magic-wand/badge.svg?branch=master)](https://coveralls.io/github/giovanecosta/magic-wand?branch=master)

## Installation

  `npm install magic-wand`

## Usage

    import { git } from 'magic-wand';

    console.log(git.status());
  
  Output should be something like 
  ```
  On branch master
  Your branch is up-to-date with 'origin/master'.
  Changes to be committed:
    (use "git reset HEAD <file>..." to unstage)

    new file:   index.js

  ```

## Tests

  `npm test`

## Contributing

In lieu of a formal style guide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code.
