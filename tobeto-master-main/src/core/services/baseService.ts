import {AxiosResponse} from "axios";
import axiosInstance from "../interceptors/axiosInceptor";

export class BaseService<
	GetAllType,
	GetByIdType,
	AddRequestType,
	AddResponseType,
	UpdateRequestType,
	UpdateResponseType,
> {
	public apiUrl: string;

	constructor() {
		this.apiUrl = "";
	}

	/*getAll(): Promise<AxiosResponse<GetAllType, any>> {
		return axiosInstance.get<GetAllType>(this.apiUrl+"/GetList");
	}*/

	/*userId gönderilirse ona göre filtreli getirir, gönderilmezse filtresiz getirir.*/ 
	getAll(userId?: string): Promise<AxiosResponse<GetAllType, any>> {
		// userId varsa, URL'ye ekleyin; yoksa, sadece genel URL'yi kullanın
		const url = userId ? `${this.apiUrl}/GetList?userId=${userId}` : `${this.apiUrl}/GetList`;
		return axiosInstance.get<GetAllType>(url);
	  }

	getById(id: number): Promise<AxiosResponse<GetByIdType, any>> {
		return axiosInstance.get<GetByIdType>(this.apiUrl + "/GetById" + id);
	}
//bu kısımlara bakıalcak
	add(request: AddRequestType): Promise<AxiosResponse<AddResponseType, any>> {
		return axiosInstance.post<AddResponseType>(this.apiUrl+"/Add/", request);
	}

	update(
		request: UpdateRequestType,
	): Promise<AxiosResponse<UpdateResponseType, any>> {
		return axiosInstance.put<UpdateResponseType>(this.apiUrl, request);
	}

	delete(id: number) {
		return axiosInstance.delete(this.apiUrl + "/" + id);
	}
}