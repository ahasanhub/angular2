import { NgMaterial2Page } from './app.po';

describe('ng-material2 App', function() {
  let page: NgMaterial2Page;

  beforeEach(() => {
    page = new NgMaterial2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
