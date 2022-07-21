import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({ onNewCategory }) => {
	const [inputValue, setInputValue] = useState('')

	const onInputChange = ({ target }) => {
		setInputValue(target.value)
	}

	const onSubmit = e => {
		e.preventDefault()
		if (inputValue.trim().length < 2) return
		onNewCategory(inputValue.trim())
		setInputValue('')
	}

	return (
		<form aria-label='form' onSubmit={onSubmit}>
			<input
				type='text'
				placeholder='Buscar gifs'
				value={inputValue}
				onChange={onInputChange}
			/>
		</form>
	)
}

AddCategory.propTypes = {
	onNewCategory: PropTypes.func.isRequired,
}
