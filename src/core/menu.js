import { listXMLRequestHttp } from '../services/xmlRequestHttp.js';
import { listFetchHttp } from '../services/ajaxHttp.js';
import { apis } from '../utils/info-apis.js';
import { mapStructureMenu } from '../services/logica.js';

export class Menu {

    constructor() {}

    getAllMenu() {
        listXMLRequestHttp(apis.menu)
        .then(({ menu }) => console.log('Menu XMLRrequestHttp: ', menu, '\n\n\n'))
        .catch(err => console.log(err));
    }

    getAllMenuFetch() {
        listFetchHttp(apis.menu)
        .then(({ menu }) => console.log('Menu Fetch: ', menu, '\n\n\n'))
        .catch(err => console.log('Error Menu Fetch: ', err, '\n\n\n'));
    }

    async getAllMenuFetchAsyncAwait() {
        const handledError = (err) => {
            console.log('Err Async Await: ', err, '\n\n\n');
            return '';
        }
        const list = await listFetchHttp(apis.menu).catch(handledError);

        if (!list) return;
        console.log('Menu Fetch Async Await: ', list.menu, '\n\n\n');
    }

    async getMenuUser() {
        try {
            const response = await listFetchHttp(apis.menu);
            mapStructureMenu(response);
        } catch (err) {
            console.log('Err Async Await getMenuUser: ', err);
        }
    }

}