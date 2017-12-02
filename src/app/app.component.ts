import { Component } from "@angular/core";
import { PapaParseService } from "ngx-papaparse";

@Component({
  selector: "app-root",
  template: "Open console for output."
})
export class AppComponent {

  constructor (private papa: PapaParseService) {
     console.log(this.papa);
  }

}
