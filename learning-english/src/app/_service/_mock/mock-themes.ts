import { Theme } from '../../_beans/theme';

// export const THEMES: Theme[] = [
//     {
//        "id": 1,
//        "name": "THE ALPHABET",
//        "description": "",
//        "keywords": "ALPHABET",
//        "icon": "icon-alphabet2",
//        "order": 1,       
//        "color": "gray"
//      },
//      {
//        "id": 2,
//        "name": "THE COLORS",
//        "description": "",
//        "keywords": "COLOR|COLORS",
//        "icon": "icon-colors",
//        "order": 2,       
//        "color": "orange"
//      },
//      {
//        "id": 3,
//        "name": "THE NUMBERS",
//        "description": "",
//        "keywords": "NUMBER|NUMBERS",
//        "icon": "icon-numbers2",
//        "order": 3,       
//        "color": "orange"
//      },
//      {
//        "id": 4,
//        "name": "MATHEMATICAL SYMBOLS",
//        "description": "",
//        "keywords": "MATHEMATICAL|SYMBOL|SYMBOLS",
//        "icon": "icon-mathematical-symbol",
//        "order": 4,       
//        "color": "pink"
//      },
//      {
//        "id": 5,
//        "name": "GREETINGS",
//        "description": "",
//        "keywords": "GREETING|GREETINGS",
//        "icon": "icon-greetings",
//        "order": 5,       
//        "color": "brown"
//      },
//      {
//        "id": 6,
//        "name": "THE DAYS OF THE WEEK",
//        "description": "",
//        "keywords": "DAY|DAYS|WEEK",
//        "icon": "icon-days-of-the-Week",
//        "order": 6,       
//        "color": "orange"
//      },
//      {
//        "id": 7,
//        "name": "THE MONTHS OF THE YEAR",
//        "description": "",
//        "keywords": "MONTH|MONTHS|YEAR|CALENDAR",
//        "icon": "icon-months-of-the-year",
//        "order": 7,       
//        "color": "pink"
//      },
//      {
//        "id": 8,
//        "name": "THE ADJECTIVES",
//        "description": "",
//        "keywords": "ADJECTIVE|ADJECTIVES",
//        "icon": "icon-happy",
//        "order": 8,       
//        "color": "green"
//      },
//      {
//        "id": 9,
//        "name": "THE ARTICLES",
//        "description": "",
//        "keywords": "ARTICLE|ARTICLES",
//        "icon": "icon-articles",
//        "order": 9,       
//        "color": "red"
//      },
//      {
//        "id": 10,
//        "name": "THE NOUNS",
//        "description": "",
//        "keywords": "NOUN|NOUNS|PLURAL|PLURALS",
//        "icon": "icon-plural",
//        "order": 10,       
//        "color": "yellow"
//      },
//      {
//        "id": 11,
//        "name": "PRESENT SIMPLE TENSE",
//        "description": "",
//        "keywords": "PRESENT|SIMPLE|TENSE",
//        "icon": "icon-education",
//        "order": 11,       
//        "color": "blue"
//      },
//      {
//        "id": 12,
//        "name": "THE TIME",
//        "description": "",
//        "keywords": "TIME",
//        "icon": "icon-clock",
//        "order": 12,       
//        "color": "gray"
//      },
//      {
//        "id": 13,
//        "name": "THE VERBS",
//        "description": "",
//        "keywords": "VERB|VERBS",
//        "icon": "icon-list",
//        "order": 13,       
//        "color": "orange"
//      },
//      {
//        "id": 14,
//        "name": "THE WEATHER",
//        "description": "",
//        "keywords": "WEATHER",
//        "icon": "icon-weather",
//        "order": 14,       
//        "color": "blue"
//      },
//      {
//        "id": 15,
//        "name": "THE FAMILY",
//        "description": "",
//        "keywords": "FAMILY",
//        "icon": "icon-the-family",
//        "order": 15,       
//        "color": "yellow"
//      },
//      {
//        "id": 16,
//        "name": "THE PROFESSIONS",
//        "description": "",
//        "keywords": "PROFESSION|PROFESSIONS",
//        "icon": "icon-professions",
//        "order": 16,       
//        "color": "blue"
//      },
//      {
//        "id": 17,
//        "name": "THE SCHOOL",
//        "description": "",
//        "keywords": "SCHOOL",
//        "icon": "icon-school",
//        "order": 17,       
//        "color": "red"
//      },
//      {
//        "id": 18,
//        "name": "WRITING",
//        "description": "",
//        "keywords": "WRITING",
//        "icon": "icon-writing",
//        "order": 18,       
//        "color": "blue"
//      },
//      {
//        "id": 19,
//        "name": "PREPOSITIONS OF PLACE",
//        "description": "",
//        "keywords": "PREPOSITION|PREPOSITIONS|PLACE",
//        "icon": "icon-prepositions-of-Place",
//        "order": 19,       
//        "color": "green"
//      },
//      {
//        "id": 20,
//        "name": "PARTS OF THE BODY",
//        "description": "",
//        "keywords": "PARTS|BODY",
//        "icon": "icon-head",
//        "order": 20,       
//        "color": "gray"
//      },
//      {
//        "id": 21,
//        "name": "THE ANIMAL KINGDOM",
//        "description": "",
//        "keywords": "ANIMAL|ANIMALS|KINGDOM",
//        "icon": "icon-footprint",
//        "order": 21,       
//        "color": "red"
//      },
//      {
//        "id": 22,
//        "name": "PLACES AND BUILDINGS",
//        "description": "",
//        "keywords": "PLACE|PLACES|BUILDING|BUILDINGS",
//        "icon": "icon-airport",
//        "order": 22,       
//        "color": "purple"
//      },
//      {
//        "id": 23,
//        "name": "GEOGRAPHIC FEATURES",
//        "description": "",
//        "keywords": "GEOGRAPHIC|FEATURES",
//        "icon": "icon-island",
//        "order": 23,       
//        "color": "green"
//      },
//      {
//        "id": 24,
//        "name": "THE ILLNESSES",
//        "description": "",
//        "keywords": "ILLNESS|ILLNESSES",
//        "icon": "icon-ill",
//        "order": 24,       
//        "color": "blue"
//      },
//      {
//        "id": 25,
//        "name": "THE SEASONS",
//        "description": "",
//        "keywords": "SEASON|SEASONS",
//        "icon": "icon-seasons",
//        "order": 25,       
//        "color": "yellow"
//      },
//      {
//        "id": 26,
//        "name": "CARDINAL POINTS",
//        "description": "",
//        "keywords": "CARDINAL|POINTS",
//        "icon": "icon-cardinal-points",
//        "order": 26,       
//        "color": "green"
//      }
// ];