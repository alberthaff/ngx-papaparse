import { ParseResult } from './parse-result';
import { PapaParseParser } from './papa-parse-parser';

export interface ParseConfig {
    /**
     * The delimiting character. Leave blank to auto-detect from a list of most common delimiters, or any values passed in through
     * delimitersToGuess. It can be a string or a function. If string, it must be one of length 1. If a function, it must accept the input
     * as first parameter and it must return a string which will be used as delimiter.
     * In both cases it cannot be found in Papa.badDelimiters.
     */
    delimiter?: string | ((input?: string) => string); // TODO test function

    /**
     * The newline sequence. Leave blank to auto-detect.
     */
    newline?: '\r'|'\n'|'\r\n'|'';

    /**
     * The character used to quote fields. The quoting of all fields is not mandatory. Any field which is not quoted will correctly read.
     */
    quoteChar?: string;

    /**
     * The character used to escape the quote character within a field. If not set, this option will default to the value of quoteChar,
     * meaning that the default escaping of quote character within a quoted field is using the quote character
     * two times. (e.g. "column with ""quotes"" in text")
     */
    escapeChar?: string;

    /**
     * If true, the first row of parsed data will be interpreted as field names.
     * An array of field names will be returned in meta, and each row of data will be an object of values keyed by field name instead of
     * a simple array. Rows with a different number of fields from the header row will produce an error.
     * Warning: Duplicate field names will overwrite values in previous fields having the same name.
     */
    header?: boolean;

    /**
     * A function to apply on each header. Requires header to be true. The function receives the header as its first argument.
     */
    transformHeader?: (header: string) => string; // TODO Test function

    /**
     * If true, numeric and boolean data will be converted to their type instead of remaining strings.
     * Numeric data must conform to the definition of a decimal literal. European-formatted numbers must have commas and dots swapped.
     * It also accepts an object or a function. If object it's values should be a boolean to indicate if dynamic typing should be applied
     * for each column number (or header name if using headers). If it's a function, it should return a boolean value for each field number
     * (or name if using headers) which will be passed as first argument.
     */
    dynamicTyping?: boolean; // TODO add object and function

    /**
     * If > 0, only that many rows will be parsed.
     */
    preview?: number;

    /**
     * The encoding to use when opening local files. If specified, it must be a value supported by the FileReader API.
     */
    encoding?: string;

    /**
     * Whether or not to use a worker thread. Using a worker will keep your page reactive, but may be slightly slower.
     */
    worker?: boolean;

    /**
     * A string that indicates a comment (for example, "#" or "//").
     * When Papa encounters a line starting with this string, it will skip the line.
     */
    comments?: false|string;

    /**
     * Streaming is necessary for large files which would otherwise crash the browser. You can call parser.abort() to abort parsing.
     * And, except when using a Web Worker, you can call parser.pause() to pause it, and parser.resume() to resume.
     */
    step?: (results: ParseResult, parser: PapaParseParser) => void; // TODO

    /**
     * The callback to execute when parsing is complete. It receives the parse results. If parsing a local file, the File is passed in, too.
     * When streaming, parse results are not available in this callback.
     */
    complete?: (results: ParseResult, file?: File) => void; // TODO

    /**
     * A callback to execute if FileReader encounters an error.
     */
    error?: (error: any, file: any) => void; // TODO

    /**
     * If true, this indicates that the string you passed as the first argument to parse()
     * is actually a URL from which to download a file and parse it's contents.
     */
    download?: boolean;

    /**
     * Headers to be included in the download request.
     */
    downloadRequestHeaders?: {[key: string]: string}; // TODO Test typing

    /**
     * If true, lines that are completely empty (those which evaluate to an empty string) will be skipped. If set to 'greedy',
     * lines that don't have any content (those which have only whitespace after parsing) will also be skipped.
     */
    skipEmptyLines?: boolean | 'greedy';

    /**
     * A callback function, identical to step, which activates streaming.
     * However, this function is executed after every chunk of the file is loaded and parsed rather than every row.
     * Works only with local and remote files. Do not use both chunk and step callbacks together.
     */
    chunk?: (results: ParseResult, parser: PapaParseParser) => void; // TODO

    /**
     * Fast mode speeds up parsing significantly for large inputs. However, it only works when the input has no quoted fields.
     * Fast mode will automatically be enabled if no " characters appear in the input.
     * You can force fast mode either way by setting it to true or false.
     */
    fastMode?: boolean;

    /**
     * A function to execute before parsing the first chunk. Can be used with chunk or step streaming modes.
     * The function receives as an argument the chunk about to be parsed, and it may return a modified chunk to parse.
     * This is useful for stripping header lines (as long as the header fits in a single chunk).
     */
    beforeFirstChunk?: (chunk: string) => string|void; // TODO

    /**
     * A boolean value passed directly into XMLHttpRequest's "withCredentials" property.
     */
    withCredentials?: boolean;

    /**
     * A function to apply on each value. The function receives the value as its first argument and the column number or
     * header name when enabled as its second argument. The return value of the function will replace the value it received.
     * The transform function is applied before dynamicTyping.
     */
    transform?: (value: string, columnOrHeader: string|number) => string; // TODO test function

    /**
     * An array of delimiters to guess from if the delimiter option is not set.
     */
    delimitersToGuess?: string[];
}
