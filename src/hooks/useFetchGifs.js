import { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs'

const useFetchGifs = category => {
	const [images, setImages] = useState([])
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		const getImages = async () => {
			setImages(await getGifs(category))
			setIsLoading(false)
		}
		getImages()
	}, [])

	return { images, isLoading }
}

export default useFetchGifs
