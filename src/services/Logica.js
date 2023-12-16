export function mapStructureMenu(res) {
    const { list, menu } = res;

    const grandFather = {};
    const parent = {};
    const page = {};

    menu.forEach(menu => {        
        ({
            0: (id) => grandFather[id] = menu,
            1: (id) => parent[id] = menu,
            2: (id) => page[id] = menu
        })[menu.type](menu.id);
    });
    
    mapMenuOfUser({ grandFather, parent, page, listUsers: list });
}

function mapMenuOfUser(menu) {
    const { grandFather, parent, page, listUsers } = menu;
    let idMenuToSearch = undefined;
    let isGrandFather = undefined;
    let existsProperty = undefined;
    let itemMenu = undefined;
    const menuOk = [];

    const addChildToParent = (isMenuRoot, pageChild) => {
        itemMenu = isMenuRoot ? grandFather : parent;
        
        existsProperty = itemMenu[idMenuToSearch].hasOwnProperty('children');

        if (!existsProperty) itemMenu[idMenuToSearch].children = [];
        // validar el type para saber si se busca en los siguientes children o no
        itemMenu[idMenuToSearch].children.push(pageChild);

        if (isMenuRoot) return;

        idMenuToSearch = itemMenu[idMenuToSearch].parentItemId;
        isGrandFather = grandFather[idMenuToSearch] !== undefined;
        addChildToParent(isGrandFather, itemMenu);
    }

    const mapOutMenu = () => {
        for (const keyPage in page) {
            idMenuToSearch = page[keyPage].parentItemId;
 
            if (grandFather[idMenuToSearch]) {
                isGrandFather = true;
                addChildToParent(isGrandFather, page[keyPage]);
            }
            else {
                isGrandFather = false;
                addChildToParent(isGrandFather, page[keyPage]);
            }
        }
    }

    listUsers.forEach(user => {
        if (user.id === 1) {
            mapOutMenu();
            console.log(JSON.stringify(grandFather, null, 2));
            return;
        }
    });
}