import { Menu } from './core/menu.js';
import './core/menu.js';

class Main {
    static main() {
        const menu = new Menu();

        menu.getAllMenu();
        menu.getAllMenuFetch();
        menu.getAllMenuFetchAsyncAwait();
        // Crear librería nativa de javascript
        menu.getMenuUser();
    }
}

Main.main();