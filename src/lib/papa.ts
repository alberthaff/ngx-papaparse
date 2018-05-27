import {Inject, Injectable, Optional} from '@angular/core';
import {PapaParseGlobalConfig} from './interfaces/papa-parse-global-config';
import {PapaParseResult} from './interfaces/papa-parse-result';
import {PapaParseConfig} from './interfaces/papa-parse-config';
import {PapaUnparseConfig} from './interfaces/papa-unparse-config';
import * as lib from 'papaparse/papaparse.min.js';

@Injectable()
export class Papa {
    private papaLib = lib;

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
                if (this.config.workerScriptPath) {
                    this.papaLib.SCRIPT_PATH = this.config.workerScriptPath;
                } else {
                    throw new Error('When using workers, the workerScriptPath must be defined in global' +
                        ' papaparse configuration. See https://github.com/Alberthaff/papaparse/wiki/Using-workers' +
                        ' for more information.');
                }
            }
        }

        return this.papaLib.parse(csv, config);
    }

    /**
     * Convert an array into CSV
     */
    public unparse(data, config?: PapaUnparseConfig): string {
        return this.papaLib.unparse(data, config);
    }

    /**
     * Set the size in bytes of each file chunk.
     * Used when streaming files obtained from the DOM that
     * exist on the local computer. Default 10 MB.
     */
    public setLocalChunkSize(value: number): void {
        this.papaLib.LocalChunkSize = value;
    }

    /**
     * Set the size in bytes of each remote file chunk.
     * Used when streaming remote files. Default 5 MB.
     */
    public setRemoteChunkSize(value: number): void {
        this.papaLib.RemoteChunkSize = value;
    }

    /**
     * Set the delimiter used when it is left unspecified and cannot be detected automatically. Default is comma.
     */
    public setDefaultDelimiter(value: string): void {
        this.papaLib.DefaultDelimiter = value;
    }

    /**
     * An array of characters that are not allowed as delimiters.
     */
    get badDelimiters() {
        return this.papaLib.BAD_DELIMITERS;
    }

    /**
     * The true delimiter. Invisible. ASCII code 30.
     * Should be doing the job we strangely rely upon commas and tabs for.
     */
    get recordSeperator() {
        return this.papaLib.RECORD_SEP;
    }

    /**
     * Also sometimes used as a delimiting character. ASCII code 31.
     */
    get unitSeperator() {
        return this.papaLib.UNIT_SEP;
    }

    /**
     * Whether or not the browser supports HTML5 Web Workers.
     * If false, worker: true will have no effect.
     */
    get workersSupported(): boolean {
        return this.papaLib.WORKERS_SUPPORTED;
    }
}
