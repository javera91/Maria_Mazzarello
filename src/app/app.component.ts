import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { P1HeaderComponent } from './components/p1-header/p1-header.component';
import { P2ContentComponent } from './components/p2-content/p2-content.component';
import { P3FooterComponent } from './components/p3-footer/p3-footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, P1HeaderComponent, P2ContentComponent, P3FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Maria_Mazzarello';
}
