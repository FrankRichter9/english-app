import { DefaultnAPI } from '@/api'
import { AxiosResponse } from 'axios'

export const WordsAPI = {
	/*
	 * @param {string} login
	 * @param {string} password
	 * @returns {Promise<AxiosResponce<any>>}
	 *
	 */
	setWord(word: any): Promise<AxiosResponse<any>> {
		const url = '/api/word'

		return DefaultnAPI.post(url, word)
	},
}