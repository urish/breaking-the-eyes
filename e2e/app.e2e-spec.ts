import { BreakingTheEyesPage } from './app.po';

describe('breaking-the-eyes App', () => {
  let page: BreakingTheEyesPage;

  beforeEach(() => {
    page = new BreakingTheEyesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
