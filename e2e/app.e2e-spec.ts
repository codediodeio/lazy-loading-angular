import { LazyDemoPage } from './app.po';

describe('lazy-demo App', () => {
  let page: LazyDemoPage;

  beforeEach(() => {
    page = new LazyDemoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
