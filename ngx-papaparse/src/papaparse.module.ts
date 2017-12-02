import {NgModule, ModuleWithProviders} from "@angular/core";
import {CommonModule} from "@angular/common";
import {PapaParseService} from "./papaparse.service";

@NgModule({
  imports: [
    CommonModule
  ]
})
export class PapaParseModule {
    public static forRoot(): ModuleWithProviders {
        return {
            ngModule: PapaParseModule,
            providers: [
                PapaParseService
            ]
        };
    }
}
