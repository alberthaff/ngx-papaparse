import { ParseResult } from './parse-result';
import { PapaParseParser } from './papa-parse-parser';

export interface ParseConfig {
    delimiter?: string | ((input?: string) => string); // TODO
    newline?: string;
    quoteChar?: string;
    // TODO escapeChar
    header?: boolean;
    // TODO transformHeader
    dynamicTyping?: boolean;
    preview?: number;
    encoding?: string;
    worker?: boolean;
    comments?: false|string;
    step?: (results: ParseResult, parser: PapaParseParser) => void; // TODO
    complete?: (results: ParseResult, file?: File) => void; // TODO
    error?: (error: any, file: any) => void; // TODO
    download?: boolean;
    // TODO downloadRequestHeaders
    skipEmptyLines?: boolean;
    chunk?: (results: ParseResult, parser: PapaParseParser) => void; // TODO
    fastMode?: boolean;
    beforeFirstChunk?: (chunk: string) => string|void; // TODO
    withCredentials?: boolean;
    // TODO transform
    // TODO delimitersToGuess
}
