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

	/*
	 * @param {string} login
	 * @param {string} password
	 * @returns {Promise<AxiosResponce<any>>}
	 *
	 */
	getWords(limit = 20, page = 1): Promise<AxiosResponse<any>> {
		const url = `/api/words?limit=${limit}&page=${page}`

		return DefaultnAPI.get(url)
	},

	/*
	 * @param {string} login
	 * @param {string} password
	 * @returns {Promise<AxiosResponce<any>>}
	 *
	 */
	deleteWord(id: number): Promise<AxiosResponse<any>> {
		const url = '/api/word'

		return DefaultnAPI.delete(url, {
			data: {
				id
			}
		})
	},
}
