import { ParseMeta } from './parse-meta';
import { ParseError } from './parse-error';

export interface ParseResult {
    data: any;
    errors: ParseError[];
    meta: ParseMeta;
}
