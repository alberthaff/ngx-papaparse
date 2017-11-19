import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {PapaParseModule} from "./library/papaparse.module";
import {PapaParseGlobalConfig} from "./library/papaparse.interface";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        PapaParseModule,
    ],
    providers: [
        {
            provide: 'PapaParseGlobalConfig',
            useValue: <PapaParseGlobalConfig> {
                workerScriptPath: 'assets/papaparse.min.js'
            }
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
