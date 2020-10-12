import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HeaderComponent} from './main/header/header.component';
import {FooterComponent} from './main/footer/footer.component';
import {ContentComponent} from './main/content/content.component';
import {LogoutComponent} from './main/logout/logout.component';

const routes: Routes = [
  {path: '', component: ContentComponent},
  {path: 'home', component: ContentComponent},
  {path: 'logout', component: LogoutComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
