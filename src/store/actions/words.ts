import { Word } from "@/types"

export const UPDATE_WORDS = 'UPDATE_WORDS'

export const updateWords = (arr: Word[]) => ({
        type: UPDATE_WORDS,
        payload: arr
})