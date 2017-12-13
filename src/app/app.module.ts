import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";

import {AppComponent} from './app.component';
import {HeaderComponent} from "./components/header/header.component";
import {SidebarComponent} from "./components/sidebar/sidebar.component";
import {MainComponent} from "./components/main/main.component";
import {BandlistComponent} from "./components/bandList/bandlist.component";
import {BandlistItemComponent} from "./components/bandList/bandListItem/bandListItem.component";
import {SearchInputComponent} from "./components/searchInput/searchInput.component";
import {TaxPipe} from "./pipes/tax.pipe";
import {UiService} from "./services/ui.service";
import {DataService} from "./services/data.services";
import {HttpClientModule} from "@angular/common/http";
import {ConsoleDirective} from "./directives/console.directive";
import {RouterModule, Routes} from "@angular/router";
import {ProfileComponent} from "./components/profile/profile.component";

const appRoutes: Routes = [
  { path: 'user-profile/:name/:id', component: ProfileComponent },
  { path: 'user-profile', component: ProfileComponent },
  { path: 'main', component: MainComponent },
  { path: '', component: MainComponent },
  { path: '**', component: MainComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    MainComponent,
    ProfileComponent,
    BandlistComponent,
    BandlistItemComponent,
    SearchInputComponent,

    /* */
    TaxPipe,

    /* directives */
    ConsoleDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [UiService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
