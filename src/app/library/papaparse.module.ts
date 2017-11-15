import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PapaParseService } from "./papaparse.service";


@NgModule({
  imports: [CommonModule],
  providers: [PapaParseService],
  declarations: [],
  exports: [CommonModule]
})
export class PapaParseModule {
}
