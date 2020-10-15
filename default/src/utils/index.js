
export const safeParseJSON = (str, defaultObj) => {
	let result;

	try {
		result = JSON.parse(str);
	} catch (err) {
		console.warn('json parse error:', err);
		result = typeof defaultObj === 'undefined' ? str : defaultObj;
	}

	return result || defaultObj;
};

export const prettyJSON = str => {
    const json = safeParseJSON(str);

    try {
        return JSON.stringify(json, null, 4);
    } catch (e) {
        console.warning(e);
    }

    return str;
};

export const findMenuInfoByPath = (menuTree, path) => {
	let menu;
	let subMenu;

	if (path) {
        for (let i = 0; i < menuTree.length; i++) {
            menu = menuTree[i];

            for (let j = 0; j < (menu.children || []).length; j++) {
                if (menu.children[j].path === path) {
                    subMenu = menu.children[j];
                    break;
                }
            }

            if (subMenu) {
                break;
            }
        }

        return {
            subMenu,
            menu
        };
    }

    return { subMenu, menu };
};
