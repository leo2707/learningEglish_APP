import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd} from '@angular/router';
import { LessonService } from '../../_service/lesson.service';

import { Lesson} from '../../_beans/lesson';
import { GetLessonRq} from '../../_beans.model/getLessonRq';
import { GetLessonRs} from '../../_beans.model/getLessonRs';

@Component({
  selector: 'lesson-grammar',
  templateUrl: './lesson.grammar.component.html',
  styleUrls: ['./lesson.grammar.component.css'],
  providers: [LessonService]
})
export class LessonGrammarComponent implements OnInit {

    getLessonRq: GetLessonRq;
    getLessonRs: GetLessonRs;
    lesson: Lesson;


    constructor(private route:ActivatedRoute,
    private lessonService: LessonService) { }
  

  ngOnInit() {
    console.log("ENtrooo");
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
        () => console.log(JSON.stringify(this.lesson))
      );
  }

}
