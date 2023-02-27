import React, { useState } from 'react'

const Home = () => {
  const [id, setId] = useState('')
  const [pokemon, setPokemon] = useState({})

  const handleChange = (event) => setId(event.target.value)

  const handleSubmit = async (event) => {
    event.preventDefault()
    const response = await fetch(`/api/pokemon?id=${id}`)
    const data = await response.json()
    setPokemon(data)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type='text' value={id} onChange={handleChange} />
        <button type='submit'>ボタン</button>
      </form>
      {pokemon.name && (
        <div>
          <h2>{pokemon.name}</h2>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        </div>
      )}
    </div>
  )
}

export default Home
