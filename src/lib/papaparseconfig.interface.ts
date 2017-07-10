export interface PapaParseConfig {
    delimiter?: any, //todo: Add function and string
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
    error?: any, // todo: Add function with parameters
    download?: boolean,
    skipEmptyLines?: boolean,
    chunk?: any, // todo: Add function with parameters
    fastMode?: boolean,
    beforeFirstChunk?: (a,b) => any, // todo: Add function with parameters
    withCredentials?: boolean
}
