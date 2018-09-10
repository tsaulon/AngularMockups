import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  serverElements = [{type: 'server', name: 'North America', content: 'Brr!'}];

  onServerAdded(server: {name: string, content: string}) {
    this.serverElements.push({
      type: 'server',
      name: server.name,
      content: server.content
    });
  }

  onBlueprintAdded(server: {name: string, content: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: server.name,
      content: server.content
    });
  }
}
