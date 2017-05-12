import { TDAmeritradePage } from './app.po';

describe('td-ameritrade App', () => {
  let page: TDAmeritradePage;

  beforeEach(() => {
    page = new TDAmeritradePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
