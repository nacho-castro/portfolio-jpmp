import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-muestras',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './muestras.component.html',
  styleUrl: './muestras.component.css'
})

export class MuestrasComponent implements OnInit{
  muestras: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any>('assets/data/data.json').subscribe(data => {
      this.muestras = data.muestras;
    });
  }  
}
