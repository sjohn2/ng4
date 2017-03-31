import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes} from '@angular/router';



import { AppComponent } from './app.component';
import { ContentProjectionComponent } from './content-projection/content-projection.component';

import {UtilsModule} from './utils/utils.module'


const appRoutes: Routes = [   
    { path: 'content-projection', component: ContentProjectionComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    ContentProjectionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(
      appRoutes,{useHash:true}
    )   
  ],
  exports: [RouterModule, UtilsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
