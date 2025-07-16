import { ReactNode, useEffect } from 'react'
import { createPortal } from 'react-dom'

interface ITrailerWindow {
	children: ReactNode
	onClose: () => void
}

const TrailerWindow = ({ children, onClose }: ITrailerWindow) => {
	useEffect(() => {
		const handleEsc = (e: KeyboardEvent) => {
			if (e.key === 'Escape') onClose()
		}
		window.addEventListener('keydown', handleEsc)
		return () => window.removeEventListener('keydown', handleEsc)
	}, [onClose])

	return createPortal(
		<div className='fixed z-50 inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center'>
			<div className='relative w-[78%] max-w-xl p-6 shadow-lg animate-fadeIn rounded-2xl'>
				<button
					className='absolute right-3 top-3 rounded-2xl text-white text-lg'
					aria-label='Close window'
					onClick={onClose}
				>
					x
				</button>
				<div className='flex justify-center items-center'>{children}</div>
			</div>
		</div>,
		document.body
	)
}

export default TrailerWindow
