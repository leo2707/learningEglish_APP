import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { ThemeService } from '../_service/theme.service';

import { Theme} from '../_beans/theme';
import { GetAllThemesRq} from '../_beans.model/getAllThemesRq';
import { GetAllThemesRs} from '../_beans.model/getAllThemesRs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ThemeService]
})
export class HomeComponent implements OnInit {

    getAllThemesRq: GetAllThemesRq;
    getAllThemesRs: GetAllThemesRs;
    themes: Theme[];
    //themes = THEMES;

    constructor(private themeService: ThemeService) { }
  

  ngOnInit() {
    if(this.themes == null){
     this.getAllThemes();
    console.log("THEMES -> "+JSON.stringify(this.themes));
    }
    //console.log("THEMES -> "+this.themes);
  }

  getAllThemes(): void {
      this.getAllThemesRq = new GetAllThemesRq();
      this.getAllThemesRq.requestId = "123456789";
      this.getAllThemesRq.requestDate = new Date();
      this.getAllThemesRq.userId = "lsolano";

      this.themeService.getAllThemes(this.getAllThemesRq).subscribe(
        response => this.themes = response.themes,
        error => console.log(error),
        () => console.log(JSON.stringify(this.themes))
      );
  }

}
