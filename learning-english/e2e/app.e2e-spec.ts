import { LearningEnglishPage } from './app.po';

describe('learning-english App', () => {
  let page: LearningEnglishPage;

  beforeEach(() => {
    page = new LearningEnglishPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
