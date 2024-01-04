import { listXMLRequestHttp } from '../services/xmlRequestHttp.js';
import { listFetchHttp } from '../services/ajaxHttp.js';
import { apis } from '../utils/info-apis.js';
import { mapStructureMenu } from '../services/logica.js';

export class Menu {

    constructor() {}

    getAllMenu() {
        listXMLRequestHttp(apis.menu)
        .then(({ menu }) => console.log('Menu XMLRrequestHttp: ', menu))
        .catch(err => console.error(err));
    }

    getAllMenuFetch() {
        listFetchHttp(apis.menu)
        .then(({ menu }) => console.log('Menu Fetch: ', menu))
        .catch(err => console.error(err));
    }

    async getAllMenuFetchAsyncAwait() {
        const { menu } = await listFetchHttp(apis.menu)
        .catch(err => console.log('Err Async Await: ', err));
        console.log('Menu Fetch Async Await: ', menu);
    }

    async getMenuUser() {
        try {
            const response = await listFetchHttp(apis.menu);
            mapStructureMenu(response);
        } catch (err) {
            console.log('Err Async Await: ', err);
        }
    }

}