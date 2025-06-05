import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-part-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './part-card.component.html',
  styleUrl: './part-card.component.css'
})
export class PartCardComponent {
  @Input() part: any;
}
