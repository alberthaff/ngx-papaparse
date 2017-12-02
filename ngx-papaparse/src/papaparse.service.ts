import { Injectable } from "@angular/core";
import { PapaParseConfig, PapaParseResult } from "./papaparse.interface";


@Injectable()
export class PapaParseService {
    private papa: any  = require("papaparse/papaparse.min.js");

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

    /**
     * Parse CSV to an array
     * @param csv
     * @param config
     */
    parse(csv: string|File, config?: PapaParseConfig): PapaParseResult {
        return this.papa.parse(csv, config);
    }

    /**
     * Convert an array into CSV
     * @param data
     * @param config
     * @returns {string}
     */
    unparse(data, config?: PapaParseConfig): string {
        return this.papa.unparse(data, config);
    }


    /**
     * Set the size in bytes of each file chunk.
     * Used when streaming files obtained from the DOM that
     * exist on the local computer. Default 10 MB.
     * @param value {number}
     */
    public setLocalChunkSize(value: number): void {
        this.papa.LocalChunkSize = value;
    }

    /**
     * Set the size in bytes of each remote file chunk.
     * Used when streaming remote files. Default 5 MB.
     * @param value {number}
     */
    public setRemoteChunkSize(value: number): void {
        this.papa.RemoteChunkSize = value;
    }

    /**
     * Set the delimiter used when it is left unspecified and cannot be detected automatically. Default is comma.
     * @param value {string}
     */
    public setDefaultDelimiter(value: string): void {
        this.papa.DefaultDelimiter = value;
    }
}
