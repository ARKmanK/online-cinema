import { CircleX, Flag } from 'lucide-react'

type LoginFormProps = {
	onClose: () => void
}

const LoginForm = ({ onClose }: LoginFormProps) => {
	return (
		<main className='absolute top-3/10 right-3/10 bg-[#0f0f0f] h-[757px] w-[768px] rounded-[10%] flex flex-col z-50'>
			<div className='flex justify-end'>
				<button
					className='mr-10 mt-10 w-[35px] h-[35px] rounded-full bg-gray-700 hover:bg-gray-600'
					onClick={onClose}
				>
					<CircleX size={35} fill='#2f2f2f' />
				</button>
			</div>
			<div className='flex flex-col w-[60%] items-center mx-auto mt-25'>
				<h1 className='font-bold text-5xl text-white line-clamp-3 flex flex-col items-center leading-9 p-4'>
					Войдите или <span>создайте</span>
					<span>аккаунт</span>
				</h1>
				<p className='text-[#676767] line-clamp-3 mt-2 text-center flex flex-col items-center'>
					Введите номер телефона, чтобы пользоваться Wink <span>на любом устройстве</span>
				</p>
				<div className='mt-9 w-full flex justify-center'>
					<div className='flex items-center mr-4'>
						<Flag size={26} color='white' />
						<span className='text-white text-xl'>+7</span>
					</div>
					<input
						className='p-3 text-white w-[250px] border-t-0 border-l-0 border-r-0 border-b border-b-gray-600 focus:outline-none'
						type='tel'
						placeholder='Телефон'
						step='any'
						maxLength={10}
					/>
				</div>
			</div>
		</main>
	)
}

export default LoginForm
