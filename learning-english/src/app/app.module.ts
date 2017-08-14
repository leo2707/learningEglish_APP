import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';

import { LessonComponent } from './lesson/lesson.component';
import { LessonGrammarComponent } from './lesson/grammar/lesson.grammar.component';
import { LessonGraphicsTextsComponent } from './lesson/graphicText/lessonGraphicsTexts.component';
import { LessonGraphicsImagesComponent } from './lesson/graphicsImages/lessonGraphicsImages.component';
import { LessonColorsComponent } from './lesson/custom/colors/lessonColors.component';
import { LessonArticlesComponent } from './lesson/custom/articles/lessonArticles.component';
import { LessonVerbsComponent } from './lesson/custom/verbs/lesson.verbs.component';
import { LessonVocabularyComponent } from './lesson/vocabulary/lessonVocabulary.component';

import { ConfigExamComponent } from './exam/config-exam.component';
import { ExamComponent } from './exam/exam.component';
import { ScoreComponent } from './score/score.component';

import { ThemeService } from './_service/theme.service';

import { CapitalizePipe } from './util/_pipes/capitalize.pipe';
import { KeysPipe } from './util/_pipes/KeysPipe.pipe';


@NgModule({
  declarations: [
    AppComponent,
    CapitalizePipe,
    KeysPipe,
    HomeComponent,
    LessonComponent,
    LessonGrammarComponent,
    LessonGraphicsTextsComponent,
    LessonGraphicsImagesComponent,
    LessonColorsComponent,
    LessonArticlesComponent,
    LessonVerbsComponent,
    LessonVocabularyComponent,
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
