import { Component } from '@angular/core';
import {PapaParseService} from '../src/papa-parse.service';

@Component({
    selector: 'example-root',
    templateUrl: './example.component.html',
    styleUrls: []
})
export class ExampleComponent {
    constructor(private papa: PapaParseService) {
        this.parseExample();
        this.unparseExaple();
    }

    private parseExample(): void {
        console.log(
            'Example :: papa.parse()',
            this.papa.parse(
                'a,b,c,d\na,b,c,d',
                {
                    // config
                }
            )
        );
    }

    private unparseExaple(): void {
        console.log(
            'Example :: papa.unparse()',
            this.papa.unparse(
                [['a', 'b', 'c', 'd'], ['a', 'b', 'c', 'd']],
                {
                    // Config here
                }
            )
        );
    }
}
