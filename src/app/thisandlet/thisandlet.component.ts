import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-thisandlet',
  templateUrl: './thisandlet.component.html',
  styleUrls: ['./thisandlet.component.css']
})
export class ThisandletComponent implements OnInit {

  //let is used to declare the varibales
  //let cannot be declared as globally

  //let a:number; // error at this line

  name:string;
  constructor() { }

  ngOnInit() {
    // let can be declared at locally
    let a=100;

    //This is used to use the global variables
    this.name="Theja"

    console.log(this.name);
  }

}
