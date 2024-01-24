import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Part1Component } from './components/part-1/part-1.component';
import { Part2Component } from './components/part-2/part-2.component';
import { Part3Component } from './components/part-3/part-3.component';
import { Part4Component } from './components/part-4/part-4.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, Part1Component, Part2Component, Part3Component, Part4Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'practice230124';
}
