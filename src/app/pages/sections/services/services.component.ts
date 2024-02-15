import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { ServiceSection } from 'src/app/interfaces/user';

@Component({
	selector: 'app-services',
	templateUrl: './services.component.html',
	styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
	services: ServiceSection[] = [
		{
			title: 'Active Harmonic Filters',
			image: '../../../../assets/images/adobe/51.png',
			description: 'Service 1',
			routerLink: '/services/active-harmonic-filters'
		},
		{
			title: 'Building Management Systems',
			image: '../../../../assets/images/adobe/52.png',
			description: 'Service 2',
			routerLink: '/services/building-management-systems'
		},
		{
			title: 'Emergency Lighting Solutions',
			image: '../../../../assets/images/adobe/53.png',
			description: 'Service 3',
			routerLink: '/services/emergency-lighting-solutions'
		},
		{
			title: 'Entrance Automation Systems',
			image: '../../../../assets/images/adobe/54.png',
			description: 'Service 4',
			routerLink: '/services/entrance-automation-systems'
		},
		{
			title: 'Fire Alarms Systems',
			image: '../../../../assets/images/adobe/55.png',
			description: 'Service 5',
			routerLink: '/services/fire-alarms-systems'
		},
		{
			title: 'Fire Hydrant Systems',
			image: '../../../../assets/images/adobe/56.png',
			description: 'Service 6',
			routerLink: '/services/fire-hydrant-systems'
		},
		{
			title: 'Gas Suppression Systems',
			image: '../../../../assets/images/adobe/57.png',
			description: 'Service 7',
			routerLink: '/services/gas-suppression-systems'
		},
		{
			title: 'Home Automation Systems',
			image: '../../../../assets/images/adobe/58.png',
			description: 'Service 8',
			routerLink: '/services/home-automation-systems'
		},
		{
			title: 'Lighting Control Systems',
			image: '../../../../assets/images/adobe/59.png',
			description: 'Service 9',
			routerLink: '/services/indoor-outdoor-lighting-control-systems'
		},
		{
			title: 'IP CCTV Systems',
			image: '../../../../assets/images/adobe/60.png',
			description: 'Service 10',
			routerLink: '/services/ip-cctv-systems'
		},
		{
			title: 'Modular Fire Extinguishers',
			image: '../../../../assets/images/adobe/61.png',
			description: 'Service 11',
			routerLink: '/services/modular-fire-extinguishers'
		},
		{
			title: 'Networking Systems',
			image: '../../../../assets/images/adobe/62.png',
			description: 'Service 12',
			routerLink: '/services/networking-systems'
		},
		{
			title: 'Public Address Systems',
			image: '../../../../assets/images/adobe/63.png',
			description: 'Service 13',
			routerLink: '/services/public-address-systems'
		}
	];

	cols = 4;

	constructor(private breakpointObserver: BreakpointObserver) { }

	ngOnInit() {
		this.breakpointObserver.observe([
			Breakpoints.XSmall,
			Breakpoints.Small,
			Breakpoints.Medium,
			Breakpoints.Large,
			Breakpoints.XLarge
		]).subscribe(result => {
			if (result.matches) {
				if (result.breakpoints[Breakpoints.XSmall]) {
					this.cols = 1;
				} else if (result.breakpoints[Breakpoints.Small]) {
					this.cols = 2;
				} else if (result.breakpoints[Breakpoints.Medium, Breakpoints.Large, Breakpoints.XLarge]) {
					this.cols = 4;
				}
			}
		});
	}

	scrollToTop() {
		window.scrollTo(0, 0);
	}
}
