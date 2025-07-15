import { X } from 'lucide-react'
import { useState } from 'react'

const genres = [
	{ value: 'anime', label: 'Аниме' },
	{ value: 'action', label: 'Боевик' },
	{ value: 'military', label: 'Военный' },
	{ value: 'detective', label: 'Детектив' },
]

const years = [{ value: 'all', label: 'Все года' }]

const countries = [
	{ value: 'all', label: 'Все страны' },
	{ value: 'russian', label: 'Русские' },
	{ value: 'sng', label: 'СНГ' },
	{ value: 'foreign', label: 'Зарубежные' },
]

const accessing = [
	{ value: 'all', label: 'Все доступности' },
	{ value: 'subscribe', label: 'В подписке' },
	{ value: 'bought', label: 'Куплено' },
	{ value: 'free', label: 'Бесплатно' },
	{ value: 'free with advertisements', label: 'Бесплатно с рекламой' },
]

const SearchFilmForm = () => {
	const [genre, setGenre] = useState('')
	const [year, setYear] = useState('all')
	const [country, setCountry] = useState('all')
	const [access, setAccess] = useState('all')

	const handleClick = () => {
		setGenre('')
		setYear('all')
		setCountry('all')
		setAccess('all')
	}

	return (
		<div className='w-full bg-[#141414] rounded-3xl py-15 px-9 h-[300px] flex flex-col justify-between'>
			<div className='flex gap-x-4'>
				<select
					className='w-[25%] text-[#727270] border-0 border-b-2 border-b-white focus:outline-none appearance-none pb-1'
					value={genre}
					onChange={e => setGenre(e.target.value)}
				>
					<option value='' disabled hidden>
						Жанры
					</option>
					{genres.map(genre => (
						<option className='rounded-[0%]' key={genre.label} value={genre.value}>
							{genre.label}
						</option>
					))}
				</select>
				<select
					className='w-[25%] text-[#727270] border-0 border-b-2 border-b-white focus:outline-none appearance-none pb-1'
					value={year}
					onChange={e => setYear(e.target.value)}
				>
					<option value='Все' disabled hidden>
						Года
					</option>
					{years.map(year => (
						<option key={year.label} value={year.value}>
							{year.label}
						</option>
					))}
					{Array.from({ length: 100 }, (_, index) => 2025 - index).map(year => (
						<option key={year} value={year}>
							{year}
						</option>
					))}
				</select>
				<select
					className='w-[25%] text-[#727270] border-0 border-b-2 border-b-white focus:outline-none appearance-none pb-1'
					value={country}
					onChange={e => setCountry(e.target.value)}
				>
					<option value='all' disabled hidden>
						Все страны
					</option>
					{countries.map(country => (
						<option key={country.label} value={country.value}>
							{country.label}
						</option>
					))}
				</select>
				<select
					className='w-[25%] text-[#727270] border-0 border-b-2 border-b-white focus:outline-none appearance-none pb-1'
					value={access}
					onChange={e => setAccess(e.target.value)}
				>
					<option value='all' disabled hidden>
						Все доступности
					</option>
					{accessing.map(access => (
						<option key={access.label} value={access.value}>
							{access.label}
						</option>
					))}
				</select>
			</div>
			<div className='flex'>
				<button className='py-3 px-10 w-[220px] rounded-3xl bg-gradient-to-r from-[#ff922a] to-[#ff6431] text-white font-semibold text-lg'>
					Найти
				</button>
				<button className='flex items-center text-white ml-5' onClick={handleClick}>
					Очистить фильтр
					<X className='ml-1' size={17} />
				</button>
			</div>
		</div>
	)
}

export default SearchFilmForm
