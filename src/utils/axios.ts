import axios from "axios";

const axiosInstance = axios.create({ withCredentials: true });
axiosInstance.interceptors.request.use(async (req) => {
	return req;
});

export default axiosInstance;
