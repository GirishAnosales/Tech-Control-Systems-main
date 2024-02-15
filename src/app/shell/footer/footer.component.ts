import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  isSmallXSmall!: Observable<boolean>

  constructor(private breakpointObserver: BreakpointObserver) { }

  onClick() {
    window.scroll(0, 0)
  }

  ngOnInit(): void {
    this.isSmallXSmall = this.breakpointObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small
    ])
      .pipe(
        map(res => res.matches)
      )
  }
}
