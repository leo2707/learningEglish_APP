export class Util  {

 static getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  static generateRequestId(){
    return new Date().getTime() + this.getRandomInt(1,100);
  }
}