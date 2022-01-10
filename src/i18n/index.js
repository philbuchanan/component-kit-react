export const __ = (text) => {
	return text
};

export const _n = (single, plural, number) => {
	return number === 1 ? single : plural;
};
