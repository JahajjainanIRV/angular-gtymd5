import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ServiceComponent } from './servicecomponent/service.component';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { formsComponent } from './formcomponent/form.component';
const approuters:Routes=[
  {path:'formcomp', component:formsComponent},
  {path:'servicecomp',component:ServiceComponent}
]
@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(approuters)],
  declarations: [
    AppComponent,
    HelloComponent,
    ServiceComponent,
    formsComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
