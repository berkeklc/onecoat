import axios from 'axios'

export const fetchProducts = async () => {
	try {
		const runtimeConfig = useRuntimeConfig()
		const response = await axios.get(
			`${runtimeConfig.public.directusApiUrl}/items/Products`,
			{
				headers: {
					Authorization: `Bearer ${runtimeConfig.public.directusApiKey}`,
				},
			}
		)
		return response.data.data
	} catch (error) {
		console.error('Error fetching products:', error)
		throw error
	}
}
