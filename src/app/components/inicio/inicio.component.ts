import { Component } from '@angular/core';
import { ProfileComponent } from "../profile/profile.component";
import { VideoComponent } from "../video/video.component";

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [ProfileComponent, VideoComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

}
