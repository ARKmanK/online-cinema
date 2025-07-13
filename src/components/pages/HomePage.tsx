import { useEffect } from 'react'
import Header from '@components/UI/Header'

const HomePage = () => {
	useEffect(() => {
		console.log('HomePage render')
	}, [])

	return (
		<>
			<Header />
			<div className='w-full h-full bg-black text-red-500'></div>
		</>
	)
}

export default HomePage
