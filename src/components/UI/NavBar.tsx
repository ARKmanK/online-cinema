import { useNavigate } from 'react-router-dom'
import { Search, CircleUser } from 'lucide-react'

type TypeLinks = [string, string][]

const links: TypeLinks = [
	['Главная', 'MainPage'],
	['ТВ-каналы', 'TWPage'],
	['Музыка', 'MusicPage'],
	['Фильмы', 'FilmsPage'],
	['Сериалы', 'SeriesPage'],
	['Детям', 'ChildrenPage'],
	['Игры', 'GamesPage'],
	['Спорт', 'SportPage'],
	['Бесплатно', 'FreePage'],
	['Подписки', 'SubscribePage'],
	['Книги', 'BooksPage'],
]

const NavBar = () => {
	const navigate = useNavigate()

	return (
		<>
			<nav className='w-full h-full flex items-center justify-around font-bold text-lg'>
				<ul className='flex items-center gap-x-8.5 text-white mb-0.5'>
					{links.map(([name, link]) => (
						<li key={name}>
							<button className='' onClick={() => navigate(`/${link}`)}>
								{name}
							</button>
						</li>
					))}
					<button className='mb-2 tracking-[1px]'>...</button>
				</ul>
				<div className='flex justify gap-x-5'>
					<button>
						<Search color='white' size={23} />
					</button>
					<div className='mx-3 flex justify-between items-center'>
						<button className='flex items-center text-white' onClick={() => navigate('/LoginPage')}>
							<CircleUser className='mr-2' color='white' />
							Вход
						</button>
						<div className='border-l-3 h-5 border-white mx-2'></div>
						<button className='flex text-white' onClick={() => navigate('/RegisterPage')}>
							Регистрация
						</button>
					</div>
				</div>
			</nav>
		</>
	)
}

export default NavBar
