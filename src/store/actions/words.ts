import { Word } from "@/types"

export const UPDATE_WORDS = 'UPDATE_WORDS'
export const UPDATE_GENERATED_WORDS = 'UPDATE_GENERATED_WORDS'

export const updateWords = (arr: Word[]) => ({
        type: UPDATE_WORDS,
        payload: arr
})

export const updateGeneratedWords = (arr: Word[]) => ({
        type: UPDATE_GENERATED_WORDS,
        payload: arr
})