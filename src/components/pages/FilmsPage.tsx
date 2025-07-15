import Header from '@components/UI/Header'
import Footer from '@components/UI/Footer'
import SearchFilmForm from '../forms/SearchFilmForm'
import { useState } from 'react'
import { Search } from 'lucide-react'
import { MOVIES } from '@/src/data/movies'
import useDebounce from '@/src/hooks/useDebounce'

const FilmsPage = () => {
	const [searchTerm, setsSearchTerm] = useState('')
	const debouncedSearch = useDebounce(searchTerm, 600)

	const movies = MOVIES.filter(films =>
		films.name.toLowerCase().includes(debouncedSearch.toLowerCase())
	)

	return (
		<>
			<main className='bg-black w-full min-h-[960px]'>
				<Header />
				<div className='mx-15 mt-15'>
					<p className='text-5xl font-bold my-10 text-white'>Быстрый поиск фильмов</p>
					<SearchFilmForm />
					<div className='flex bg-gray-500 my-10 w-[400px] py-1.5 px-3 rounded-2xl'>
						<Search />
						<input
							className='w-full ml-1 focus:outline-0'
							type='search'
							value={searchTerm}
							onChange={e => setsSearchTerm(e.target.value)}
						/>
					</div>
					<section className='grid grid-cols-5 gap-7'>
						{movies.length ? (
							movies.map(film => (
								<div
									className='w-[240px] h-[360px] rounded-2xl overflow-hidden'
									style={{
										backgroundImage: `url(${film.imgUrl})`,
										backgroundSize: 'contain',
										backgroundPosition: 'center',
										backgroundRepeat: 'no-repeat',
									}}
									key={film.id}
								></div>
							))
						) : (
							<p className='text-white text-xl font-semibold'> Фильмы не найдены</p>
						)}
					</section>
				</div>
				<Footer />
			</main>
		</>
	)
}

export default FilmsPage
