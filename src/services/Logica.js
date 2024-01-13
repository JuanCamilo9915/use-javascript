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

    const searchParentOnParent = (selectParent) => {
        const limitLoops = selectParent.length;

        for (let i = 0; i < limitLoops; i++) {// cambiarlo por un forEach a ver que tal :).
            const resources = Object.values(page)
                .filter(item => item.parentItemId === selectParent[i].id);

            parent[selectParent[i].id].children = resources;

            const childrenParent = Object.values(parent)
                .filter(item => item.parentItemId === selectParent[i].id);

            if (childrenParent.length > 0) {
                childrenParent.forEach(item => {
                    parent[selectParent[i].id].children.push(item);
                });
                grandFather[selectParent[i].parentItemId].children.push(parent[selectParent[i].id]);
            
                searchParentOnParent(childrenParent);
            } else {
                selectParent.forEach(item => {
                    grandFather[item.parentItemId]?.children.push(item);
                })
            }
        }
    }

    const mapOutMenu = () => {
        for (const idMenu in grandFather) {
            const resources = Object.values(page)
                .filter(item => item.parentItemId === +idMenu);

            grandFather[idMenu].children = resources;

            const childrenParent = Object.values(parent)
                .filter(item => item.parentItemId === +idMenu);

            if (childrenParent.length === 0) continue;
            searchParentOnParent(childrenParent);
        }
    }

    listUsers.forEach(user => {
        console.log(`\n\n-------------User: ${user.name}-------------`);
        mapOutMenu();
        console.log('Menu user: ', JSON.stringify(grandFather, null, 2));
    });
}