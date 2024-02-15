import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ActiveHarmonicFiltersComponent } from './pages/services/active-harmonic-filters/active-harmonic-filters.component';
import { BuildingManagementSystemsComponent } from './pages/services/building-management-systems/building-management-systems.component';
import { EmergencyLightingSolutionsComponent } from './pages/services/emergency-lighting-solutions/emergency-lighting-solutions.component';
import { EntranceAutomationSystemsComponent } from './pages/services/entrance-automation-systems/entrance-automation-systems.component';
import { FireAlarmsSystemsComponent } from './pages/services/fire-alarms-systems/fire-alarms-systems.component';
import { FireHydrantSystemsComponent } from './pages/services/fire-hydrant-systems/fire-hydrant-systems.component';
import { GasSuppressionSystemsComponent } from './pages/services/gas-suppression-systems/gas-suppression-systems.component';
import { HomeAutomationSystemsComponent } from './pages/services/home-automation-systems/home-automation-systems.component';
import { IndoorOutdoorLightingControlSystemsComponent } from './pages/services/indoor-outdoor-lighting-control-systems/indoor-outdoor-lighting-control-systems.component';
import { IpCctvSystemsComponent } from './pages/services/ip-cctv-systems/ip-cctv-systems.component';
import { ModularFireExtinguishersComponent } from './pages/services/modular-fire-extinguishers/modular-fire-extinguishers.component';
import { NetworkingSystemsComponent } from './pages/services/networking-systems/networking-systems.component';
import { PublicAddressSystemsComponent } from './pages/services/public-address-systems/public-address-systems.component';
import { CareersComponent } from './pages/careers/careers.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: "full" },
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent },
  { path: 'careers', component: CareersComponent },

  { path: 'services/active-harmonic-filters', component: ActiveHarmonicFiltersComponent },
  { path: 'services/building-management-systems', component: BuildingManagementSystemsComponent },
  { path: 'services/emergency-lighting-solutions', component: EmergencyLightingSolutionsComponent },
  { path: 'services/entrance-automation-systems', component: EntranceAutomationSystemsComponent },
  { path: 'services/fire-alarms-systems', component: FireAlarmsSystemsComponent },
  { path: 'services/fire-hydrant-systems', component: FireHydrantSystemsComponent },
  { path: 'services/gas-suppression-systems', component: GasSuppressionSystemsComponent },
  { path: 'services/home-automation-systems', component: HomeAutomationSystemsComponent },
  { path: 'services/indoor-outdoor-lighting-control-systems', component: IndoorOutdoorLightingControlSystemsComponent },
  { path: 'services/ip-cctv-systems', component: IpCctvSystemsComponent },
  { path: 'services/modular-fire-extinguishers', component: ModularFireExtinguishersComponent },
  { path: 'services/networking-systems', component: NetworkingSystemsComponent },
  { path: 'services/public-address-systems', component: PublicAddressSystemsComponent },

  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
