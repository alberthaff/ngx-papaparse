import {NgModule, ModuleWithProviders} from "@angular/core";
import {CommonModule} from "@angular/common";
import {PapaParseService} from "./papaparse.service";

@NgModule({
    imports: [
        CommonModule,
    ],
    providers: [
        PapaParseService
    ]
})
export class PapaParseModule { }
