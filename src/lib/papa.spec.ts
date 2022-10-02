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

    it('should parse basic CSV from string', inject([Papa], (papa: Papa) => {
        const csv = '"a","b,","c"""\nd,e,f\ng,h,i';
        const result = papa.parse(csv);

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

    it('should parse basic CSV from string and return each step', inject([Papa], (papa: Papa) => {
        const csv = '"a","b,","c"""\nd,e,f\ng,h,i';

        const expected = [
            ['a', 'b,', 'c"'],
            ['d', 'e', 'f'],
            ['g', 'h', 'i']
        ];

        let line = 0;
        papa.parse(csv, {
            step: result => {
                // Check step data
                expect(result.data).toEqual(jasmine.objectContaining(expected[line]));
                line++;
            }
        });
    }));

    it('should parse CSV from local file', inject([Papa], (papa: Papa) => {
        const csv = '"a","b,","c"""\nd,e,f\ng,h,i';
        const universalBOM = '\uFEFF';

        const blob = new Blob([universalBOM, csv], { type: 'text/plain' });

        papa.parse(blob, {
            complete: result => {
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
            }
        });
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

    it('should prefix dangerous fields with a \'', inject([Papa], (papa: Papa) => {
        const data = [
            ['=a', '+b', '-c', '@d', '\te', '\rf']
        ];
        const result = papa.unparse(data, {
            escapeFormulae: true
        });

        expect(result).toBe(`"'=a","'+b","'-c","'@d","'\te","'\rf"`);
    }));

    it('should prefix dangerous fields with a \' by regexp', inject([Papa], (papa: Papa) => {
        const data = [
            ['=a', '+b', '-c', '@d', '1e', '2f', '3g', '4h']
        ];
        const result = papa.unparse(data, {
            escapeFormulae: /^[1-4].*$/
        });

        expect(result).toBe(`=a,+b,-c,@d,"'1e","'2f","'3g","'4h"`);
    }));

    it('should generate CSV from array Object', inject([Papa], (papa: Papa) => {
        const data = [
            { A: 'a', B: 'b,', C: 'c"' },
            { A: 'd', B: 'e', C: 'f' },
            { A: 'g', B: 'h', C: 'i' },
        ];
        const result = papa.unparse(data, {
            delimiter: ','
        });

        expect(result).toBe('A,B,C\r\na,"b,","c"""\r\nd,e,f\r\ng,h,i');
    }));

    it('should generate CSV from Map Object', inject([Papa], (papa: Papa) => {
        const data = {
            fields: ['A', 'B', 'C'],
            data: [
                ['a', 'b,', 'c"'],
                ['d', 'e', 'f'],
                ['g', 'h', 'i']
            ]
        };

        const result = papa.unparse(data, {
            delimiter: ','
        });

        expect(result).toBe('A,B,C\r\na,"b,","c"""\r\nd,e,f\r\ng,h,i');
    }));

    // Test setters
    it('should set localChunkSize', inject([Papa], (papa: Papa) => {
        // TODO
    }));

    it('should set remoteChunkSize', inject([Papa], (papa: Papa) => {
        // TODO
    }));

    it('should set defaultDelimiter', inject([Papa], (papa: Papa) => {
        // TODO
    }));

    // Test getters
    it('should return bad delimiters', inject([Papa], (papa: Papa) => {
        expect(papa.badDelimiters).toBe(papa._papa.BAD_DELIMITERS);
    }));

    it('should return record separator', inject([Papa], (papa: Papa) => {
        expect(papa.recordSeparator).toBe(papa._papa.RECORD_SEP);
    }));

    it('should return unit separator', inject([Papa], (papa: Papa) => {
        expect(papa.unitSeparator).toBe(papa._papa.UNIT_SEP);
    }));

    it('should return whether workers are supported', inject([Papa], (papa: Papa) => {
        // PhantomJS and Chrome both support workers. Therefore true should always be returned while testing.
        expect(papa.workersSupported).toBe(true);
        expect(papa.workersSupported).toBe(papa._papa.WORKERS_SUPPORTED);
    }));
});
