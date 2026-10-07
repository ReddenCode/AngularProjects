import { Component, signal } from '@angular/core';
import { TestComponent } from '../components/test/test.component';

@Component({
  imports: [TestComponent],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('movie-app');
}
