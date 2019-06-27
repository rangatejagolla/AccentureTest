import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reverse-every-word2',
  templateUrl: './reverse-every-word2.component.html',
  styleUrls: ['./reverse-every-word2.component.css']
})
export class ReverseEveryWord2Component implements OnInit {

  constructor() { }

  ngOnInit() {

    //without using split and reverse

    var OriginalString='hello golla';
    var reverseString:string='';

    var len:number=OriginalString.length;

    for(var x=len;x>=0;x--)
    {
      reverseString+=(OriginalString.charAt(x));
    }

    console.log(reverseString);
  }

}
