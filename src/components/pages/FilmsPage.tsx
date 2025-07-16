import Header from '@components/UI/Header'
import Footer from '@components/UI/Footer'
import SearchFilmForm from '../forms/SearchFilmForm'
import { useCallback, useMemo, useState } from 'react'
import { Search } from 'lucide-react'
import { MOVIES } from '@/src/data/movies'
import useDebounce from '@/src/hooks/useDebounce'
import TrailerWindow from '../TrailerWindow'

const FilmsPage = () => {
	const [searchTerm, setSearchTerm] = useState('')
	const [isOpenTrailer, setIsOpenTrailer] = useState(false)
	const [trailerId, setTrailerId] = useState('')
	const debouncedSearch = useDebounce(searchTerm, 600)

	const movies = useMemo(() => {
		return MOVIES.filter(films => films.name.toLowerCase().includes(debouncedSearch.toLowerCase()))
	}, [debouncedSearch])

	const handleSearchChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value)
	}, [])

	const handleClick = (trailerId: string) => {
		setIsOpenTrailer(true)
		setTrailerId(trailerId)
	}

	const closeTrailerWindow = () => {
		setIsOpenTrailer(false)
		setTrailerId('')
	}

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
							className='w-full ml-1 focus:outline-none'
							type='search'
							value={searchTerm}
							onChange={handleSearchChange}
						/>
					</div>
					<section className='grid grid-cols-5 gap-7'>
						{movies.length ? (
							movies.map(film => (
								<button
									className='w-[240px] h-[360px] rounded-2xl overflow-hidden'
									style={{
										backgroundImage: `url(${film.imgUrl})`,
										backgroundSize: 'contain',
										backgroundPosition: 'center',
										backgroundRepeat: 'no-repeat',
									}}
									key={film.id}
									onClick={() => handleClick(film.trailerId)}
								></button>
							))
						) : (
							<p className='text-white text-xl font-semibold'> Фильмы не найдены</p>
						)}
					</section>
					{isOpenTrailer && (
						<TrailerWindow onClose={closeTrailerWindow}>
							<iframe
								width='380'
								height='210'
								src={`https://www.youtube.com/embed/${trailerId}?si=0wASfnTNAcLl4mNR&amp;controls=0`}
								title='YouTube video player'
								frameBorder='0'
								allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
								referrerPolicy='strict-origin-when-cross-origin'
								allowFullScreen
							/>
						</TrailerWindow>
					)}
				</div>
				<Footer />
			</main>
		</>
	)
}

export default FilmsPage
