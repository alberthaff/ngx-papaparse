export interface UnparseConfig {
    /**
     * If true, forces all fields to be enclosed in quotes.
     * If an array of true/false values, specifies which fields should be force-quoted (first
     * boolean is for the first column, second boolean for the second column, etc).
     */
    quotes?: boolean | boolean[];

    /**
     * The character used to quote fields.
     */
    quoteChar?: string;

    /**
     * The character used to escape quoteChar inside field values.
     */
    escapeChar?: '"';

    /**
     * The delimiting character. Must not be found in papa.badDelimiters.
     */
    delimiter?: string;

    /**
     * If `false`, will omit the header row.
     * If data is an array of arrays this option is ignored.
     * If data is an array of objects the keys of the first object are the header row.
     * If data is an object with the keys fields and data the fields are the header row.
     */
    header?: boolean; // TODO

    /**
     * The newline sequence.
     */
    newline?: '\r' | '\n' | '\r\n';

    /**
     * If true, lines that are completely empty (those which evaluate to an empty string) will be skipped.
     * If set to 'greedy', lines that don't have any content (those which have only whitespace after parsing) will also be skipped.
     */
    skipEmptyLines?: boolean | 'greedy';

    /**
     * If data is an array of objects this option can be used to manually specify the keys (columns) you expect in the objects.
     * If not set the keys of the first objects are used as column.
     */
    columns?: string[];
}
