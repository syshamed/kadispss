import { SpssPage } from './app.po';

describe('spss App', function() {
  let page: SpssPage;

  beforeEach(() => {
    page = new SpssPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
