import { AddVideoRequest } from "../models/requests/video/addVideoRequest";
import { UpdateVideoRequest } from "../models/requests/video/updateVideoRequest";
import { AddVideoResponse } from "../models/responses/video/addVideoResponse";
import { GetAllVideoResponse } from "../models/responses/video/getAllVideoResponse";
import { GetVideoDetailResponse } from "../models/responses/video/getVideoDetailResponse";
import { UpdateVideoResponse } from "../models/responses/video/updateVideoResponse";
import { BaseService } from "../core/services/baseService";


class VideoService extends BaseService<
	GetAllVideoResponse,
	GetVideoDetailResponse,
	AddVideoRequest,
	AddVideoResponse,
	UpdateVideoRequest,
	UpdateVideoResponse
> {
	constructor() {
		super();
		this.apiUrl = "Video";
	}

	getByFilter() {}
}
var videoService = new VideoService();
export default videoService;