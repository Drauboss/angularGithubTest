import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { NgIf } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NavigationComponent } from './navigation/navigation.component';





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  onSubmit() {
    console.log('Formular wurde abgeschickt!');
    throw new Error('Method not implemented.');
  }
  title = 'angularGithubTest';
  comp = new NavigationComponent();
  

  onToggleSidenav() {
        
  }
  showFiller = false;



}



