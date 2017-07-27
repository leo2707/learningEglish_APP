import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd} from '@angular/router';
import { LessonService } from '../../_service/lesson.service';

import { Lesson} from '../../_beans/lesson';
import { GetLessonRq} from '../../_beans.model/getLessonRq';
import { GetLessonRs} from '../../_beans.model/getLessonRs';

@Component({
  selector: 'app-lesson-graphics-images',
  templateUrl: './lesson.graphics.images.component.html',
  styleUrls: ['./lesson.graphics.images.component.css'],
  providers: [LessonService]
})
export class LessonGraphicsImagesComponent implements OnInit {

    getLessonRq: GetLessonRq;
    getLessonRs: GetLessonRs;
    lesson: Lesson;


    constructor(private route:ActivatedRoute,
    private lessonService: LessonService) { }
  

  ngOnInit() {
    
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
