import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-taller',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './taller.component.html',
  styleUrl: './taller.component.css'
})
export class TallerComponent implements OnInit{
  talleres: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any>('assets/data/data.json').subscribe(data => {
      this.talleres = data.talleres;
    });
  }  
}
