import React from 'react'

const useDebounce = (value: string, delay: number = 800) => {
    const [debounceValue, setDebounceValue] = React.useState(value)

    React.useEffect(() => {
        const timerId = setTimeout(() => {
            setDebounceValue(value)
        }, delay)

        return () => {
            clearTimeout(timerId)
        }

    },[value, delay])

    return debounceValue
}

export default useDebounce