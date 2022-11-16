import { ParseResult } from './parse-result';

export interface PapaParseParser<T = any> {
    abort: () => ParseResult<T>;
    aborted: () => boolean;
    parse: (
        csv: string | Blob,
        baseIndex: number,
        ignoreLastRow: boolean
    ) => ParseResult<T>;
    pause: () => void;
    paused: () => boolean;
    resume: () => void;
    streamer: any;
}
