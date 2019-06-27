import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-remove-duplicate',
  templateUrl: './remove-duplicate.component.html',
  styleUrls: ['./remove-duplicate.component.css']
})
export class RemoveDuplicateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var arr=['a','b','a','c','d','d','e'];
    arr=arr.filter(function(item,index,input)
    {
      return input.indexOf(item)==index;
    })

    console.log(arr);
  }

}
