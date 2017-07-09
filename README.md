# Angular 2/4 wrapper for Papa Parse

<a href="https://www.npmjs.com/package/ngx-papaparse">
    <img src="https://img.shields.io/npm/v/ngx-papaparse.svg" alt="npm version" height="18">
</a>
<a href="https://github.com/Alberthaff/ngx-papaparse/blob/master/LICENSE.md">
    <img src="https://img.shields.io/npm/l/ngx-papaparse.svg" alt="npm version" height="18">
</a>
<a href="https://www.npmjs.com/package/ngx-papaparse">
    <img src="https://img.shields.io/npm/dt/ngx-papaparse.svg" alt="npm version" height="18">
</a>


This is an Angular wrapper library for the [Papa Parse](https://github.com/mholt/PapaParse) CSV parser.



## Building the library
This step is only required if you intend to modify the library. Otherwise, just complete the installation.

    npm install
    npm run build


## Installation
You can install the library with [npm](https://npmjs.com).

    npm install ngx-papaparse --save 


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
Example 1
```javascript
import { Component } from '@angular/core';
import {PapaParseService} from 'ngx-papaparse';

@Component({
  ...
})
export class AppComponent {

    constructor(private papa: PapaParseService) {
        let csvData = '"Hello","World!"';
        
        console.log(this.papa.parse(csvData,{
            complete: (results, file) => {
                alert("The data has been parsed!");
                console.log("Parsed: ", results, file);
            }
        }));
    }
}
```
