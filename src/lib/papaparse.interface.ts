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

export interface PapaParseParser {
    abort: () => PapaParseResult,
    aborted: () => boolean,
    parse: (csvString:string, baseIndex:number, ignoreLastRow:boolean) => PapaParseResult,
    pause: () => void,
    paused: () => boolean,
    resume: () => void,
    streamer: any
}

export interface PapaParseConfig {
    delimiter?: string | ((input?:string) => string),
    newline?: string,
    quoteChar?: string,
    header?: boolean,
    dynamicTyping?: boolean,
    preview?: number,
    encoding?: string,
    worker?: boolean,
    comments?: false,
    step?: (results: PapaParseResult, parser:PapaParseParser) => void,
    complete?: (results: PapaParseResult, parser:PapaParseParser) => void,
    error?: any, // todo: Add function with parameters
    download?: boolean,
    skipEmptyLines?: boolean,
    chunk?: (results: PapaParseResult, parser:PapaParseParser) => void,
    fastMode?: boolean,
    beforeFirstChunk?: (a,b) => any, // todo: Add function with parameters
    withCredentials?: boolean
}
