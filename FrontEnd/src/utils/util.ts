import { useState } from "react"

export function useNumberInput(defaultValue: number = 0) {
    const [value, setValue] = useState(defaultValue)
    
    const onChangeValue = (input: string) => {
        setValue(Number(input))
    }

    return [value, onChangeValue] as const
}

export function useStringInput(defaultValue: string = '') {
    const [value, setValue] = useState(defaultValue)
    
    const onChangeValue = (input: string) => {
        setValue(input)
    }

    return [value, onChangeValue] as const
}