
import { BaseService } from "../core/services/baseService";
import { getAllAnnouncementTypeResponse } from "../models/responses/announcementType/getAllAnnouncementTypeResponse";
import { BASE_API_URL } from "../environment/environment";
import { AddAnnouncementTypeRequest } from "../models/requests/announcementType/AddAnnouncementTypeRequest";
import { GetAnnouncementTypeDetailResponse } from "../models/responses/announcementType/GetAnnouncementTypeDetailResponse";
import { AddAnnouncementTypeResponse } from "../models/responses/announcementType/AddAnnouncementTypeResponse";
import { UpdateAnnouncementTypeResponse } from "../models/responses/announcementType/UpdateAnnouncementTypeResponse";
import { UpdateAnnouncementTypeRequest } from "../models/requests/announcementType/UpdateAnnouncementTypeRequest";


class AnnouncementTypeService extends BaseService<
	getAllAnnouncementTypeResponse,
	GetAnnouncementTypeDetailResponse,
	AddAnnouncementTypeRequest,
	AddAnnouncementTypeResponse,
	UpdateAnnouncementTypeRequest,
	UpdateAnnouncementTypeResponse
> {
	constructor() {
		super();
		this.apiUrl = BASE_API_URL + "AnnouncementTypes";
	}
}
var announcementTypeService = new AnnouncementTypeService();
export default announcementTypeService;