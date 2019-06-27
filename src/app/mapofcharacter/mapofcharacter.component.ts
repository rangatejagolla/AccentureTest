import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mapofcharacter',
  templateUrl: './mapofcharacter.component.html',
  styleUrls: ['./mapofcharacter.component.css']
})
export class MapofcharacterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var arr=['hello world', 'hello world'], map={};

    arr.join('').split('').forEach(a=>map[a]=(map[a]||0)+1);

    console.log(map);
  }

}
