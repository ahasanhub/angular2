import { NgMaterial1Page } from './app.po';

describe('ng-material1 App', function() {
  let page: NgMaterial1Page;

  beforeEach(() => {
    page = new NgMaterial1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
