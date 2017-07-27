import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd} from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";

import { Lesson } from '../_beans/lesson';

@Component({
  selector: 'config-exam',
  templateUrl: './config-exam.component.html',
  styleUrls: ['./config-exam.component.css']
})
export class ConfigExamComponent implements OnInit {

    @Input() lesson: Lesson;
    @Output() option = new EventEmitter();
    @Output() configExam = new EventEmitter();
    form:FormGroup;
    radioAnswer = "ENGLISH";


    constructor(
      private router:Router, 
      private route:ActivatedRoute,
      private formBuilder: FormBuilder) { }
  

  ngOnInit() {
    this.createControls();
  }

  createControls(){
    this.form = this.formBuilder.group({
      questionLanguaje: ['SPANISH', Validators.required],
      radioAnswer: [{value: 'ENGLISH', disabled: true}, Validators.required],
      typeQuestion: ['WRITING', Validators.required],
      numberOfQuestion: ['2', Validators.required],
      orderQuestions: ['RANDOM', Validators.required],
      time: [{value: '01:00:00', disabled: true}],
    })
  }

  goToLesson(){
    this.option.emit("class");
  }

  goToExam(){
    this.configExam.emit(this.form.value);
    this.option.emit("exam");
  }

  changeAnswer(form){
    this.radioAnswer = form.radioQuestion == "ENGLISH" ? "SPANISH" : "ENGLISH";
  }

  

}
