import { useEffect, useState } from 'react'

export function useDebounce<T>(value: T, delay = 300) {
	const [debounceValue, setDebounceValue] = useState(value)

	useEffect(() => {
		const handler = setTimeout(() => {
			setDebounceValue(value)
		}, delay)

		return () => {
			clearTimeout(handler)
		}
	}, [value, delay])

	return debounceValue
}

export default useDebounce
