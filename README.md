![Logo](https://raw.githubusercontent.com/alberthaff/ngx-papaparse/master/assets/ngx-papaparse.svg?sanitize=true)

# Papa Parse wrapper for Angular

[![Version](https://img.shields.io/npm/v/ngx-papaparse.svg?style=flat-square)](https://www.npmjs.com/package/ngx-papaparse)
[![License](https://img.shields.io/npm/l/ngx-papaparse.svg?style=flat-square)](https://github.com/alberthaff/ngx-papaparse/blob/master/LICENSE.md)
[![NPM downloads](https://img.shields.io/npm/dt/ngx-papaparse.svg?style=flat-square)](https://www.npmjs.com/package/ngx-papaparse)
[![GitHub stars](https://img.shields.io/github/stars/alberthaff/ngx-papaparse.svg?label=Stars&style=flat-square)](https://github.com/alberthaff/ngx-papaparse)

This is a [Papa Parse](https://github.com/mholt/PapaParse) wrapper library for Angular.

<i>More information in the [full documentation](https://alberthaff.dk/projects/ngx-papaparse/docs/v2).</i>

## Installation
You can install the library with [npm](https://npmjs.com).

### Angular 5

    npm install ngx-papaparse@2.1.3 --save
    
[Documentation](https://alberthaff.dk/projects/ngx-papaparse/docs/v2)


### Older version of Angular

For older versions of Angular, please use [ngx-papaparse 1.x](https://alberthaff.dk/projects/ngx-papaparse/docs/v1) for NG 2/4.


## Getting started

First import the `PapaParseModule` into your app.

```typescript
import { PapaParseModule } from 'ngx-papaparse';

@NgModule({
  ...
  imports: [
    ...
    PapaParseModule
  ]
})
```

Then use it in a component.

```typescript
import { Component } from '@angular/core';
import { PapaParseService } from 'ngx-papaparse';

@Component({
  ...
})
export class AppComponent {

    constructor(private papa: PapaParseService) {
        let csvData = '"Hello","World!"';
        
        this.papa.parse(csvData,{
            complete: (results, file) => {
                console.log('Parsed: ', results, file);
            }
        });
    }
}
``` 


For a more detailed explanation of how to use this library, please refer to the [full documentation](https://alberthaff.dk/projects/ngx-papaparse/docs/v2). 
