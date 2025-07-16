import {
	MessagesSquare,
	BottleWine,
	Tv,
	Youtube,
	Apple,
	Goal,
	Feather,
	BookImage,
} from 'lucide-react'
import { memo } from 'react'

const Footer = () => {
	return (
		<>
			<footer className='h-[430px] border border-t-gray-600/40 mx-15 mt-20'>
				<section className='flex my-9 gap-x-20'>
					<div className='flex flex-col w-[400px]'>
						<p className='text-gray-100 font-semibold text-xl'>Техническая поддержка</p>
						<span className='text-gray-200/50 text-xl mt-3 font-semibold line-clamp-2 leading-5'>
							Мы с удовольствием ответим на интересующие тебя вопросы
						</span>
						<span className='text-gray-200/50 text-xl mt-3 font-semibold underline'>
							suppory@wink.ru
						</span>
						<button className='py-3 px-5 rounded-3xl w-[190px] text-white mt-4 font-bold flex bg-gradient-to-r from-[#c57020] to-[#ca491e]'>
							<MessagesSquare className='mr-2' />
							Написать в чат
						</button>
						<div className='flex gap-x-4 mt-10'>
							<button className='bg-gray-900/80 rounded-lg p-1'>
								<BottleWine fill='white' size={35} />
							</button>
							<button className='bg-gray-900/80 rounded-lg p-1'>
								<Tv fill='white' size={35} />
							</button>
							<button className='bg-gray-900/80 rounded-lg p-1'>
								<Youtube fill='white' size={35} />
							</button>
						</div>
					</div>
					<div className='flex flex-col w-[400px]'>
						<p className='text-gray-100 font-semibold text-xl'>Помощь</p>
						<span className='text-gray-200/50 text-xl mt-3 font-semibold'>Информация</span>
						<span className='text-gray-200/50 text-xl mt-3 font-semibold'>Вопросы и ответы</span>
						<span className='text-gray-200/50 text-xl mt-3 font-semibold'>
							Установка приложения
						</span>
						<span className='text-gray-200/50 text-xl mt-4 font-semibold'>Общие вопросы</span>
					</div>
					<div className='flex flex-col w-[400px]'>
						<p className='text-gray-100 font-semibold text-xl'>Wink</p>
						<span className='text-gray-200/50 text-xl mt-3 font-semibold'>Контакты</span>
						<span className='text-gray-200/50 text-xl mt-3 font-semibold'>
							Активировать промокод
						</span>
						<span className='text-gray-200/50 text-xl mt-3 font-semibold'>Документы</span>
						<span className='text-gray-200/50 text-xl mt-3 font-semibold'>
							Пользовательское соглашение
						</span>
						<span className='text-gray-200/50 text-xl mt-3 font-semibold leading-5'>
							Правила применения рекомендательных технологий
						</span>
						<span className='text-gray-200/50 text-xl mt-3 font-semibold'>
							Подарки от наших партнеров
						</span>
					</div>
					<div className='flex flex-col w-[160px] text-gray-100 font-semibold text-lg gap-y-3'>
						<button className='w-[150px] h-[48px] bg-gray flex bg-gray-200/25 rounded-3xl p-1.5 pl-3 items-center'>
							<Apple className='mr-1.5' fill='white' />
							App Store
						</button>
						<button className='w-[150px] h-[48px] bg-gray flex bg-gray-200/25 rounded-3xl p-1.5 pl-3 items-center'>
							<Goal className='mr-1.5' />
							Google Play
						</button>
						<button className='w-[150px] h-[48px] bg-gray flex bg-gray-200/25 rounded-3xl p-1.5 pl-3 items-center'>
							<Feather className='mr-1.5' />
							RuStore
						</button>
						<button className='w-[150px] h-[48px] bg-gray flex bg-gray-200/25 rounded-3xl p-1.5 pl-3 items-center'>
							<BookImage className='mr-1.5' />
							AppGallery
						</button>
						<button className='w-[150px] h-[48px] bg-gray flex bg-gray-200/25 rounded-3xl p-1.5 pl-3 items-center'>
							<Tv className='mr-1.5' />
							Smart TV
						</button>
					</div>
				</section>
				<div className='border border-t-gray-600/40 h-[65px] flex items-center'>
					<span className='text-gray-400/50 font-semibold text-lg'>
						&copy; 2018 - 2025 Видеосервис Wink. Все права защищены.
					</span>
				</div>
			</footer>
		</>
	)
}

export default memo(Footer)
