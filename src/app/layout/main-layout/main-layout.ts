import { Component } from '@angular/core';
import { Navbar } from '../navbar/navbar';
import { Footer } from '../footer/footer';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main-layout',
  imports: [RouterOutlet, Navbar, Footer],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.css',
})
export class MainLayout {}
