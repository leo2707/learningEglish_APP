import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd} from '@angular/router';
import { VerbService } from '../../../_service/verb.service';

import { Verb } from '../../../_beans/verb';
import { GetVerbsRq } from '../../../_beans.model/getVerbsRq';
import { GetVerbsRs } from '../../../_beans.model/getVerbsRs';

@Component({
  selector: 'lesson-verbs',
  templateUrl: './lesson.verbs.component.html',
  styleUrls: ['./lesson.verbs.component.css'],
  providers: [VerbService]
})
export class LessonVerbsComponent implements OnInit {

    @Input() id: string;
    @Output() length = new EventEmitter();
    getVerbsRq: GetVerbsRq;
    getVerbsRs: GetVerbsRs;
    verbs: Verb[];


    constructor(private route:ActivatedRoute,
    private verbService: VerbService) { }
  

  ngOnInit() {
     console.log("ENTROOO VERBS");
    if(!this.verbs){
      this.getVerbs(this.id);
    } else {
      console.log("ENTROOO NO NULL "+this.verbs.length);
    }
  }

  getVerbs(id): void {
      this.getVerbsRq = new GetVerbsRq();
      this.getVerbsRq.requestId = "123456789";
      this.getVerbsRq.requestDate = new Date();
      this.getVerbsRq.userId = "lsolano";
      this.getVerbsRq.lessonId = id;

      this.verbService.getVerbs(this.getVerbsRq).subscribe(
        response => this.verbs = response.verbs,
        error => console.log(error),
        // () => console.log(JSON.stringify(this.verbs))
        () => this.length.emit(this.verbs.length)
      );
  }

}
