import { render, screen, fireEvent } from '@testing-library/react'
import { AddCategory } from '../../src/components/AddCategory'

describe('Prueba <AddCategory />', () => {
	const inputValue = 'Saraza'

	test('Debe cambiar el valor de la caja de texto', () => {
		render(<AddCategory onNewCategory={() => {}} />)

		const input = screen.getByRole('textbox')

		fireEvent.input(input, { target: { value: inputValue } })

		expect(input.value).toBe(inputValue)
	})

	test('No debe llamar onNewCategory si el input está vacio', () => {
		const onNewCategory = jest.fn()

		render(<AddCategory onNewCategory={onNewCategory} />)

		const form = screen.getByRole('textbox')

		fireEvent.submit(form)

		expect(onNewCategory).not.toHaveBeenCalled()
		// OR
		expect(onNewCategory).toHaveBeenCalledTimes(0)
	})
})
