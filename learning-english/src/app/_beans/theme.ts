import { Lesson} from './lesson';

export class Theme {
  id: number;
  name: string;
  description: string;
  keywords: string;
  icon: string;
  order: number;
  color: string;
  lessons: Lesson[];
}