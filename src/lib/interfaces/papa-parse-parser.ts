import {ParseResult} from './parse-result';

export interface PapaParseParser {
    abort: () => ParseResult;
    aborted: () => boolean;
    parse: (csv: string|Blob, baseIndex: number, ignoreLastRow: boolean) => ParseResult;
    pause: () => void;
    paused: () => boolean;
    resume: () => void;
    streamer: any;
}
