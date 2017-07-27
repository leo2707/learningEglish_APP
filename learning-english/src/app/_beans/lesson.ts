import {LessonType} from '../_beans/lessonType';

export class Lesson {
  id: number;
  name: string;
  description: string;
  icon: string;
  order: number;
  color: string;
  lessonType: LessonType;
  questions: number;
}