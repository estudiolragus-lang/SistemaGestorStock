import { Component } from '@angular/core';
import {NavBar} from '../../shared/components/nav-bar/nav-bar';
@Component({
  selector: 'app-dashboard',
  imports: [NavBar],
  standalone: true,
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {

}
