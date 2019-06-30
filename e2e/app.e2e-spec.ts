import { IsargenysPage } from './app.po';

describe('isargenys App', function() {
  let page: IsargenysPage;

  beforeEach(() => {
    page = new IsargenysPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
