import {ParseResult} from './parse-result';

export interface PapaParseParser {
    abort: () => ParseResult;
    aborted: () => boolean;
    parse: (csv: string|File, baseIndex: number, ignoreLastRow: boolean) => ParseResult;
    pause: () => void;
    paused: () => boolean;
    resume: () => void;
    streamer: any;
}
