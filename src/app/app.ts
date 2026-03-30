import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeadComponent } from "./shared/components/head.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeadComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('gite');
}
