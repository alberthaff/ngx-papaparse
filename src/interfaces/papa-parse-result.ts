import {PapaParseMeta} from './papa-parse-meta';
import {PapaParseError} from './papa-parse-error';

export interface PapaParseResult {
    data: any;
    errors: PapaParseError[];
    meta: PapaParseMeta;
}
