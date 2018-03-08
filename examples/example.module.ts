import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ExampleComponent } from './example.component';
import { PapaParseModule } from '../index';

@NgModule({
    declarations: [
        ExampleComponent
    ],
    imports: [
        BrowserModule,
        PapaParseModule
    ],
    providers: [],
    bootstrap: [ExampleComponent]
})
export class ExampleModule { }
