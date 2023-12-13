import { listXMLRequestHttp } from '../services/xmlRequestHttp.js';
import { apis } from '../utils/utils.js';

export class Menu {
    
    constructor() {}

    getAllMenu() {
        listXMLRequestHttp(apis.menuMap)
        .then(menu => console.log('Menu: ', menu))
        .catch(err => console.error(err));
    }

}