import { StarWarsClientPage } from './app.po';

describe('star-wars-client App', () => {
  let page: StarWarsClientPage;

  beforeEach(() => {
    page = new StarWarsClientPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
