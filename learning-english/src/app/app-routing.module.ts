import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LessonComponent } from './lesson/lesson.component';
import { LessonGraphicsImagesComponent } from './lesson/graphics-images/lesson.graphics.images.component';
import { LessonVerbsComponent } from './lesson/custom/lesson.verbs.component';

const appRoutes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'}, //Redireccionamos a home por defecto
  {path: 'home', component: HomeComponent},
  {path: 'graphics-images', component: LessonGraphicsImagesComponent},
  {path: 'verbs/:id', component: LessonVerbsComponent},
  {
    path: 'lesson/:id', component: LessonComponent,
    children: [
      {path: 'grammar', component: LessonComponent},
      {path: 'graphics-images', component: LessonGraphicsImagesComponent},
      {path: 'verbs', component: LessonVerbsComponent},
      {path: 'update/:id', component: LessonComponent},
      {path: 'detail/:id', component: LessonComponent}
    ]
  },
  {path: '**', component: HomeComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

  constructor() {
    console.log("ROUTER AppRoutingModule");
  }

}