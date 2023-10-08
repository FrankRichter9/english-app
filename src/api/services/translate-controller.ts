import { DefaultnAPI } from '@/api'
import { AxiosResponse } from 'axios'

export const TranslateAPI = {
	/*
	 * @param {string} login
	 * @param {string} password
	 * @returns {Promise<AxiosResponce<any>>}
	 *
	 */
	translate(word: string, lang: string): Promise<AxiosResponse<any>> {
		const url = `api/translate?text=${word}&lang=${lang}`

		return DefaultnAPI.get(url)
	},
}
