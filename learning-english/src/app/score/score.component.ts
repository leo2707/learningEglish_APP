import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

import { Question } from '../_beans/question';

import { ExamToScoreEvent} from '../_events/exam_to_score.event';

@Component({
  selector: 'score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {

    @Input() examToScoreEvent: ExamToScoreEvent;
    @Output() optionEvent = new EventEmitter();
     showReport: boolean = false;


    constructor() { }
  

    ngOnInit() {
        console.log("QUESTIONS: "+JSON.stringify(this.examToScoreEvent));
    }

  changeOption(option){
    this.optionEvent.emit(option);
  }

  

}
