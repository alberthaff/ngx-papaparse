2.1.0
  - Switched to angular-librarian, closes [#18](https://github.com/Alberthaff/ngx-papaparse/issues/18).
  - Added a new interface for unparse, closes [#17](https://github.com/Alberthaff/ngx-papaparse/issues/17).

2.0.4
  - Fixed incorrect type on comments-parameter, closes [#13](https://github.com/Alberthaff/ngx-papaparse/issues/13).

2.0.3
  - Fixed incorrect peer dependency, closes [#10](https://github.com/Alberthaff/ngx-papaparse/issues/10).

2.0.2
  - Updated scripts for compilation, in order to publish readme on npmjs.

2.0.1
  - Fixed readme on npmjs.com
  
2.0.0
  - papaparse 2 only supports Angular 5. Use [v1](https://github.com/Alberthaff/ngx-papaparse/tree/v1) for older versions.
  - Added official support for Angular 5, closes [#7](https://github.com/Alberthaff/ngx-papaparse/issues/7).
  - Switched to ng-packagr for compilation.
  - Fixed web-worker support, closes [#6](https://github.com/Alberthaff/ngx-papaparse/issues/6).
  - Added support for global configuration.

1.2.5
  - Fixed bug in setLocalChunkSize and setRemoteChunkSize.

1.2.4
  - Allow parsing of files through the parse-method in the PapaParseService.
  - Cleaned up dev-dependencies.

1.2.3
  - Added correct types for parameters on beforeFirstChunk and error in PapaParseConfig interface, closes [#1](https://github.com/Alberthaff/ngx-papaparse/issues/1).
  
1.2.2
  - Added types for all parameters in the config interface.
  - Added new interfaces for PapaParseError, PapaParseMeta, PapaParseResult and PapaParseParser.
  - Cleaned up code in PapaParseModule.
  - Minor changes in readme.

1.2.1
  - Added tags for NPM.
  
1.2.0
  - Optimized the compiler-configuration.

1.1.0
  - Added better comments in the PapaParseService.

1.0.0 First public release
  - Initial release of the papaparse library.
