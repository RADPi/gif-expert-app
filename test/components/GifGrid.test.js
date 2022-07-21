import { render, screen } from '@testing-library/react'
import { GifGrid } from '../../src/components/GifGrid'
import useFetchGifs from '../../src/hooks/useFetchGifs'

jest.mock('../../src/hooks/useFetchGifs')

describe('Pruebas en <GifGrid />', () => {
	const category = 'One Punch'

	test('Debe mostrar el loading inicialmente', () => {
		useFetchGifs.mockReturnValue({
			images: [],
			isLoading: true,
		})

		render(<GifGrid category={category} />)

		expect(screen.getByText(category))
		expect(screen.getByText('Cargando...'))
	})

	test('Debe mostrar items cuando se cargan las imágenes useFetchGids', () => {
		const gifs = [
			{
				id: 'ABC',
				title: 'Saraza',
				url: 'http://localhost/saraza.jpg',
			},
			{
				id: '123',
				title: 'Cadorna',
				url: 'http://localhost/cadorna.jpg',
			},
		]

		useFetchGifs.mockReturnValue({
			images: gifs,
			isLoading: false,
		})
		render(<GifGrid category={category} />)

		expect(screen.getAllByRole('img').length).toBe(2)
	})
})
