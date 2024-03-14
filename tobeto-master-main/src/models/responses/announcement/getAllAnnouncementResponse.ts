export interface Announcement {
	id: string;
	announcementTypeId: string;
	announcementTypeType: string;
	description: string;
	announcementName: string;
	sendDate : string;
}

export interface getAllAnnouncementResponse {
	from: number;
	index: number;
	size: number;
	count: number;
	pages: number;
	items: Announcement[];
	hasPrevious: boolean;
	hasNext: boolean;
}

