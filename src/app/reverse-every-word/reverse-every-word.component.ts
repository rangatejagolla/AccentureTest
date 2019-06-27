import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reverse-every-word',
  templateUrl: './reverse-every-word.component.html',
  styleUrls: ['./reverse-every-word.component.css']
})
export class ReverseEveryWordComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
    //using split and reverse

      var OriginalString='hello golla';
      var reverseString:string;

      reverseString=OriginalString.split('').reverse().join('');
      console.log(reverseString);


  }

}
