import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd} from '@angular/router';
import { VocabularyService } from '../../_service/vocabulary.service';

import { Vocabulary } from '../../_beans/vocabulary';
import { GetVocabularyRq } from '../../_beans.model/getVocabularyRq';
import { GetVocabularyRs } from '../../_beans.model/getVocabularyRs';

@Component({
  selector: 'lesson-vocabulary',
  templateUrl: './lessonVocabulary.component.html',
  styleUrls: ['./lessonVocabulary.component.css'],
  providers: [VocabularyService]
})
export class LessonVocabularyComponent implements OnInit {

    @Input() id: string;
    @Output() length = new EventEmitter();
    getVocabularyRq: GetVocabularyRq;
    getVocabularyRs: GetVocabularyRs;
    listVocabulary: Vocabulary[];


    constructor(private route:ActivatedRoute,
    private vocabularyService: VocabularyService) { }
  

  ngOnInit() {
     console.log("ENTROOO VOCABULARY");
    if(!this.listVocabulary){
      this.getVocabulary(this.id);
    } else {
      console.log("ENTROOO NO NULL "+this.listVocabulary.length);
    }
  }

  getVocabulary(id): void {
      this.getVocabularyRq = new GetVocabularyRq();
      this.getVocabularyRq.requestId = "123456789";
      this.getVocabularyRq.requestDate = new Date();
      this.getVocabularyRq.userId = "lsolano";
      this.getVocabularyRq.lessonId = id;

      this.vocabularyService.getVocabulary(this.getVocabularyRq).subscribe(
        response => this.listVocabulary = response.listVocabulary,
        error => console.log(error),
        () => this.length.emit(this.listVocabulary.length)
      );
  }

  play(event) {
    event.target.firstElementChild.play();
  }

}