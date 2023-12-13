import { listXMLRequestHttp } from '../services/xmlRequestHttp.js';
import { apis } from '../utils/utils.js';

export class Car {

  constructor(menu) {
    this.menu = menu;
  }

  get showMenu() {
    return this.menu;
  }

  /**
   * 
   * @param {number} idApi 
   */
  listMenuHttp(idApi) {
    
    switch (idApi) {
      case 1:
        listXMLRequestHttp(apis.menu)
          .then((res) => this.showDataMenu(res))
          .catch((err) => console.log('err', err));
        break;

      default:
        alert('asdfs');
        break;
    }

  }

  /**
   * 
   * @param { Menu } resMenu
   * @property { list, totalItems }
   */
  showDataMenu(resMenu) {
    this.menu = resMenu;
    console.log('All Menu: ', this.menu);
  }

}