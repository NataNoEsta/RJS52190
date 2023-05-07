import MOCK_DATA from '../../data/MOCK_DATA';

export const pedirDatos = () => {
	// eslint-disable-next-line no-unused-vars
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(MOCK_DATA);
		}, 3000);
	})
};