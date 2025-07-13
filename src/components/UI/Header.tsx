import NavBar from '@components/UI/NavBar'
import logo_1 from '/wink_logo-1.png'
import logo_2 from '/wink_logo-2.png'

const Header = () => {
	return (
		<>
			<div className='w-full h-[72px] flex justify-between p-4 bg-black'>
				<div className='flex items-center justify-center min-w-[220px]'>
					<img src={logo_1} alt='logo_1' />
					<img src={logo_2} alt='logo_2' />
				</div>
				<NavBar />
			</div>
		</>
	)
}

export default Header
