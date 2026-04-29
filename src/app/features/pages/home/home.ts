import { Component } from '@angular/core';
import { Hero } from '../../components/hero/hero';
import { Recommendations } from '../../components/recommendations/recommendations';

@Component({
  selector: 'app-home',
  imports: [Hero, Recommendations],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
