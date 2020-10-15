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
