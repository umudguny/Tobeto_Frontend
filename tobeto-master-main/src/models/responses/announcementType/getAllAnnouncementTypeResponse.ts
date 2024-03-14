export interface getAllAnnouncementTypeResponse {
	from: number;
	index: number;
	size: number;
	count: number;
	pages: number;
	items: AnnouncementType[];
	hasPrevious: boolean;
	hasNext: boolean;
  }
  
  export interface AnnouncementType {
	id: string;
	type: string;
  }

