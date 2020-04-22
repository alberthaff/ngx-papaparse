import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { scan, shareReplay } from 'rxjs/operators';
import { ParseResult } from './interfaces/parse-result';
import { ParseConfig } from './interfaces/parse-config';
import { UnparseConfig } from './interfaces/unparse-config';
import * as lib from 'papaparse/papaparse.min.js';

@Injectable({
    providedIn: 'root',
})
export class Papa {
    public _papa = lib;

    /**
     * Parse CSV to an array
     */
    public parse(csv: string|Blob, config?: ParseConfig): ParseResult {
        return this._papa.parse(csv, config);
    }

    /**
     * Parse CSV to Observable
     */
    public parseToObservable(csv: string|Blob, config: ParseConfig = {}): Observable<ParseResult> {
        const { chunk, step, complete, error, ...filteredConfig } = config;

        const observable = new Observable<ParseResult>(observer => {
            this._papa.parse(csv, {
                ...filteredConfig,
                step: (result, parser) => {
                    observer.next(result);

                    if (step) {
                        step(result, parser);
                    }
                },
                complete: (result, parser) => {
                    observer.complete();

                    if (complete) {
                        complete(result, parser);
                    }
                },
                error: (err, file) => {
                    observer.error(err);

                    if (error) {
                        error(err, file);
                    }
                }
            });
        });

        const emptyResult: ParseResult = {
            data: [],
            errors: [],
            meta: {
                delimiter: '',
                linebreak: '',
                aborted: false,
                fields: [],
                truncated: false,
            }
        };

        return observable.pipe(
            scan((acc, cur) => ({
                ...cur,
                data: [...acc.data, cur.data]
            }), emptyResult),
            shareReplay(1)
        );
    }

    /**
     * Convert an array into CSV
     */
    public unparse(data, config?: UnparseConfig): string {
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
