import Header from '@components/UI/Header'
import Footer from '@components/UI/Footer'

const HomePage = () => {
	return (
		<>
			<Header />
			<main className='bg-black'>
				<article className='w-full h-[900px] relative'>
					<video
						className='absolute w-full h-full object-cover'
						src='/bg_video.mp4'
						autoPlay
						muted
						loop
					/>
					<div className='absolute right-3/10 top-3/10 bg-gray-500/65 w-[420px] p-4 z-10 rounded-3xl'>
						<div className='flex flex-col'>
							<div className='flex flex-col text-5xl text-white font-bold mb-6 leading-9'>
								<p>Финал</p>
								<p>&laquo;Фишер.</p>
								<p>Затмение&raquo;</p>
							</div>
							<span className='text-gray-200 font-semibold mb-1'>
								Шокирующая развязка детектива с Иваном
							</span>
							<span className='text-gray-200 font-semibold mb-8'>
								Янковским в подписке &laquo;Wink Всё в одном&raquo;
							</span>
							<button className='w-full py-3 px-8 rounded-3xl bg-gradient-to-r from-[#ff922c] to-[#ff6431] text-white text-lg font-semibold'>
								Подключить и смотреть
							</button>
							<span className='mt-3 text-[12px] text-gray-200'>
								Отключить можно в любой момент в Личном кабинете
							</span>
						</div>
					</div>
				</article>
				<section className='flex flex-col'>
					<div className='ml-15'>
						<p className='font-bold text-4xl text-white my-9 tracking-tighter'>
							Александр Петров против монстра
						</p>
						<span className='text-gray-400 text-lg'>
							Главный блокбастер года: эпическое противостояние подводников и хитроумного чудовища
							из морских глубин
						</span>
						<div className='flex gap-4 mt-8'>
							{[...Array(5)].map((_, index) => (
								<div key={index} className='w-90 h-90 bg-gray-800 rounded-4xl overflow-hidden'>
									<img
										src={`/images_cut_1/image_part_00${index + 1}.jpg`}
										alt={`Image ${index + 1}`}
										className='w-full h-full object-cover'
									/>
								</div>
							))}
						</div>
					</div>
				</section>
				<Footer />
			</main>
		</>
	)
}

export default HomePage
