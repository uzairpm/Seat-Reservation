import { MovieReservationAppPage } from './app.po';

describe('movie-reservation-app App', function() {
  let page: MovieReservationAppPage;

  beforeEach(() => {
    page = new MovieReservationAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
