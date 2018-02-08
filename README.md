Magic Wand
=========

Be a powerful Wizard with this amazing plugable book of spells

[![Build Status](https://travis-ci.org/giovanecosta/magic-wand.svg?branch=master)](https://travis-ci.org/giovanecosta/magic-wand)
[![Coverage Status](https://coveralls.io/repos/github/giovanecosta/magic-wand/badge.svg?branch=master)](https://coveralls.io/github/giovanecosta/magic-wand?branch=master)

## Installation

  `npm install magic-wand`

## Usage

    import { git } from 'magic-wand';

    console.log(git.getCurrentBranch());
  
  Output should be something like: `'master'`

## How to get Asana Access Token

1. Log in to your Asana Account.
2. Click on your profile picture to open menu. 
3. Go into "My Profile Settings".
4. Select "Apps" tab. 
5. Click on "Manage Developer Apps" link on bottom left corner. 
6. Click on "+ Create New personal Access Token" link. 

It's done (you can give it a reference name if you want).

## Tests

  `npm test`

## Contributing

In lieu of a formal style guide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code.
