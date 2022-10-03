import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  @Output() path = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  routeTo(path: string) {
    this.path.emit(path);
  }

  attention() {
    
  }

}
