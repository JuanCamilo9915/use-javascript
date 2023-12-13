const req = Object.freeze({ GET: 'GET', POST: 'POST', PUT: 'PUT', DELETE: 'DELETE' });
const fakeUrls = Object.freeze({
    user: 'http://localhost:3100/user',
    hero: 'http://localhost:3100/hero',
    car: 'http://localhost:3100/cards',
    robot: 'http://localhost:3100/saga-transformers',
});
const urls = Object.freeze({
    menuMap: 'http://localhost:9090/senorfullstack/menu/all-map',
    menu: 'http://localhost:9090/senorfullstack/menu/all',
    cars: 'http://localhost:9090/senorfullstack/cards/all',
    transformers: 'http://localhost:9090/senorfullstack/saga-transformers/all-json',
    monedas: 'http://localhost:9090/senorfullstack/moneda/all-monedas'
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