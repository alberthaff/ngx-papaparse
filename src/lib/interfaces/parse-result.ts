import { ParseMeta } from './parse-meta';
import { ParseError } from './parse-error';

export interface ParseResult<T = any> {
    data: T;
    errors: ParseError[];
    meta: ParseMeta;
}
