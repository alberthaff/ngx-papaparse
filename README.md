![Logo](https://raw.githubusercontent.com/Alberthaff/ngx-papaparse/master/assets/ngx-papaparse.svg?sanitize=true)

# Papa Parse wrapper for Angular 5

[![Version](https://img.shields.io/npm/v/ngx-papaparse.svg?style=flat-square)](https://www.npmjs.com/package/ngx-papaparse)
[![License](https://img.shields.io/npm/l/ngx-papaparse.svg?style=flat-square)](https://github.com/Alberthaff/ngx-papaparse/blob/master/LICENSE.md)
[![NPM downloads](https://img.shields.io/npm/dt/ngx-papaparse.svg?style=flat-square)](https://www.npmjs.com/package/ngx-papaparse)
[![GitHub stars](https://img.shields.io/github/stars/alberthaff/ngx-papaparse.svg?label=Stars&style=flat-square)](https://github.com/Alberthaff/ngx-papaparse)

This is a [Papa Parse](https://github.com/mholt/PapaParse) wrapper library for Angular 5.

For older versions of Angular, please use [ngx-papaparse 1.x](https://github.com/Alberthaff/ngx-papaparse/tree/v1).

<i>Full documentation available in the [ngx-papaparse wiki](https://github.com/Alberthaff/ngx-papaparse/wiki).</i>

## Installation
You can install the library with [npm](https://npmjs.com).


**Angular 5**

    npm install ngx-papaparse --save


**Angular 2 and 4**

    npm install ngx-papaparse@1.2.5 --save

## Getting started

### Load the library in Angular
You can import the library in your app.module.ts or any other module.
```javascript
import { PapaParseModule } from 'ngx-papaparse';

@NgModule({
  ...
  imports: [
    ...
    PapaParseModule
  ]
})
```

### Using the library
#### Parsing CSV to an array.
Following example converts CSV to an array.
```javascript
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

#### Parsing an array to CSV.
Following example converts an array to CSV.
```javascript
import { Component } from '@angular/core';
import { PapaParseService } from 'ngx-papaparse';

@Component({
  ...
})
export class AppComponent {

    constructor(private papa: PapaParseService) {
        let data = [
            ['Hello', 'World!'],
            ['Line', 'two']
        ];
        
        console.log('Unparsed: ', this.papa.unparse(data));
    }
}
```

For more information, please refer to the [ngx-papaparse wiki](https://github.com/Alberthaff/ngx-papaparse/wiki) and the official [Papa Parse documentation](http://papaparse.com/docs).
