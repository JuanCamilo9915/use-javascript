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

    const parentArr = Object.values(parent);
    const pageArr = Object.values(page);
    let resources = [];
    let childrenParent = [];
    let limitLoops = 0;
    let duplicados = [];
    let posicionDuplicado = 0;

    const filterParentOrPage = (collection, idMenuSearch) => {
        return collection
            .filter(item => item.parentItemId === idMenuSearch);
    }

    const searchParentOnParentUsingForEach = (selectParent) => {
        selectParent.forEach(menu => {
            resources = filterParentOrPage(pageArr, menu.id);
            parent[menu.id].children = resources;
            childrenParent = filterParentOrPage(parentArr, menu.id);

            if (childrenParent.length > 0) {
                childrenParent.forEach(item => {
                    parent[menu.id].children.push(item);
                });
                // TODO: el carácter opcional(?) es obligatorio, si se quita deja de funcionar.
                grandFather[menu.parentItemId]?.children.push(parent[menu.id]);       
                searchParentOnParentUsingForEach(childrenParent);
            } else {
                selectParent.forEach(item => {
                    // TODO: el carácter opcional(?) es obligatorio, si se quita deja de funcionar.
                    grandFather[item.parentItemId]?.children.push(item);
                })
            }
        })
    }

    /* TODO: este bloque de código se deja a modo de ejemplo, ya que funciona exactamente igual a
     searchParentOnParentUsingForEach(), como una manera alterna de abordar el ejercicio. */
    const searchParentOnParentUsingFor = (selectParent) => {
        limitLoops = selectParent.length;

        for (let i = 0; i < limitLoops; i++) {
            resources = filterParentOrPage(pageArr, selectParent[i].id);
            parent[selectParent[i].id].children = resources;
            childrenParent = filterParentOrPage(parentArr, selectParent[i].id);

            if (childrenParent.length > 0) {
                childrenParent.forEach(item => {
                    parent[selectParent[i].id].children.push(item);
                });
                // TODO: el carácter opcional(?) es obligatorio, si se quita deja de funcionar.
                grandFather[selectParent[i].parentItemId]?.children.push(parent[selectParent[i].id]);

                searchParentOnParentUsingFor(childrenParent);
                continue;/* TODO: con esto nos ahorramos el uso del bloque else. */
            }

            selectParent.forEach(item => {
                // TODO: el carácter opcional(?) es obligatorio, si se quita deja de funcionar.
                grandFather[item.parentItemId]?.children.push(item);
            })
        }
    }

    const mapOutMenu = () => {
        for (const idMenu in grandFather) {
            resources = filterParentOrPage(pageArr, +idMenu);
            grandFather[idMenu].children = resources;
            childrenParent = filterParentOrPage(parentArr, +idMenu);

            if (childrenParent.length === 0) continue;
            /* TODO: Using for loop imperative
             searchParentOnParentUsingFor(childrenParent); */
            // TODO: Using forEach loop declarative
            searchParentOnParentUsingForEach(childrenParent);
        }

        /* TODO: 
        Se crea este ciclo for para eliminar los registros dplicados en el menú
        creado, cabe encionar que estos duplicados pasan en situaciones especiales,
        NO en todos los casos.

        Adicional se intentarn otras opciones ara evitar tener este ciclo adicional,
        pero de los intentos realizados ninguno tuvo éxito.
        */
        for (const idMenu in grandFather) {
            grandFather[idMenu].children.forEach(({id}) => {
                duplicados = grandFather[idMenu].children.filter(item => item.id === id);
                if (duplicados.length > 1) {
                    posicionDuplicado = grandFather[idMenu].children.findIndex(item => item.id === id);
                    grandFather[idMenu].children.splice(posicionDuplicado, 1);
                }
            })
        }
    }

    listUsers.forEach(user => {
        console.log(`\n\n-------------User: ${user.name}-------------`);
        mapOutMenu();
        console.log('Menu user: ', JSON.stringify(grandFather, null, 2));
    });
}