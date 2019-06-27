import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-remove-duplicate2',
  templateUrl: './remove-duplicate2.component.html',
  styleUrls: ['./remove-duplicate2.component.css']
})
export class RemoveDuplicate2Component implements OnInit {

  constructor() { }

  ngOnInit() {
    var arr=['a','b','a','c','d','d','e'];

    for(var a=0;a<arr.length-1;a++)
    {
      for(var b=a+1;b<arr.length;b++)
      {
        if(arr[a]!=null &&(arr[a]==arr[b]))
        {
          arr[b]=null;
        }
      }
    }

    console.log(arr);
  }

}
