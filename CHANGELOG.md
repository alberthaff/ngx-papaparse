5.1.0
  - Add full for escapeFormulae.

5.0.0
  - Recompiled with NG9 and NG10 support.

4.0.4
  - Recompiled with NG8 support.

4.0.3
  - Fixed typing of skipEmptyLines, to allow value `greedy`.

4.0.2
  - Fixed ParseError not being exported, closes [#47](https://github.com/alberthaff/ngx-papaparse/issues/47).

4.0.1
  - Fixed incorrect title in readme

4.0.0
  - Added support for new options and callbacks introduced by Papa Parse 5.
  - Removed global configuration, since it is no longer needed.
  - `Papa` is automatically imported in the root-module of your app. 
  
3.0.1
  - Added support for Angular 7, closes [#30](https://github.com/alberthaff/ngx-papaparse/issues/30).

3.0.0
  - Added support for Angular 6, closes [#19](https://github.com/alberthaff/ngx-papaparse/issues/19).
  - Switched to Angular CLI for compilation, closes [#20](https://github.com/alberthaff/ngx-papaparse/issues/20).
  - Added unit tests to ensure that everything works as intended, closes [#21](https://github.com/alberthaff/ngx-papaparse/issues/21).
  - Renamed `PapaParseService` to `Papa`.
  - Renamed `BAD_DELIMITERS`, `RECORD_SEP`, `UNIT_SEP` and `WORKERS_SUPPORTED` to `badDelimiters`, `recordSeperator`, `unitSeperator` and `workersSupported`.
  - Swithced `setLocalChunkSize()`, `setRemoteChunkSize()`, `setRemoteChunkSize()` and `badDelimiters()` to setters and getters.
  - Renamed `workerScriptPath` to `scriptPath` in global config.
  
2.1.4
  - Added missing dependencies to package.json

2.1.3
  - Fixed incorrect instructions in README.

2.1.2
  - Fixed incorrect metadata in package.json.

2.1.1
  - Switched links to documentation to point to new website.

2.1.0
  - Switched to angular-librarian, closes [#18](https://github.com/alberthaff/ngx-papaparse/issues/18).
  - Added a new interface for unparse, closes [#17](https://github.com/alberthaff/ngx-papaparse/issues/17).

2.0.4
  - Fixed incorrect type on comments-parameter, closes [#13](https://github.com/alberthaff/ngx-papaparse/issues/13).

2.0.3
  - Fixed incorrect peer dependency, closes [#10](https://github.com/alberthaff/ngx-papaparse/issues/10).

2.0.2
  - Updated scripts for compilation, in order to publish readme on npmjs.

2.0.1
  - Fixed readme on npmjs.com
  
2.0.0
  - papaparse 2 only supports Angular 5. Use [v1](https://github.com/alberthaff/ngx-papaparse/tree/v1) for older versions.
  - Added official support for Angular 5, closes [#7](https://github.com/alberthaff/ngx-papaparse/issues/7).
  - Switched to ng-packagr for compilation.
  - Fixed web-worker support, closes [#6](https://github.com/alberthaff/ngx-papaparse/issues/6).
  - Added support for global configuration.

1.2.5
  - Fixed bug in setLocalChunkSize and setRemoteChunkSize.

1.2.4
  - Allow parsing of files through the parse-method in the PapaParseService.
  - Cleaned up dev-dependencies.

1.2.3
  - Added correct types for parameters on beforeFirstChunk and error in PapaParseConfig interface, closes [#1](https://github.com/alberthaff/ngx-papaparse/issues/1).
  
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
