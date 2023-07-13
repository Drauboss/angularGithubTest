import { Component, ViewChild, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { GithubApiService } from '../github-api.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  private breakpointObserver = inject(BreakpointObserver);
  public isExpanded: boolean = false;
  

  @ViewChild('drawer') drawer: any;

 

  constructor(public service: GithubApiService) { }

  ngAfterViewInit() {
    this.service.drawer = this.drawer;
  }


  ngOnInit() {
    console.log('NavigationComponent.ngOnInit()');


  }

  drawerToggle() {

    console.log('drawerToggle()');
    this.drawer.toggle();
  }

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
}
