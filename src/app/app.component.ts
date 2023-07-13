import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { NgIf } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NavigationComponent } from './navigation/navigation.component';
import { GithubApiService } from './github-api.service';





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
  
  constructor(public service: GithubApiService) { }


  onToggleSidenav() {

    console.log('onToggleSidenav()');
    console.log(this.service.drawer);
    this.service.drawer.toggle();
        
  }
  showFiller = false;



}



