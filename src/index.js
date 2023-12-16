import { Menu } from './core/menu.js';

class Main {
    static main() {
        const menu = new Menu();

        menu.getAllMenu();
        menu.getAllMenuFetch();
        menu.getAllMenuFetchAsyncAwait();

        menu.getMenuUser();
    }
}

Main.main();