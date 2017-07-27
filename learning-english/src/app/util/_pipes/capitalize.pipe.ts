import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'capitalize' })
export class CapitalizePipe implements PipeTransform {

  transform(value: any) {
	  if (value) {
          let resp = "";
          let  wordS = value.split(" ");
          for (let word of wordS) {
            resp += word.charAt(0).toUpperCase() + word.slice(1) + " ";
          }
      	return resp;
	  }
	  return value;
  }

}