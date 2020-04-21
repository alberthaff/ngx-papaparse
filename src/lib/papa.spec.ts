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

    it('should parse basic CSV to Observable', inject([Papa], (papa: Papa) => {
        const csv = '"a","b,","c"""\nd,e,f\ng,h,i';

        const expected = [
            ['a', 'b,', 'c"'],
            ['d', 'e', 'f'],
            ['g', 'h', 'i']
        ];

        const observable = papa.parseToObservable(csv);

        let line = 1;
        observable.subscribe(result => {
            expect(result.data).toEqual(jasmine.objectContaining(
                expected.slice(0, line)
            ));

            line++;
        });

        observable.toPromise().then(result => {
            // Check data
            expect(result.data).toEqual(jasmine.objectContaining(expected));

            // Expect no errors
            expect(result.errors).toEqual([]);

            // Expect correct meta-data
            expect(result.meta).toEqual(jasmine.objectContaining({
                delimiter: ',',
                linebreak: '\n'
            }));
        });
    }));

    it('should parseToObservable proxy step and complete config ', inject([Papa], (papa: Papa) => {
        const csv = '"a","b,","c"""\nd,e,f\ng,h,i';

        const step = jasmine.createSpy();
        const complete = jasmine.createSpy();

        const observable = papa.parseToObservable(csv, { step, complete });

        observable.toPromise().then(data => {
            expect(step).toHaveBeenCalled();
            expect(complete).toHaveBeenCalled();
        });
    }));

    it('should parseToObservable prevent proxy chunk config ', inject([Papa], (papa: Papa) => {
        const csv = '"a","b,","c"""\nd,e,f\ng,h,i';

        const chunk = jasmine.createSpy();

        const observable = papa.parseToObservable(csv, { chunk });

        observable.toPromise().then(data => {
            expect(chunk).not.toHaveBeenCalled();
        });
    }));

    it('should parse CSV from local file', inject([Papa], (papa: Papa) => {
        // TODO
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
