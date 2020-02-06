import axios from 'axios';

export const axiosWithAuth = () => {
	const token = localStorage.getItem('token');

	return axios.create({
		baseURL: 'https://chore-tracker-build.herokuapp.com/',
		headers: {
			Authorization: token
		}
	});
};

export default axiosWithAuth;