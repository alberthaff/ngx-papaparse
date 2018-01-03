export interface PapaParseError {
    type: "Quotes"|"Delimiter"|"FieldMismatch",
    code: "MissingQuotes"|"UndetectableDelimiter"|"TooFewFields"|"TooManyFields",
    message: string,
    row: number
}

export interface PapaParseMeta {
    delimiter: string,
    linebreak: string,
    aborted: boolean,
    fields: string[],
    truncated: boolean
}

export interface PapaParseResult {
    data: any,
    errors: PapaParseError[],
    meta: PapaParseMeta
}

export interface PapaParseParser {
    abort: () => PapaParseResult,
    aborted: () => boolean,
    parse: (csv: string|File, baseIndex: number, ignoreLastRow: boolean) => PapaParseResult,
    pause: () => void,
    paused: () => boolean,
    resume: () => void,
    streamer: any
}

export interface PapaParseConfig {
    delimiter?: string | ((input?: string) => string),
    newline?: string,
    quoteChar?: string,
    header?: boolean,
    dynamicTyping?: boolean,
    preview?: number,
    encoding?: string,
    worker?: boolean,
    comments?: false|string,
    step?: (results: PapaParseResult, parser: PapaParseParser) => void,
    complete?: (results: PapaParseResult, parser: PapaParseParser) => void,
    error?: (error: any, file: any) => void,
    download?: boolean,
    skipEmptyLines?: boolean,
    chunk?: (results: PapaParseResult, parser: PapaParseParser) => void,
    fastMode?: boolean,
    beforeFirstChunk?: (chunk: string) => string|void,
    withCredentials?: boolean
}

export interface PapaParseGlobalConfig {
    workerScriptPath?: string
}
