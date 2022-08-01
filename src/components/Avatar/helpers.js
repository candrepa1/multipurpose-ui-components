const formatName = (name) => {
	const words = name.split(" ").filter((word) => word);
	const firstLetter = words[0][0];
	const lastLetter = words[words.length - 1][0];
	return (firstLetter + lastLetter).toUpperCase();
};

export { formatName };
