import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LessonComponent } from './lesson/lesson.component';
import { LessonImagesComponent } from './lesson/images/lessonImages.component';
import { LessonVerbsComponent } from './lesson/custom/lesson.verbs.component';

const appRoutes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'}, //Redireccionamos a home por defecto
  {path: 'home', component: HomeComponent},
  {path: 'images', component: LessonImagesComponent},
  {path: 'verbs/:id', component: LessonVerbsComponent},
  {
    path: 'lesson/:id', component: LessonComponent,
    children: [
      {path: 'grammar', component: LessonComponent},
      {path: 'images', component: LessonImagesComponent},
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