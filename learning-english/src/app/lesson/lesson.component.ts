import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd} from '@angular/router';

import { Lesson} from '../_beans/lesson';
import { ConfigExam} from '../_beans/configExam';
import { Question } from '../_beans/question';

import { ExamToScoreEvent} from '../_events/exam_to_score.event';

import { GetLessonRq} from '../_beans.model/getLessonRq';
import { GetLessonRs} from '../_beans.model/getLessonRs';

import { LessonUtil } from '../util/lesson.util';
import { CapitalizePipe } from '../util/_pipes/capitalize.pipe';

import { LessonService } from '../_service/lesson.service';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.css'],
  providers: [LessonService]
})
export class LessonComponent implements OnInit {

    getLessonRq: GetLessonRq;
    getLessonRs: GetLessonRs;
    lesson: Lesson;
    option: string;
    length: number;
    configExam: ConfigExam;
    vocabularyType: string;
    examToScoreEvent: ExamToScoreEvent;

    constructor(private route:ActivatedRoute,
    private router:Router,
    private lessonService: LessonService) { }
  

  ngOnInit() {    
      let id = this.route.snapshot.params['id'];
      console.log("id: "+id);
      this.getLesson(id);
      this.changeOption('class');
      // this.changeOption('config');
  }

  getLesson(id): void {
      this.getLessonRq = new GetLessonRq();
      this.getLessonRq.requestId = "123456789";
      this.getLessonRq.requestDate = new Date();
      this.getLessonRq.userId = "lsolano";
      this.getLessonRq.lessonId = id;

      this.lessonService.getLesson(this.getLessonRq).subscribe(
        response => this.lesson = response.lesson,
        error => console.log(error),
        // () => console.log("res: "+JSON.stringify(this.lesson))
        () => this.getVocabularyType(id)
      );
  }

  changeOption(option){
    this.option = option;
  }

  getLength(val){
    this.length = val;
    this.lesson.questions = val;
  }

  getOption(val){
    this.option = val;
  }

  getConfigExam(val){
    console.log("Exam: "+JSON.stringify(val));
    this.configExam = val;
  }

  getExamToScoreEvent(val){
    this.examToScoreEvent = val;
  }

  getVocabularyType(id){
    if(id == "13_1" || id == "13_2"){
      this.vocabularyType = "VERB";
    } else {
      this.vocabularyType = "VOCABULARY";
    }
  }

  keyPress(event: KeyboardEvent){
    console.log("KEY:" +JSON.stringify(event));
    console.log("KEY:" +event.key);
  }

}
