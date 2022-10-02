export type ArrayData = Array<Array<string|number>>;

export type ArrayObject = Array<{ [k: string]: string|number }>;

export interface MapObject {
    fields: Array<string>;
    data: Array<Array<string|number>>;
}

export type UnparseData = ArrayData | ArrayObject | MapObject;
