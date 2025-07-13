import HomePage from '@pages/HomePage'
import { FC } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { MantineProvider } from '@mantine/core'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

const App: FC = () => {
	const router = createBrowserRouter(
		[
			{
				path: '/',
				element: <HomePage />,
				errorElement: <>404</>,
			},
			{
				path: '/login',
				element: <></>,
				errorElement: <>404</>,
			},
		],
		{
			future: {
				/* v7_startTransition: true, */
				/* v7_relativeSplatPath: true, */
			},
		}
	)
	return (
		<QueryClientProvider client={queryClient}>
			<MantineProvider>
				<RouterProvider router={router}></RouterProvider>
			</MantineProvider>
		</QueryClientProvider>
	)
}

export default App
