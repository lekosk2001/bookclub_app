export const dateFormat = (createdAt: string) => {
	const date = new Date(createdAt);
	return new Intl.DateTimeFormat('kr-KO').format(date);
};