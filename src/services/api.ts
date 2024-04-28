import axios from "axios";
const ACCESS_KEY = '7ZEn7lAVuqaxVN5Jfk3uCc0FF92W5A47SMVM98qjJZo';
axios.defaults.baseURL = 'https://api.unsplash.com/';

export async function requestForImage<T>(
  searchQuery: string,
  page = 1
): Promise<T> {
  try {
		const response = await axios.get('/search/photos', {
			params: {
			  client_id: ACCESS_KEY,
			  query: searchQuery,
			  page: page,
			  per_page: 12,
			},
		  });
		const { data: responseData } = response;
		return responseData;
  } catch (error) {
    throw new Error();
  }
}
