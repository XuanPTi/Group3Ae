import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() countShopping: number = 0;
  @Input() data: any [] = [];

  constructor() { }

  ngOnInit(): void {
  }
 
}
