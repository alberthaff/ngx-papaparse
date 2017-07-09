export interface PapaParseConfig {
    delimiter?: string,
    newline?: string,
    quoteChar?: string,
    header?: boolean,
    dynamicTyping?: boolean,
    preview?: number,
    encoding?: string,
    worker?: boolean,
    comments?: false,
    step?: (results, parser) => any,
    complete?: (results, parser) => any,
    error?: any, // func
    download?: boolean,
    skipEmptyLines?: boolean,
    chunk?: any, // func
    fastMode?: boolean,
    beforeFirstChunk?: (a,b) => any, // func
    withCredentials?: boolean
}
