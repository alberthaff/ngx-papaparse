import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PapaParseService } from './papa-parse.service';

@NgModule({
    imports: [
        CommonModule,
    ],
    providers: [
        PapaParseService
    ]
})
export class PapaParseModule { }
