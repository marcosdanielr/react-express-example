import axios from 'axios'
import { useEffect, useState } from 'react'
import { usePreloader } from '../../hooks/usePreloader'

export function Home() {
  const { openPreloader, closePreloader } = usePreloader()
  const [foods, setFoods] = useState([])

  async function getFoods() {
    openPreloader()
    try {
      const { data } = await axios.get('http://localhost:3333/list')
      setFoods(data)
    } catch (error) {
      alert('Houve um erro ao obter lista de comidas')
    } finally {
      closePreloader()
    }
  }

  useEffect(() => {
    getFoods()
  }, [])

  return (
    <div className="container">
      {foods.map(food => (
        <div key={food.id}>
          <h4>{food.title}</h4>
          <p>{food.description}</p>
        </div>
      ))}
    </div>
  )
}
