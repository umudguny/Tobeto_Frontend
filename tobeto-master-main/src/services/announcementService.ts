
import { BaseService } from "../core/services/baseService";
import { BASE_API_URL } from "../environment/environment";
import { AddAnnouncementRequest } from "../models/requests/announcement/AddAnnouncementRequest";
import { UpdateAnnouncementRequest } from "../models/requests/announcement/UpdateAnnouncementRequest";
import { AddAnnouncementResponse } from "../models/responses/announcement/AddAnnouncementResponse";
import { GetAnnouncementDetailResponse } from "../models/responses/announcement/GetAnnouncementDetailResponse";
import { UpdateAnnouncementResponse } from "../models/responses/announcement/UpdateAnnouncementResponse";
import { getAllAnnouncementResponse } from "../models/responses/announcement/getAllAnnouncementResponse";


class AnnouncementService extends BaseService<
	getAllAnnouncementResponse,
	GetAnnouncementDetailResponse,
	AddAnnouncementRequest,
	AddAnnouncementResponse,
	UpdateAnnouncementRequest,
	UpdateAnnouncementResponse
> {
	constructor() {
		super();
		this.apiUrl = BASE_API_URL + "Announcements";
	}
	
}
var announcementService = new AnnouncementService();
export default announcementService;