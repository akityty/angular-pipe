import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-demo',
  templateUrl: './pipe-demo.component.html',
  styleUrls: ['./pipe-demo.component.css']
})
export class PipeDemoComponent implements OnInit {
  today = new Date();
  user = {
    name: 'Cong cong'
  };
  collection: string[] = ['a', 'b', 'c', 'd', 'a', 'b', 'c', 'd'];
  constructor() { }

  ngOnInit() {
  }

}
