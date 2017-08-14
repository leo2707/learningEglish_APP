import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { ThemeService } from '../_service/theme.service';

import { Theme} from '../_beans/theme';
import { GetAllThemesRq} from '../_beans.model/getAllThemesRq';
import { GetAllThemesRs} from '../_beans.model/getAllThemesRs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component2.html',
  styleUrls: ['./home.component.css'],
  providers: [ThemeService]
})
export class HomeComponent implements OnInit {

    getAllThemesRq: GetAllThemesRq;
    getAllThemesRs: GetAllThemesRs;
    themes: Theme[];
    //themes = THEMES;

    prueba = [
      {answer : 'a', question : "There is __ green English book on the desk."},
{answer : 'an', question : "She's reading __ old comic."},
{answer : 'an', question : "They've got __ idea."},
{answer : 'a', question : "He is drinking __ cup of coffee."},
{answer : 'a', question : "The girl is __ pilot."},
{answer : 'an', question : "Leipzig has __ airport."},
{answer : 'an', question : "This is __ expensive bike."},
{answer : 'a', question : "Look! There's __ bird flying."},
{answer : 'an', question : "My father is __ honest person."},
{answer : 'an', question : "My friend likes to be __ astronaut."},
{answer : 'a', question : "Spain is __ country."},
{answer : 'an', question : "That's __ easy question."},
{answer : 'an', question : "Tenerife is __ island."},
{answer : 'an', question : "Penélope Cruz is __ actress."},
{answer : 'a', question : "There is __ hospital in this town."},
{answer : 'a', question : "They are going to build __ university near my house."},
{answer : 'an', question : "She arrived __ hour later."},
{answer : 'an', question : "The girl is wearing __ orange dress."},
{answer : 'a', question : "Yesterday was __ beautiful day."},
{answer : 'an', question : "My father bought __ expensive car yesterday."},
{answer : 'a', question : "The Mississippi is __ long river."},
{answer : 'an', question : "Mr. Thomas is __ old man."},
{answer : 'an', question : "Lucy is __ intelligent woman."},
{answer : 'a', question : "I don't want __ hamburger for dinner."},
{answer : 'a', question : "__ famous actress."},
{answer : 'an', question : "__ awful song."},
{answer : 'an', question : "__ interesting book."},
{answer : 'an', question : "__ English suit."},
{answer : 'a', question : "__ long river."},
{answer : 'a', question : "__ useful tool."},
{answer : 'an', question : "__ ugly man."},
{answer : 'an', question : "__ easy language."},
{answer : 'a', question : "__ used shirt."},
{answer : 'an', question : "__ old car."},
{answer : 'a', question : "__ utility room."},
{answer : 'an', question : "__ expensive ring."},
{answer : 'an', question : "__ excellent boy."},
{answer : 'an', question : "__ honest man. "}

    ];

    constructor(private themeService: ThemeService) { }
  

  ngOnInit() {
    for (let elem of this.prueba) {
    // console.log(elem.answer + " - " + elem.question);
    console.log(elem.question.replace("__",elem.answer));
    }


    if(this.themes == null){
     this.getAllThemes();
    // console.log("THEMES -> "+JSON.stringify(this.themes));
    }
  }

  getAllThemes(): void {
      this.getAllThemesRq = new GetAllThemesRq();
      this.getAllThemesRq.requestId = "123456789";
      this.getAllThemesRq.requestDate = new Date();
      this.getAllThemesRq.userId = "lsolano";

      this.themeService.getAllThemes(this.getAllThemesRq).subscribe(
        response => this.themes = response.themes,
        error => console.log(error),
        () => {
          // console.log(JSON.stringify(this.themes))
        }
      );
  }

}
