import {Injectable, Inject, Optional} from '@angular/core';
import {PapaParseGlobalConfig} from './interfaces/papa-parse-global-config';
import {PapaParseConfig} from './interfaces/papa-parse-config';
import {PapaParseResult} from './interfaces/papa-parse-result';
import {PapaUnparseConfig} from './interfaces/papa-unparse-config';


@Injectable()
export class PapaParseService {
    private papa: any  = require('papaparse/papaparse.min.js');

    /**
     * An array of characters that are not allowed as delimiters.
     */
    public BAD_DELIMITERS       = this.papa.BAD_DELIMITERS;

    /**
     * The true delimiter. Invisible. ASCII code 30.
     * Should be doing the job we strangely rely upon commas and tabs for.
     */
    public RECORD_SEP           = this.papa.RECORD_SEP;

    /**
     * Also sometimes used as a delimiting character. ASCII code 31.
     */
    public UNIT_SEP             = this.papa.UNIT_SEP;

    /**
     * Whether or not the browser supports HTML5 Web Workers.
     * If false, worker: true will have no effect.
     */
    public WORKERS_SUPPORTED    = this.papa.WORKERS_SUPPORTED;

    constructor(@Optional() @Inject('PapaParseGlobalConfig') private config?: PapaParseGlobalConfig) {
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
                    this.papa.SCRIPT_PATH = this.config.workerScriptPath;
                } else {
                    throw new Error('When using workers, the workerScriptPath must be defined in global' +
                        ' papaparse configuration. See https://github.com/Alberthaff/papaparse/wiki/Using-workers' +
                        ' for more information.');
                }
            }
        }

        return this.papa.parse(csv, config);
    }

    /**
     * Convert an array into CSV
     */
    public unparse(data, config?: PapaUnparseConfig): string {
        return this.papa.unparse(data, config);
    }

    /**
     * Set the size in bytes of each file chunk.
     * Used when streaming files obtained from the DOM that
     * exist on the local computer. Default 10 MB.
     */
    public setLocalChunkSize(value: number): void {
        this.papa.LocalChunkSize = value;
    }

    /**
     * Set the size in bytes of each remote file chunk.
     * Used when streaming remote files. Default 5 MB.
     */
    public setRemoteChunkSize(value: number): void {
        this.papa.RemoteChunkSize = value;
    }

    /**
     * Set the delimiter used when it is left unspecified and cannot be detected automatically. Default is comma.
     */
    public setDefaultDelimiter(value: string): void {
        this.papa.DefaultDelimiter = value;
    }
}
