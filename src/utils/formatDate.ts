export default function formatPostedDate(createdAt: string): string {
	const postedDate: Date = new Date(createdAt);
	const currentDate: number = new Date().getTime();
	const differenceInMilliseconds: number = currentDate - postedDate.getTime();
	const differenceInDays: number = Math.floor(differenceInMilliseconds / (1000 * 60 * 60 * 24));
	let formattedPostedDate: undefined | string;
	switch (differenceInDays) {
		case 0:
			formattedPostedDate = "Today"
			break;
		case 1:
			formattedPostedDate = "Yesterday"
			break;
		default: {
			formattedPostedDate = `${differenceInDays} days ago`;
			break;
		}
	}
	return formattedPostedDate;
}