import { DefaultnAPI } from '@/api'
import { AxiosResponse } from 'axios'

export const UsersAPI = {
	/*
	 * @param {string} login
	 * @param {string} password
	 * @returns {Promise<AxiosResponce<any>>}
	 *
	 */
	getGroups(id: number): Promise<AxiosResponse<any>> {
		const url = '/groups/userid=' + id

		return DefaultnAPI.get(url)
	},
}
