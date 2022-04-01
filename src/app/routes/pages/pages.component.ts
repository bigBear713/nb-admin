import { Component } from "@angular/core";
import { PagesService } from "./pages.service";

@Component({
  selector: 'app-pages',
  template: `
    <button (click)="onLogout()">logout</button>
    <router-outlet></router-outlet>
  `,
  providers: [
    PagesService,
  ]
})
export class PagesComponent {

  constructor(
    private service: PagesService,
  ) { }

  onLogout(): void {
    this.service.logout().subscribe();
  }

}