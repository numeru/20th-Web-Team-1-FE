export const GET = 'GET';
export const PUT = 'PUT';
export const DELETE = 'DELETE';
export const POST = 'POST';

export const RESPONSE_SUCCESS_OK = 200;
export const RESPONSE_SUCCESS_CREATED = 201;
export const RESPONSE_ERROR_UNAUTHORIZED = 401;

const API_URL = {
	auth: {
		signin: '/signin',
		refresh: '/refresh-token',
		logout: '/logout',
	},
	messages: {
		index: '/messages',
		folder: '/messages/folder',
		read: '/messages/alreadyRead',
		opening: '/messages/opening',
		favorite: '/messages/favorite',
	},
	users: {
		info: '/users/info',
		nickname: '/users/nickname',
	},
	noticeTree: {
		index: '/notices',
	},
	forest: {
		index: '/forest',
	},
};

export default API_URL;
