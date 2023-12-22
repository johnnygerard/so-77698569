import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-two',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './two.component.html',
  styleUrl: './two.component.scss'
})
export class TwoComponent {

}
