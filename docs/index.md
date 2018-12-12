# Introduction

This library is a Papa Parse wrapper for Angular.
This version is only compatible with Angular 6+.
For older versions of Angular, please use an older version of ngx-papaparse.

# Installation
In order to install the library, run following command in your project directory:

\`\`\`bash
$ npm install ngx-papaparse@3 --save
\`\`\`


## Getting started

You can import the library in your \`app.module.ts\` or any other module.
\`\`\`javascript
import { PapaParseModule } from 'ngx-papaparse';

@NgModule({
  ...
  imports: [
    ...
    PapaParseModule
  ]
})
\`\`\`

# Parsing CSV
The \`papa.parse()\` function can either parse synchronously:

\`\`\`typescript
console.log("Result:", papa.parse(data,config));
\`\`\`

or asynchronously:

\`\`\`javascript
papa.parse(data, {
    complete: result => console.log(result)
});
\`\`\`

Following example converts CSV to an array.
\`\`\`javascript
import { Component } from '@angular/core';
import { Papa } from 'ngx-papaparse';

@Component({
  ...
})
export class AppComponent {
    constructor(private papa: Papa) {
        let csvData = '"Hello","World!"';
        let options = {
            complete: (results, file) => {
                console.log('Parsed: ', results, file);
            }
            // Add your options here
        };

        this.papa.parse(csvData,options);
    }
}
\`\`\`

## Options

Options and callbacks are added as the second parameter in \`papa.parse()\`.


| Option            | Type                          | Explanation   |
| ----------------- | ----------------------------- | ------------- |
| delimiter         | string or (input) => any      | The delimiting character. Leave blank to auto-detect. It can be a string or a function. If string, it must be one of length 1. If a function, it must accept the input as first parameter and it must return a string which will be used as delimiter. In both cases it cannot be found in \`papa.BAD_DELIMITERS\`. |
| newline           | string                        | The newline sequence. Leave blank to auto-detect. Must be one of \`\\r\`, \`\\n\`, or \`\\r\\n\`. |
| quoteChar         | string                        | The character used to quote fields. The quoting of all fields is not mandatory. Any field which is not quoted will correctly read. |
| header            | boolean                       | If true, the first row of parsed data will be interpreted as field names. An array of field names will be returned in meta, and each row of data will be an object of values keyed by field name instead of a simple array. Rows with a different number of fields from the header row will produce an error. Warning: Duplicate field names will overwrite values in previous fields having the same name. |
| dynamicTyping     | boolean                       | If true, numeric and boolean data will be converted to their type instead of remaining strings. Numeric data must conform to the definition of a decimal literal. European-formatted numbers must have commas and dots swapped. If also accepts an object or a function. If object it's values should be a boolean to indicate if dynamic typing should be applied for each column number (or header name if using headers). If it's a function, it should return a boolean value for each field number (or name if using headers) which will be passed as first argument. |
| preview           | number                        | If > 0, only that many rows will be parsed. |
| encoding          | string                        | The encoding to use when opening local files. If specified, it must be a value supported by the [FileReader API](https://developer.mozilla.org/en/docs/Web/API/FileReader). |
| worker            | boolean                       | Whether or not to use a worker thread. Using a worker will keep your page reactive, but may be slightly slower. Note that worker option is only available when parsing files and not when converting from JSON to CSV. For usage, please refer to [Using workers](https://github.com/Alberthaff/ngx-papaparse/wiki/Using-workers).
| comments          | string                        | A string that indicates a comment (for example, "#" or "//"). When Papa encounters a line starting with this string, it will skip the line. |
| download          | boolean                       | If true, this indicates that the string you passed as the first argument to \`papa.parse()\` is actually a URL from which to download a file and parse its contents. |
| skipEmptyLines    | boolean                       | If true, lines that are completely empty will be skipped. An empty line is defined to be one which evaluates to empty string. |
| fastMode          | boolean                       | Fast mode speeds up parsing significantly for large inputs. However, it only works when the input has no quoted fields. Fast mode will automatically be enabled if no " characters appear in the input. You can force fast mode either way by setting it to true or false. |
| withCredentials   | boolean                       | A boolean value passed directly into XMLHttpRequest's "withCredentials" property. |



## Callbacks

Options and callbacks are added as the second parameter in \`papa.parse()\`.

| Callback          | Parameters        | Explanation   |
| ----------------- | ----------------- | ------------- |
| beforeFirstChunk  | chunk             | A function to execute before parsing the first chunk. Can be used with chunk or step streaming modes. The function receives as an argument the chunk about to be parsed, and it may return a modified chunk to parse. This is useful for stripping header lines (as long as the header fits in a single chunk). |
| chunk             | results, parser   | A callback function, identical to step, which activates streaming. However, this function is executed after every chunk of the file is loaded and parsed rather than every row. Works only with local and remote files. Do not use both chunk and step callbacks together. For the function signature, see the documentation for the step function. |
| step              | results, parser   | Used when streaming large files. See [the official docs](http://papaparse.com/faq#streaming) for more information.
| complete          | results, file     | A function that is executed when parsing is complete.
| error             | error, file       | A callback to execute if [FileReader](https://developer.mozilla.org/en/docs/Web/API/FileReader) encounters an error. |

## Using serviceworkers

Papa Parse supports web-workers. However, since Angular compiles everything into chunks and lazyloads it, Papa Parse can't load the library from the worker out-of-the-box.

In order for the web-workers to work, we must add papaparse.min.js as an asset, so the web-worker can load the library.

Fortunately, Angular CLI can do this automatically. Add following to your \`assets\` in your \`angular-cli.json\`:

\`\`\`json
{
    "glob": "**/papaparse.min.js",
    "input": "./node_modules/papaparse",
    "output": "/assets/"
}
\`\`\`


This will copy \`papaparse.min.js\` to \`dist/assets\` when building the application. Feel free to change the path within \`dist\`.



Next we must tell ngx-papaparse where the \`papaparse.min.js\` file is located once the app has been deployed.

Add following to your \`AppModule\` or the module where you have imported PapaParseModule:
\`\`\`javascript
{
    provide: 'PapaParseGlobalConfig',
    useValue: <PapaParseGlobalConfig> {
        scriptPath: '/assets/papaparse.min.js'
    }
}
\`\`\`

You should now be able to use workers.

# Generating CSV

The \`papa.unparse()\` converts an array to CSV:

\`\`\`javascript
import { Component } from '@angular/core';
import { Papa } from 'ngx-papaparse';

@Component({
  ...
})
export class AppComponent {
    constructor(private papa: Papa) {
        let data = ["hello","world"];
        console.log('Unparsed: ', this.papa.unparse(data,options));
    }
}
\`\`\`


## Options

| Option            | Type                          | Explanation   |
| ----------------- | ----------------------------- | ------------- |
| quotes            | boolean                       | Add quotes between all values.  |
| quoteChar         | string                        | The character to be used as quote character, default \`"\`. |
| delimiter         | string                        | The character to be used as delimiter, default \`,\`. |
| header            | boolean                       | Add header to file? |
| newline           | string                        | Newline character, default \`\\r\\n\`. |

# Global configuration
## Options

| Option            | Type         | Explanation   |
| ----------------- | ------------ | ------------- |
| scriptPath        | string       | Path for the papaparse.min.js script. |
