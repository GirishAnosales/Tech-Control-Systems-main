import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})

export class SidenavComponent {

  isSmall!: Observable<boolean>;

  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
    this.isSmall = this.breakpointObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small
    ])
      .pipe(
        map(res => res.matches)
      )
  }
}
