/* Nota:
este código será refactorizado, esto debido a la manipulación de algunos objetos y areglos
los cuales seguir el flujo de esa lógica es un poco complejo y confuso apesar de que
funciona perfectamente.

Cabe mencionar que esta lógica se dejara comentada com recordatorio y aprendizaje.
*/
/**
 * @param { list, menu } res 
 */
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

    mapMenuOfUser({ grandFather, parent, page, listUsers: list });
}

/**
 * 
 * @param { grandFather, parent, page, listUsers } menu 
 */
function mapMenuOfUser(menu) {
    const { grandFather, parent, page, listUsers } = menu;
    console.log('grand: ', Object.assign({}, grandFather));
    console.log('parent: ', Object.assign({}, parent));
    console.log('page: ', Object.assign({}, page));
    let idMenuToSearchBefore = undefined;
    let idMenuToSearch = undefined;
    let isGrandFather = undefined;
    let existsProperty = undefined;
    let itemMenu = undefined;
    let menuOk = [];
    // let itemsChildren = [];
    // let resourcesChildren = [];

    const addChildToParent = (isMenuRoot, pageChild) => {
        // debugger;
        itemMenu = isMenuRoot ? grandFather : parent;

        existsProperty = itemMenu[idMenuToSearch].hasOwnProperty('children');

        if (!existsProperty) itemMenu[idMenuToSearch].children = [];

        if (itemMenu[idMenuToSearch].level === 0) {
            itemMenu[idMenuToSearch].children.push(pageChild);
            return;
        }

        if (!isMenuRoot) {
            Object.values(page)
            .filter(item => item.parentItemId === idMenuToSearch)
            .forEach(item => {
                // debugger;
                itemMenu[idMenuToSearch].children.push(item)
                delete page[item.id];
            });
        }
        
        idMenuToSearchBefore = idMenuToSearch;
        idMenuToSearch = itemMenu[idMenuToSearch].parentItemId;
        isGrandFather = grandFather[idMenuToSearch] !== undefined;
        addChildToParent(isGrandFather, itemMenu[idMenuToSearchBefore]);
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
        console.log(`\n\n-------------User: ${user.name}-------------`);
        mapOutMenu();
        menuOk = Object.values(grandFather);
        console.log('Menu user # 1: ', JSON.stringify(grandFather, null, 2));
        console.log('\n\n\nMenu user # 1.2: ', JSON.stringify(menuOk, null, 2));
    });
}

// Nota: este código esta en desarrollo y es la mejora que se va a realizar al código anterior.
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

// const mapOutMenu = () => {
//     for (const keyIdMenu in grandFather) {
//         itemsChildren = Object.values(parent)
//             .filter(item => item.parentItemId === +keyIdMenu);

//         resourcesChildren = Object.values(page)
//             .filter(item => item.parentItemId === +keyIdMenu);

//         if (itemsChildren.length === 0) {
//             grandFather[keyIdMenu].children = resourcesChildren;
//         } else {
//             // itemsChildren.push([...resourcesChildren]);
//             // console.log('items: ', itemsChildren);
//             // console.log('resource: ', resourcesChildren);
//             grandFather[keyIdMenu].children = [];
//             idMenuToSearch = keyIdMenu;
//             addChildToParent(itemsChildren, resourcesChildren);
//         }
//     }
//     // console.log(itemsChildren);
//     // console.log(resourcesChildren);
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

// const addChildToParent = (items, resources) => {
//     if (items.length === 1) {
//         const x = Object.values(page)
//             .filter(item => item.parentItemId === items[0].id);
//             console.log('children of item: ', x);
//         items[0].children = x;
//         grandFather[idMenuToSearch].children.push(...items);
//         grandFather[idMenuToSearch].children.push(...resources);
//         return;
//     }

//     // for (const i of resources) {

//     // }
//     for (const i of page) {
//         parent[page[i].parentItemId].children =
//         parent[page[i].parentItemId].children.push();
//     }
// }
