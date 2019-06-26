export interface ParseError {
    type: 'Quotes' | 'Delimiter' | 'FieldMismatch';
    code: 'MissingQuotes' | 'UndetectableDelimiter' | 'TooFewFields' | 'TooManyFields';
    message: string;
    row: number;
}
