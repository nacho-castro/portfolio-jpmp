import { Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { AboutComponent } from './components/about/about.component';
import { ObrasComponent } from './components/obras/obras.component';
import { ContactComponent } from './components/contact/contact.component';
import { TallerComponent } from './components/taller/taller.component';

export const routes: Routes = [
    {path: 'inicio', component: InicioComponent},
    {path: '', component: InicioComponent},
    {path: 'about', component: AboutComponent},
    {path: 'obras', component: ObrasComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'taller', component: TallerComponent},
];
