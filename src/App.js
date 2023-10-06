import React, { useState } from 'react'
import './App.css'
import Carousel from './Carousel'
const App = () => {
  const images = [
    'https://img.freepik.com/free-vector/city-park-scene-background_1308-26343.jpg?size=626&ext=jpg',
    'https://img.freepik.com/free-vector/outdoor-green-nature-background_1308-52121.jpg?size=626&ext=jpg',
    'https://img.freepik.com/premium-vector/illustration-natural-landscape-mountains-with-meadows-rivers_8589-337.jpg?size=626&ext=jpg',
    'https://img.freepik.com/free-vector/outdoor-scene-with-nature-forest_1308-59782.jpg?size=626&ext=jpg',
    'https://img.freepik.com/premium-vector/realistic-illustration-mountain-landscape_78072-368.jpg?size=626&ext=jpg',
    'https://img.freepik.com/free-vector/farm-long-road-scene_1308-51791.jpg?size=626&ext=jpg',
    'https://img.freepik.com/premium-vector/forest-mountain-vector-illustration_104785-381.jpg?size=626&ext=jpg',
    'https://img.freepik.com/free-vector/sunrise-mountain-concept-illustration_114360-14582.jpg',
    'https://cdni.iconscout.com/illustration/premium/thumb/scene-nature-landscape-of-lake-and-forest-trees-4975903-4159316.png?f=webp',
    'https://www.creativefabrica.com/wp-content/uploads/2023/04/17/Nature-Landscape-Background-Graphics-67486896-1.jpg',
    'https://media.istockphoto.com/id/531242144/vector/sunrise-over-green-hills.jpg?s=612x612&w=0&k=20&c=6g3VwxwIqgU0RGZr0t1fRxdYxbzgYEA3hQmvQiAQwXY=',
  ]

  return (
    <div className="App">
      <h1 className="carouselhead">Carousel</h1>
      <Carousel images={images} />
    </div>
  )
}

export default App
