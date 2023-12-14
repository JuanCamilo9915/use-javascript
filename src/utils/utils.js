const req = Object.freeze({ GET: 'GET', POST: 'POST', PUT: 'PUT', DELETE: 'DELETE' });
const fakeUrls = Object.freeze({
  user: 'http://localhost:3100/user',
  hero: 'http://localhost:3100/hero',
  car: 'http://localhost:3100/cards',
  robot: 'http://localhost:3100/saga-transformers',
});

export const apis = Object.freeze({
  menuMap: {
    method: req.GET,
    url: urls.menuMap
  },
  menu: {
    method: req.GET,
    url: urls.menu
  },
  carFake: {
    method: req.GET,
    url: fakeUrls.car
  },
  car: {
    method: req.GET,
    url: urls.cars
  }
});