import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './shell/header/header.component';
import { FooterComponent } from './shell/footer/footer.component';
import { MaterialModule } from './modules/materials/materials/materials.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { ActiveHarmonicFiltersComponent } from './pages/services/active-harmonic-filters/active-harmonic-filters.component';
import { FireAlarmsSystemsComponent } from './pages/services/fire-alarms-systems/fire-alarms-systems.component';
import { PublicAddressSystemsComponent } from './pages/services/public-address-systems/public-address-systems.component';
import { BuildingManagementSystemsComponent } from './pages/services/building-management-systems/building-management-systems.component';
import { IpCctvSystemsComponent } from './pages/services/ip-cctv-systems/ip-cctv-systems.component';
import { EntranceAutomationSystemsComponent } from './pages/services/entrance-automation-systems/entrance-automation-systems.component';
import { NetworkingSystemsComponent } from './pages/services/networking-systems/networking-systems.component';
import { HomeAutomationSystemsComponent } from './pages/services/home-automation-systems/home-automation-systems.component';
import { GasSuppressionSystemsComponent } from './pages/services/gas-suppression-systems/gas-suppression-systems.component';
import { IndoorOutdoorLightingControlSystemsComponent } from './pages/services/indoor-outdoor-lighting-control-systems/indoor-outdoor-lighting-control-systems.component';
import { ModularFireExtinguishersComponent } from './pages/services/modular-fire-extinguishers/modular-fire-extinguishers.component';
import { FireHydrantSystemsComponent } from './pages/services/fire-hydrant-systems/fire-hydrant-systems.component';
import { EmergencyLightingSolutionsComponent } from './pages/services/emergency-lighting-solutions/emergency-lighting-solutions.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { CallToActionComponent } from './pages/sections/call-to-action/call-to-action.component';
import { CareersComponent } from './pages/careers/careers.component';
import { StatsCounterComponent } from './pages/sections/stats-counter/stats-counter.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { TcsplPartnersComponent } from './pages/sections/tcspl/tcspl-partners/tcspl-partners.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ServicesComponent } from './pages/sections/services/services.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    AboutComponent,
    ActiveHarmonicFiltersComponent,
    FireAlarmsSystemsComponent,
    PublicAddressSystemsComponent,
    BuildingManagementSystemsComponent,
    IpCctvSystemsComponent,
    EntranceAutomationSystemsComponent,
    NetworkingSystemsComponent,
    HomeAutomationSystemsComponent,
    GasSuppressionSystemsComponent,
    IndoorOutdoorLightingControlSystemsComponent,
    ModularFireExtinguishersComponent,
    FireHydrantSystemsComponent,
    EmergencyLightingSolutionsComponent,
    PageNotFoundComponent,
    CallToActionComponent,
    CareersComponent,
    StatsCounterComponent,
    SidenavComponent,
    TcsplPartnersComponent,
    ServicesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
