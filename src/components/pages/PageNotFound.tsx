import Header from '@components/UI/Header'
import Footer from '../UI/Footer'

const PageNotFound = () => {
	return (
		<>
			<Header />
			<main className='bg-black h-[875px]'>
				<div className='h-full flex flex-col justify-between items-center'>
					<h1 className='text-white font-bold text-7xl pt-40'>Страницы не существует</h1>
					<Footer />
				</div>
			</main>
		</>
	)
}

export default PageNotFound
