import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})

export class ServerElementComponent implements OnInit {
  //  reference variable outside of this component
  //  variable outside must be called 'srvElement' to bind to this variable.

  @Input() element: {type: string, name: string, content: string};

  constructor() { }

  ngOnInit() {
  }

}
