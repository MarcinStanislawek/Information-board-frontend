import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { InformationsComponent } from './informations/informations.component';
import { AdminComponent } from './admin/admin.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



const appRoutes: Routes = [
  {
    path: 'informations',
    component: InformationsComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: '',
    component: InformationsComponent,
    pathMatch: 'full'
  }
]

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    InformationsComponent,
    AdminComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
