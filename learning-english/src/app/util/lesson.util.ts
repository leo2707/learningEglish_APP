import { Router} from '@angular/router';

export class LessonUtil  {



static redirectLesson(idLesson, lessonType, router:Router) {

    console.log("Entroo "+idLesson+" - "+lessonType);

switch(lessonType) { 
   case 1: {
        //LESSON GRAMMAR
        let link = ['/lesson/grammar'];
        router.navigate(link);
      break; 
   } 
   case 2: {
        //LESSON GRAPHICS IMAGES
        let link = ['/graphics-images'];
        router.navigate(link);
      break; 
   }
   case 3: {
        //LESSON GRAPHICS TEXTS
        let link = ['/graphics-texts'];
        router.navigate(link);
      break; 
   }
   case 4: {
        //LESSON CUSTOM

        //THE COLORS
        if(idLesson == '2_1'){
            let link = ['/colors', idLesson];
            router.navigate(link);
        }

        //VERBS
        if(idLesson === '13_1' || idLesson == '13_2'){
            let link = ['/verbs', idLesson];
            router.navigate(link);
        }
      break; 
   }
   case 5: {
        //LESSON VOCABULARY
        let link = ['/vocabulary'];
        router.navigate(link);
      break; 
   }
   default: {
      break; 
   } 
} 

  }

}