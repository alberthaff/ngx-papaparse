import {Inject, Injectable, Optional} from '@angular/core';
import {PapaParseGlobalConfig} from './interfaces/papa-parse-global-config';
import {PapaParseResult} from './interfaces/papa-parse-result';
import {PapaParseConfig} from './interfaces/papa-parse-config';
import {PapaUnparseConfig} from './interfaces/papa-unparse-config';
import * as lib from 'papaparse/papaparse.min.js';

@Injectable()
export class Papa {
    public _papa = lib;

    constructor(@Optional() @Inject('PapaParseGlobalConfig') private config?: PapaParseGlobalConfig
    ) {
        if (!this.config) {
            this.config = {};
        }
    }

    /**
     * Parse CSV to an array
     */
    public parse(csv: string|File, config?: PapaParseConfig): PapaParseResult {
        if (config) {
            if (config.worker === true) {
                if (this.config.scriptPath) {
                    this._papa.SCRIPT_PATH = this.config.scriptPath;
                } else {
                    throw new Error('When using workers, the workerScriptPath must be defined in global' +
                        ' papaparse configuration. See' +
                        ' https://alberthaff.dk/projects/ngx-papaparse/docs/v3/parsing-csv/using-serviceworkers' +
                        ' for more information.');
                }
            }
        }

        return this._papa.parse(csv, config);
    }

    /**
     * Convert an array into CSV
     */
    public unparse(data, config?: PapaUnparseConfig): string {
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
    get recordSeperator() {
        return this._papa.RECORD_SEP;
    }

    /**
     * Also sometimes used as a delimiting character. ASCII code 31.
     */
    get unitSeperator() {
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
