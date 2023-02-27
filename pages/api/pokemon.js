export default async function handler (req, res) {
  const { id } = req.query
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
  const pokemon = await response.json()
  res.status(200).json(pokemon)
}
