import { render, screen } from '@testing-library/react'
import { GifItem } from '../../src/components/GifItem'

describe('Pruebas en <GifItem />', () => {
	const title = 'Titulo de Prueba'
	const url = 'http://www.url.com/prueba.jpg'

	test('Debe coincidir el snapshot', () => {
		const { container } = render(<GifItem title={title} url={url} />)
		expect(container).toMatchSnapshot()
	})

	test('Debe mostrar la imagen con la url y el alt indicado', () => {
		render(<GifItem title={title} url={url} />)
		const { src, alt } = screen.getByRole('img')
		expect(src).toBe(url)
		expect(alt).toBe(title)
	})

	test('Debe mostrar el titulo en el componente', () => {
		render(<GifItem title={title} url={url} />)
		expect(screen.getByText(title)).toBeTruthy()
	})
})
