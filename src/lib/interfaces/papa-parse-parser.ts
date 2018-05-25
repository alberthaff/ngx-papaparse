import {PapaParseResult} from './papa-parse-result';

export interface PapaParseParser {
    abort: () => PapaParseResult;
    aborted: () => boolean;
    parse: (csv: string|File, baseIndex: number, ignoreLastRow: boolean) => PapaParseResult;
    pause: () => void;
    paused: () => boolean;
    resume: () => void;
    streamer: any;
}
