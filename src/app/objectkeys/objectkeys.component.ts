import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-objectkeys',
  templateUrl: './objectkeys.component.html',
  styleUrls: ['./objectkeys.component.css']
})
export class ObjectkeysComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var obj={  a: 5, b: { c: { d: 10 } }}

    let objKeys = Object.keys(obj);
    let output = [];

    for (var a of objKeys) { 
      output.push(a);
    }

    for (var b of objKeys) { 
      output.push(objKeys[b]);
    }

      console.log(output);
  }
}
