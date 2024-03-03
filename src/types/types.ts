export interface jobType {
	id: string;
	name: string;
	img: string | null;
	author: string;
	salary: string | number;
	location: string;
	description: string;
	employmentType: string | null;
	createdAt?: Date;
}

export interface NavLinksType {
	name: string;
	route: string;
}

export interface SponsorImagesType {
	src: string;
	alt: string;
}
