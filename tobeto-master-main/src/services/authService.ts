import axiosInstance from "../core/interceptors/axiosInceptor";
import { RegisterRequest } from "../models/requests/login/registerRequest";

class AuthService {
	// modelleme
	register(model: RegisterRequest) {
		return axiosInstance.post("Auth/register", model);
	}
}

var authService = new AuthService();
export default authService;