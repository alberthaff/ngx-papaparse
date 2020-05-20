![Logo](https://raw.githubusercontent.com/alberthaff/ngx-papaparse/master/assets/ngx-papaparse.svg?sanitize=true)

# Papa Parse wrapper for Angular

[![Version](https://img.shields.io/npm/v/ngx-papaparse.svg?style=flat-square)](https://www.npmjs.com/package/ngx-papaparse)
[![Travis](https://img.shields.io/travis/alberthaff/ngx-papaparse/master.svg?style=flat-square)](https://travis-ci.org/alberthaff/ngx-papaparse)
[![Coveralls github](https://img.shields.io/coveralls/github/alberthaff/ngx-papaparse.svg?style=flat-square)](https://coveralls.io/github/alberthaff/ngx-papaparse)
[![License](https://img.shields.io/npm/l/ngx-papaparse.svg?style=flat-square)](https://github.com/alberthaff/ngx-papaparse/blob/master/LICENSE.md)
[![NPM downloads](https://img.shields.io/npm/dt/ngx-papaparse.svg?style=flat-square)](https://www.npmjs.com/package/ngx-papaparse)
[![GitHub stars](https://img.shields.io/github/stars/alberthaff/ngx-papaparse.svg?label=Stars&style=flat-square)](https://github.com/alberthaff/ngx-papaparse)

This is a [Papa Parse](https://github.com/mholt/PapaParse) wrapper library for Angular.

<i>More information in the [full documentation](https://alberthaff.dk/projects/ngx-papaparse/docs/v5).</i>

## Installation
You can install the library with [npm](https://npmjs.com).

### Angular 9+

    npm install ngx-papaparse@5 --save
    
[Documentation](https://alberthaff.dk/projects/ngx-papaparse/docs/v5)


### Older versions of Angular

For older versions of Angular, please see the docs for the correct version.

## Getting started

Use the Papa Service in your project:

```typescript
import { Component } from '@angular/core';
import { Papa } from 'ngx-papaparse';

@Component({
  ...
})
export class AppComponent {

    constructor(private papa: Papa) {
        const csvData = '"Hello","World!"';
        
        this.papa.parse(csvData,{
            complete: (result) => {
                console.log('Parsed: ', result);
            }
        });
    }
}
``` 


For a more detailed explanation of how to use this library, please refer to the [full documentation](https://alberthaff.dk/projects/ngx-papaparse/docs/v5). 
