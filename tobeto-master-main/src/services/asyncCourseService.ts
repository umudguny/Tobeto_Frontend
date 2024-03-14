import { BaseService } from "../core/services/baseService";
import { BASE_API_URL } from "../environment/environment";
import { addAsyncCourseRequest } from "../models/requests/asyncCourse/addAsyncCourseRequest";
import { updateAsyncCourseRequest } from "../models/requests/asyncCourse/updateAsyncCourseRequest";
import { addAsyncCourseResponse } from "../models/responses/asyncCourse/addAsyncCourseResponse";
import { getByIdAsyncCourseResponse } from "../models/responses/asyncCourse/getByIdAsyncCourseResponse";
import { updateAsyncCourseResponse } from "../models/responses/asyncCourse/updateAsyncCourseResponse";
import { getAllAsyncCourseResponse } from "../models/responses/asyncCourse/getAllAsyncCourseResponse";


class AsyncCourseService extends BaseService<
	getAllAsyncCourseResponse,
	getByIdAsyncCourseResponse,
	addAsyncCourseRequest,
	addAsyncCourseResponse,
	updateAsyncCourseRequest,
	updateAsyncCourseResponse
> {
	constructor() {
		super();
		this.apiUrl = BASE_API_URL + "AsyncCourses";
	}
}
var asyncCourseService = new AsyncCourseService();
export default asyncCourseService;