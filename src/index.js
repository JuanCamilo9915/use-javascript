import { Menu } from './core/menu.js';

class Main {
    static main() {
        const menu = new Menu();

        menu.getAllMenu();
        menu.getAllMenuFetch();
        menu.getAllMenuFetchAsyncAwait();

        menu.getMenuUser();
        // window.matchMedia('(min-width: 720px)').addEventListener('change', () => alert('Heloww i am 720px of width'))
    }
}

Main.main();