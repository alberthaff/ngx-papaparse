import { Component } from '@angular/core';
import {PapaParseService} from "./library/papaparse.service";

@Component({
  selector: 'app-root',
  template: '',
})
export class AppComponent {

  constructor(private papa:PapaParseService) {
    this.testParse();
  }


  testParse(){
    console.log(this.papa.parse('test,test,test,test,1,2,3,4',{
      worker: true
    }));
  }
}
