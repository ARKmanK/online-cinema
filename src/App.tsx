import HomePage from '@pages/HomePage'
import PageNotFound from '@pages/PageNotFound'
import { FC } from 'react'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import { MantineProvider } from '@mantine/core'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

const App: FC = () => {
	const router = createBrowserRouter(
		[
			{
				path: '/',
				element: <Navigate to='/HomePage' replace />,
				errorElement: <PageNotFound />,
			},
			{
				path: '/HomePage',
				element: <HomePage />,
			},
			{
				path: '/login',
				element: <></>,
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
