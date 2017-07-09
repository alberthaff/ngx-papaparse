import {Injectable} from '@angular/core';
import {PapaParseConfig} from "./papaparseconfig.interface";


@Injectable()
export class PapaParseService {
    private papa:any  = require('papaparse/papaparse.min.js');


    constructor() {

    }

    /**
     * Parse CSV to an array
     * @param csvString
     * @param config
     */
    parse(csvString:string,config?:PapaParseConfig){
        return this.papa.parse(csvString,config);
    }

    /**
     * Convert an array into CSV
     * @param data
     * @param config
     * @returns {any}
     */
    unparse(data,config:PapaParseConfig){
        return this.papa.unparse(data,config);
    }


    /**
     * Set LocalChunkSize
     * @param value {string}
     */
    public setLocalChunkSize(value:string){
        this.papa.setLocalChunkSize(value);
    }

    /**
     * Set RemoteChunkSize
     * @param value {string}
     */
    public setRemoteChunkSize(value:string){
        this.papa.setRemoteChunkSize(value);
    }

    /**
     * Set DefaultDelimiter
     * @param value {string}
     */
    public setDefaultDelimiter(value:string){
        this.papa.setDefaultDelimiter(value);
    }

    // Read-only parameters

    /**
     * An array of characters that are not allowed as delimiters.
     */
    public BAD_DELIMITERS       = this.papa.BAD_DELIMITERS;
    public RECORD_SEP           = this.papa.RECORD_SEP;
    public UNIT_SEP             = this.papa.UNIT_SEP;
    public WORKERS_SUPPORTED    = this.papa.WORKERS_SUPPORTED;
    public SCRIPT_PATH          = this.papa.SCRIPT_PATH;
}
