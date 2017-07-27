import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd} from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";

import { Question } from '../_beans/question';
import { QuestionMultichoice } from '../_beans/questionMultichoice';
import { ConfigExam} from '../_beans/configExam';

import { ExamToScoreEvent} from '../_events/exam_to_score.event';

import { GetWritingExamRq } from '../_beans.model/getWritingExamRq';
import { GetWritingExamRs } from '../_beans.model/getWritingExamRs';
import { GetMultichoiceExamRq } from '../_beans.model/getMultichoiceExamRq';
import { GetMultichoiceExamRs } from '../_beans.model/getMultichoiceExamRs';

import { ExamService } from '../_service/exam.service';

@Component({
  selector: 'exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css'],
  providers: [ExamService]
})
export class ExamComponent implements OnInit {

    @Input() id: string;
    @Input() configExam: ConfigExam;
    @Input() vocabularyType: string;
    @Output() optionEvent = new EventEmitter();
    @Output() examToScoreEvent = new EventEmitter();

    form: FormGroup;
    getWritingExamRq: GetWritingExamRq;
    getMultichoiceExamRq: GetMultichoiceExamRq;

    questions: Question[];
    questionMultichoices: QuestionMultichoice[];

    question: Question;    
    position: number = 1;
    countAnswer: number;
    correctAnswers: number = 0;
    mistakes: number = 0;

    constructor(
      private router:Router, 
      private route:ActivatedRoute,
      private formBuilder: FormBuilder,
      private examService: ExamService) { }
  

  ngOnInit() {
    this.createControls();
    this.getWritingExam();
  }

  createControls(){
    this.form = this.formBuilder.group({
      answer: ['leoo', Validators.required]
    })
  }

  getWritingExam(): void {
      this.getWritingExamRq = new GetWritingExamRq();
      this.getWritingExamRq.requestId = "123456789";
      this.getWritingExamRq.requestDate = new Date();
      this.getWritingExamRq.userId = "lsolano";
      this.getWritingExamRq.lessonId = this.id;
      this.getWritingExamRq.configExam = this.configExam;
      this.getWritingExamRq.vocabularyType = this.vocabularyType;

      this.examService.getWritingExam(this.getWritingExamRq).subscribe(
        response => this.questions = response.questions,
        error => console.log(error),
        // () => console.log("res: "+JSON.stringify(this.questions))
        () => {
          this.countAnswer = this.questions.length;
          this.createQuestion();
        }
      );
  }

  createQuestion(){
    this.question = this.questions[this.position - 1];
    console.log("LEO "+this.countAnswer + " -> "+JSON.stringify(this.question));
  }

  validateQuestion(){
    console.log("TEXTO: "+this.form.value.answer + " ("+this.question.answer.toUpperCase()+" - "+this.form.value.answer.toUpperCase()+")");

    //Add user answer to question object
    this.question.answerUser = this.form.value.answer.trim();

    //Validate the question
    if(this.question.answer.toUpperCase() === this.form.value.answer.trim().toUpperCase()){
      this.correctAnswers += 1;
      this.question.check = "CORRECT";
    } else {
      this.mistakes += 1;
      this.question.check = "ERROR";
    }

    //Add question to array
    this.questions[this.position - 1] = this.question;

    if(this.position < this.countAnswer){
      this.position += 1;
      this.question = this.questions[this.position - 1];
    } else {
      console.log("SE ACABOOO: "+JSON.stringify(this.questions));
      this.showScore();
    }
  }

  showScore(){
    this.optionEvent.emit("score");
    let examToScore: ExamToScoreEvent = new ExamToScoreEvent();
    examToScore.correctAnswers = this.correctAnswers;
    examToScore.countAnswer = this.countAnswer;
    examToScore.mistakes = this.mistakes;
    examToScore.questions = this.questions;

    this.examToScoreEvent.emit(examToScore);
  }

//   goToLesson(){
//     this.option.emit("class");
//   }

//   goToExam(){
//     this.configExam.emit(this.form.value);
//   }

//   changeAnswer(form){
//     this.radioAnswer = form.radioQuestion == "ENGLISH" ? "SPANISH" : "ENGLISH";
//   }

  

}
