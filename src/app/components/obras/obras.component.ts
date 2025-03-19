import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-obras',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './obras.component.html',
  styleUrl: './obras.component.css'
})
export class ObrasComponent implements OnInit{
  obras: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any>('assets/data/data.json').subscribe(data => {
      this.obras = data.obras;
    });
  }  
}
