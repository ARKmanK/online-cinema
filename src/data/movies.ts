interface IMOVIE {
	id: number
	name: string
	rating: number
	imgUrl: string
}

export const MOVIES: IMOVIE[] = [
	{
		id: 1,
		name: 'Темный Рыцарь',
		rating: 8.9,
		imgUrl:
			'https://upload.wikimedia.org/wikipedia/ru/f/f4/%D0%A2%D1%91%D0%BC%D0%BD%D1%8B%D0%B9_%D1%80%D1%8B%D1%86%D0%B0%D1%80%D1%8C_%282008%29_%D0%BF%D0%BE%D1%81%D1%82%D0%B5%D1%80.jpg',
	},
]
