import { BaseService } from "../core/services/baseService";
import { BASE_API_URL } from "../environment/environment";
import { addCertificateRequest } from "../models/requests/certificate/addCertificateRequest";
import { updateCertificateRequest } from "../models/requests/certificate/updateCertificateRequest";
import { addCertificateResponse } from "../models/responses/certificate/addCertificateResponse";
import { updateCertificateResponse } from "../models/responses/certificate/updateCertificateResponse";
import { getAllCertificateResponse } from "../models/responses/certificate/getAllCertificateResponse";
import { getCertificateDetailResponse } from "../models/responses/certificate/getCertificateDetailResponse";

class CertificateService extends BaseService<
	getAllCertificateResponse,
	getCertificateDetailResponse,
	addCertificateRequest,
	addCertificateResponse,
	updateCertificateRequest,
	updateCertificateResponse
> {
	constructor() {
		super();
		this.apiUrl = BASE_API_URL + "Certificates";
	}
}
var certificateService = new CertificateService();
export default certificateService;