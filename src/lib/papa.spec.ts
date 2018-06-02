import {TestBed, inject} from '@angular/core/testing';

import {Papa} from './papa';

describe('Papa', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [Papa]
        });
    });

    it('should be created', inject([Papa], (papa: Papa) => {
        expect(papa).toBeTruthy();
    }));

    it('should parse basic CSV', inject([Papa], (papa: Papa) => {
        const csv = '"a","b,","c"""\nd,e,f\ng,h,i';
        const result = papa.parse(csv);

        console.log('TEST', result);

        // Check data
        expect(result.data).toEqual(jasmine.objectContaining([
            ['a', 'b,', 'c"'],
            ['d', 'e', 'f'],
            ['g', 'h', 'i']
        ]));

        // Expect no errors
        expect(result.errors).toEqual([]);

        // Expect correct meta-data
        expect(result.meta).toEqual(jasmine.objectContaining({
            delimiter: ',',
            linebreak: '\n'
        }));
    }));

    it('should generate CSV from array', inject([Papa], (papa: Papa) => {
        const data = [
            ['a', 'b,', 'c"'],
            ['d', 'e', 'f'],
            ['g', 'h', 'i']
        ];
        const result = papa.unparse(data, {
            delimiter: ','
        });

        expect(result).toBe('a,"b,","c"""\r\nd,e,f\r\ng,h,i');
    }));
});
