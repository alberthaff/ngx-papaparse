import {PapaParseResult} from './papa-parse-result';
import {PapaParseParser} from './papa-parse-parser';

export interface PapaParseConfig {
    delimiter?: string | ((input?: string) => string);
    newline?: string;
    quoteChar?: string;
    header?: boolean;
    dynamicTyping?: boolean;
    preview?: number;
    encoding?: string;
    worker?: boolean;
    comments?: false|string;
    step?: (results: PapaParseResult, parser: PapaParseParser) => void;
    complete?: (results: PapaParseResult, parser: PapaParseParser) => void;
    error?: (error: any, file: any) => void;
    download?: boolean;
    skipEmptyLines?: boolean;
    chunk?: (results: PapaParseResult, parser: PapaParseParser) => void;
    fastMode?: boolean;
    beforeFirstChunk?: (chunk: string) => string|void;
    withCredentials?: boolean;
}
