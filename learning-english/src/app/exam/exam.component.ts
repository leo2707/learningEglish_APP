import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd} from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";

import { Question } from '../_beans/question';
import { QuestionMultichoice } from '../_beans/questionMultichoice';
import { Option } from '../_beans/option';
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

    questions: Question[] = [];
    questionMultichoices: QuestionMultichoice[];
    keys: String[];

    question: Question;
    questionMultichoice: QuestionMultichoice;
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

    console.log("CONFIG: "+JSON.stringify(this.configExam));

    this.createControls();

    if(this.configExam.typeAnswer == "WRITING"){
      this.getWritingExam();
    } else if(this.configExam.typeAnswer == "MULTICHOICE"){
      this.getMultichoiceExam();
    }
  }

  createControls(){
    this.form = this.formBuilder.group({
      answer: ['', Validators.required]
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
        () => {
          this.countAnswer = this.questions.length;
          this.createWriteQuestion();
        }
      );
  }

  getMultichoiceExam(): void {
      this.getMultichoiceExamRq = new GetMultichoiceExamRq();
      this.getMultichoiceExamRq.requestId = "123456789";
      this.getMultichoiceExamRq.requestDate = new Date();
      this.getMultichoiceExamRq.userId = "lsolano";
      this.getMultichoiceExamRq.lessonId = this.id;
      this.getMultichoiceExamRq.configExam = this.configExam;
      this.getMultichoiceExamRq.vocabularyType = this.vocabularyType;

      this.examService.getMultichoiceExam(this.getMultichoiceExamRq).subscribe(
        response => this.questionMultichoices = response.questions,
        error => console.log(error),
        () => {
          console.log("resp: "+JSON.stringify(this.questionMultichoices));
          this.countAnswer = this.questionMultichoices.length;
          this.keys = Object.keys(this.questionMultichoices);
          this.createMultichoiceQuestion();
        }
      );
  }

  createWriteQuestion(){
    this.question = this.questions[this.position - 1];
  }

  createMultichoiceQuestion(){
    this.questionMultichoice = this.questionMultichoices[this.position - 1];
  }

  validateQuestion(){
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
      this.showScore();
    }

    //Reset Controls
    this.createControls();
    this.form.controls.answer.setValue("hh", {focus});
    // this.form.controls.answer.focus();
  }

  validateMultichoiceQuestion(){
    //Validate the question
    if(this.questionMultichoice.question.answer.toUpperCase() === this.form.value.answer.trim().toUpperCase()){
      this.correctAnswers += 1;
      this.questionMultichoice.question.check = "CORRECT";
    } else {
      this.mistakes += 1;
      this.questionMultichoice.question.check = "ERROR";
    }

    //Add user answer to question object
    this.questionMultichoice.question.answerUser = "("+this.form.value.answer.trim()+") "+this.getAnswerByLetter(this.questionMultichoice.options, this.form.value.answer);
    this.questionMultichoice.question.answer = "("+this.questionMultichoice.question.answer+") "+this.getAnswerByLetter(this.questionMultichoice.options, this.questionMultichoice.question.answer);
    
    //Add question to array
    this.questions.push(this.questionMultichoice.question);

    if(this.position < this.countAnswer){
      this.position += 1;
      this.questionMultichoice = this.questionMultichoices[this.position - 1];
    } else {
      this.showScore();
    }

    //Reset Controls
    this.createControls();
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
  
  getAnswerByLetter(options: Option[], letter: string): string {
    let resp = options.filter(item => item.id == letter);
    return resp[0].value;
  }

  validate(key){
    if(this.form.value.answer && key.which == 13) {
        this.validateQuestion();
    }
  }

  play(event) {
    event.target.firstElementChild.play();
  }

}
