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
        })[menu.level](menu.id);
    });

    // findChildrenForParent(menu);
    mapMenuOfUser({ grandFather, parent, page, listUsers: list });
}

function mapMenuOfUser(menu) {
    const { grandFather, parent, page, listUsers } = menu;
    let idMenuToSearch = undefined;
    let isGrandFather = undefined;
    let existsProperty = undefined;
    let itemMenu = undefined;
    const menuOk = [];

    // const addChildToParent = (isMenuRoot, pageChild) => {
    //     // debugger;
    //     itemMenu = isMenuRoot ? grandFather : parent;

    //     existsProperty = itemMenu[idMenuToSearch].hasOwnProperty('children');

    //     if (!existsProperty) itemMenu[idMenuToSearch].children = [];

    //     // validar el type para saber si se busca en los siguientes children o no
    //     // validar el type si es 2 agregar si es 1 buscar y si es cero buscar
    //     // console.log('itenMenu: ', itemMenu);
    //     // console.log('pageChild: ', pageChild);

    //     itemMenu[idMenuToSearch].children.push(pageChild);

    //     if (isMenuRoot) return;

    //     idMenuToSearch = itemMenu[idMenuToSearch].parentItemId;
    //     isGrandFather = grandFather[idMenuToSearch] !== undefined;
    //     addChildToParent(isGrandFather, itemMenu);
    // }

    // const addChildToParent2 = (isMenuRoot, pageChild) => {
    //     if (isMenuRoot) {
    //         existsProperty = grandFather[idMenuToSearch].hasOwnProperty('children');

    //         if (!existsProperty) grandFather[idMenuToSearch].children = [];
    //         grandFather[idMenuToSearch].children.push(pageChild);
    //     } else {
    //         existsProperty = parent[idMenuToSearch].hasOwnProperty('children');

    //         if (!existsProperty) parent[idMenuToSearch].children = [];
    //         parent[idMenuToSearch].children.push(pageChild);

    //         idMenuToSearch = parent[idMenuToSearch].parentItemId;
    //         isGrandFather = grandFather[idMenuToSearch] !== undefined;
    //         addChildToParent2(isGrandFather, parent);
    //     }
    // }

    const addChildToParent = (items, resources) => {
        if (items.length === 1) {
            const x = Object.values(page)
                .filter(item => item.parentItemId === items[0].id);
                console.log('children of item: ', x);
            items[0].children = x;
            grandFather[idMenuToSearch].children.push(...items);
            grandFather[idMenuToSearch].children.push(...resources);
            return;
        }

        // for (const i of resources) {
            
        // }
        for (const i of page) {
            parent[page[i].parentItemId].children = 
            parent[page[i].parentItemId].children.push();
        }
    }

    const mapOutMenu = () => {
        let itemsChildren = [];
        let resourcesChildren = [];

        for (const keyIdMenu in grandFather) {
            itemsChildren = Object.values(parent)
                .filter(item => item.parentItemId === +keyIdMenu);

            resourcesChildren = Object.values(page)
                .filter(item => item.parentItemId === +keyIdMenu);

            if (itemsChildren.length === 0) {
                grandFather[keyIdMenu].children = resourcesChildren;
            } else {
                // itemsChildren.push([...resourcesChildren]);
                console.log('items: ', itemsChildren);
                console.log('resource: ', resourcesChildren);
                grandFather[keyIdMenu].children = [];
                idMenuToSearch = keyIdMenu;
                addChildToParent(itemsChildren, resourcesChildren);
            }
        }
        console.log(itemsChildren);
        console.log(resourcesChildren);
    }
    // const mapOutMenu = () => {
    //     let x = [];
    //     for (const keyPage in page) {
    //         idMenuToSearch = page[keyPage].parentItemId;

    //         if (grandFather[idMenuToSearch]) {
    //             isGrandFather = true;
    //             addChildToParent(isGrandFather, page[keyPage]);
    //         }
    //         else {
    //             isGrandFather = false;
    //             addChildToParent(isGrandFather, page[keyPage]);
    //         }
    //     }
    // }

    listUsers.forEach(user => {
        if (user.id === 1) {
            mapOutMenu();
            console.log(JSON.stringify(grandFather, null, 2));
            return;
        }
    });
}

function findChildrenForParent(menu) {
    const isChildItem = (isChild) => isChild.type === 1 && isChild.parentItemId === isChild.id;

    const zero = menu.filter(item => item.type === 0);
    const one = menu.filter(item => item.type === 1);
    const two = menu.filter(item => item.type === 2);

    for (const item of zero) {
        console.log(item);
    }
}

// function findChildrenForParent(menu) {
//     Object.assign(destino, agregar);
// }

// function findChildrenForParent(menu) {
// buscar por padre y aplicar filter para saber que hijs tiene ese padre
// }