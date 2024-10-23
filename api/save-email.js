import { Pool } from 'pg'

const pool = new Pool({
	connectionString: process.env.DATABASE_URL, // Heroku veritabanı URL'si
	ssl: {
		rejectUnauthorized: false,
	},
})

export default async function handler(req, res) {
	if (req.method === 'POST') {
		const { email } = req.body

		if (!email) {
			return res.status(400).json({ error: 'Email is required' })
		}

		try {
			const client = await pool.connect()
			const result = await client.query(
				'INSERT INTO emails (email) VALUES ($1) RETURNING *',
				[email]
			)
			client.release()
			return res.status(201).json({
				message: 'Email saved successfully',
				data: result.rows[0],
			})
		} catch (error) {
			console.error('Database error:', error)
			return res.status(500).json({ error: 'Database error' })
		}
	} else {
		return res.status(405).json({ error: 'Method Not Allowed' })
	}
}
