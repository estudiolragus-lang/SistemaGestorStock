import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import { Footer } from '../../shared/components/footer/footer';

@Component({
  selector: 'app-home',
  imports: [RouterLink,Footer],
  standalone: true,
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

}
