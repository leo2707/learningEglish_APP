import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';

import { LessonComponent } from './lesson/lesson.component';
import { LessonGrammarComponent } from './lesson/grammar/lesson.grammar.component';
import { LessonImagesComponent } from './lesson/images/lessonImages.component';
import { LessonVerbsComponent } from './lesson/custom/lesson.verbs.component';

import { ConfigExamComponent } from './exam/config-exam.component';
import { ExamComponent } from './exam/exam.component';
import { ScoreComponent } from './score/score.component';

import { ThemeService } from './_service/theme.service';

import { CapitalizePipe } from './util/_pipes/capitalize.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CapitalizePipe,
    HomeComponent,
    LessonComponent,
    LessonGrammarComponent,
    LessonImagesComponent,
    LessonVerbsComponent,
    ConfigExamComponent,
    ExamComponent,
    ScoreComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ThemeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
