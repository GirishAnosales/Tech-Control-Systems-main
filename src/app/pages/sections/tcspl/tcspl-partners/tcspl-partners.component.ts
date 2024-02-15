import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Carousel } from 'src/app/interfaces/user';

@Component({
	selector: 'app-tcspl-partners',
	templateUrl: './tcspl-partners.component.html',
	styleUrls: ['./tcspl-partners.component.scss']
})
export class TcsplPartnersComponent {

	carouselImages: Carousel[] = [
		{ index: 1, url: "../../../../../assets/images/adobe/51.png" }
	]

	customOptions: OwlOptions = {
		loop: true,
		mouseDrag: true,
		touchDrag: true,
		pullDrag: false,
		dots: false,
		navSpeed: 700,
		navText: ['', ''],
		responsive: {
			0: {
				items: 1
			},
			400: {
				items: 2
			},
			740: {
				items: 3
			},
			940: {
				items: 4
			}
		},
		nav: true,
		autoplay: true,
		autoplaySpeed: 2000
	}
}
