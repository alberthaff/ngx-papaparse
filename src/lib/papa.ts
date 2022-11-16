import { Injectable } from '@angular/core';
import { ParseResult } from './interfaces/parse-result';
import { ParseConfig } from './interfaces/parse-config';
import { UnparseConfig } from './interfaces/unparse-config';
import { UnparseData } from './interfaces/unparse-data';
import * as lib from 'papaparse/papaparse.min.js';

@Injectable({
    providedIn: 'root',
})
export class Papa<T = any> {
    public _papa = lib;

    /**
     * Parse CSV to an array
     */
    public parse(csv: string | Blob, config?: ParseConfig): ParseResult<T> {
        return this._papa.parse(csv, config);
    }

    /**
     * Convert an array into CSV
     */
    public unparse(data: UnparseData, config?: UnparseConfig): string {
        return this._papa.unparse(data, config);
    }

    /**
     * Set the size in bytes of each file chunk.
     * Used when streaming files obtained from the DOM that
     * exist on the local computer. Default 10 MB.
     */
    public setLocalChunkSize(value: number): void {
        this._papa.LocalChunkSize = value;
    }

    /**
     * Set the size in bytes of each remote file chunk.
     * Used when streaming remote files. Default 5 MB.
     */
    public setRemoteChunkSize(value: number): void {
        this._papa.RemoteChunkSize = value;
    }

    /**
     * Set the delimiter used when it is left unspecified and cannot be detected automatically. Default is comma.
     */
    public setDefaultDelimiter(value: string): void {
        this._papa.DefaultDelimiter = value;
    }

    /**
     * An array of characters that are not allowed as delimiters.
     */
    get badDelimiters() {
        return this._papa.BAD_DELIMITERS;
    }

    /**
     * The true delimiter. Invisible. ASCII code 30.
     * Should be doing the job we strangely rely upon commas and tabs for.
     */
    get recordSeparator() {
        return this._papa.RECORD_SEP;
    }

    /**
     * Also sometimes used as a delimiting character. ASCII code 31.
     */
    get unitSeparator() {
        return this._papa.UNIT_SEP;
    }

    /**
     * Whether or not the browser supports HTML5 Web Workers.
     * If false, worker: true will have no effect.
     */
    get workersSupported(): boolean {
        return this._papa.WORKERS_SUPPORTED;
    }
}
