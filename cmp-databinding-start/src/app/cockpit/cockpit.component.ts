import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})

export class CockpitComponent implements OnInit {

  //  let event variables to be used in parent component
  //  @Output() decorator used for sending data outside of this component
  @Output() serverCreated = new EventEmitter<{name: string, content: string}>();
  @Output() blueprintCreated = new EventEmitter<{name: string, content: string}>();

  newServerName = '';
  newServerContent = '';

  constructor() { }

  ngOnInit() {
  }

  onAddServer() {
    if (this.newServerName.length > 0) {
      this.serverCreated.emit({name: this.newServerName, content: this.newServerContent});
    }
  }

  onAddBlueprint() {
    if (this.newServerContent.length > 0) {
      this.blueprintCreated.emit({name: this.newServerName, content: this.newServerContent});
    }
  }
}
