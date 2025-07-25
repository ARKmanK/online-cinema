import { useLocation, useNavigate } from 'react-router-dom'
import { Search, CircleUser } from 'lucide-react'
import { useState } from 'react'
import LoginForm from '../forms/LoginForm'

type TypeLinks = [string, string][]

const links: TypeLinks = [
	['Главная', 'HomePage'],
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
	const [isLoginOpen, setIsLoginOpen] = useState(false)
	const navigate = useNavigate()
	const location = useLocation()

	const isActive = (link: string) =>
		location.pathname === `/${link}` || (link === 'HomePage' && location.pathname === '/')

	return (
		<>
			<nav className='w-full h-full flex items-center justify-around font-bold text-lg relative'>
				<ul className='flex items-center gap-x-1 text-white mb-0.5'>
					{links.map(([name, link]) => (
						<li key={name}>
							<button
								className={`px-4 py-2 rounded-3xl bg-black ${
									isActive(link)
										? 'hover:bg-none border-2 border-white bg-white text-black'
										: 'hover:bg-gray-800/55'
								} `}
								onClick={() => navigate(`/${link}`)}
							>
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
						<button className='flex items-center text-white' onClick={() => setIsLoginOpen(true)}>
							<CircleUser className='mr-2' color='white' />
							Вход
						</button>
						<div className='border-l-3 h-5 border-white mx-2'></div>
						<button className='flex text-white'>Регистрация</button>
					</div>
				</div>
			</nav>
			{isLoginOpen && <LoginForm onClose={() => setIsLoginOpen(false)} />}
		</>
	)
}

export default NavBar
