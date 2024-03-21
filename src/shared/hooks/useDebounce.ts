import React from 'react'

const useDebounce = (value:string, delay:number) => {
    const [debounceValue, setDebounceValue] = React.useState(value)

    React.useEffect(() => {
        const timerId = setTimeout(() => {
            setDebounceValue(value)
        }, delay)

        return () => {
            clearTimeout(timerId)
        }
    })

    return debounceValue
}

export default useDebounce