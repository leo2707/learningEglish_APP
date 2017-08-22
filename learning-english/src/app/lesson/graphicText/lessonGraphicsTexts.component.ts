import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd} from '@angular/router';
import { VocabularyService } from '../../_service/vocabulary.service';

import { Vocabulary } from '../../_beans/vocabulary';
import { GetVocabularyRq } from '../../_beans.model/getVocabularyRq';
import { GetVocabularyRs } from '../../_beans.model/getVocabularyRs';

@Component({
  selector: 'lesson-graphics-texts',
  templateUrl: './lessonGraphicsTexts.component.html',
  styleUrls: ['./lessonGraphicsTexts.component.css'],
  providers: [VocabularyService]
})
export class LessonGraphicsTextsComponent implements OnInit {

    @Input() id: string;
    @Output() length = new EventEmitter();
    getVocabularyRq: GetVocabularyRq;
    getVocabularyRs: GetVocabularyRs;
    listVocabulary: Vocabulary[];


    constructor(private route:ActivatedRoute,
    private vocabularyService: VocabularyService) { }
  

  ngOnInit() {
    if(!this.listVocabulary){
    // console.log("ENTROOO ");
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
        // () => console.log(JSON.stringify(this.verbs))
        () => this.length.emit(this.listVocabulary.length)
      );
  }

  play(event) {
    event.target.firstElementChild.play();
  }

}
