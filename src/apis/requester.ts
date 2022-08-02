import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { RESPONSE_ERROR_UNAUTHORIZED } from '@/constants/api';
import { getStorageItem, storageAccessKey } from '@/utils/local-storage';
import { refreshToken } from './auth';

const createAxiosInstance = () => {
	const base = axios.create({
		baseURL: `${import.meta.env.VITE_API_BASE_URL}/api`,
		withCredentials: true,
	});

	base.interceptors.response.use(
		async (response) => {
			const { config, data } = response;

			if (data?.statusCode === RESPONSE_ERROR_UNAUTHORIZED) {
				const newAccessToken = await refreshToken();

				if (config.headers) {
					config.headers['Authorization'] = `Bearer ${newAccessToken}`;
				}

				return axios(config);
			}

			return response;
		},
		async (error) => {
			const {
				config,
				response: { status },
			} = error;

			if (status === RESPONSE_ERROR_UNAUTHORIZED) {
				const newAccessToken = await refreshToken();

				if (config.headers) {
					config.headers['Authorization'] = `Bearer ${newAccessToken}`;
				}

				return axios(config);
			}

			return error;
		},
	);

	return base;
};

const axiosInstance = createAxiosInstance();

export async function requester<Payload>(option: AxiosRequestConfig) {
	const accessToken = getStorageItem(storageAccessKey);

	const response: AxiosResponse<Payload> = await axiosInstance({
		headers: {
			Authorization: accessToken ? `Bearer ${accessToken}` : '',
		},
		...option,
	});

	return {
		status: response.status,
		headers: response.headers,
		payload: response.data,
	};
}
