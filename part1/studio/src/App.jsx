import { useState } from 'react'
import './App.css'
import RecipeDescription from './components/Description.jsx'
import RecipeIngredients from './components/Ingredients.jsx'

function App() {

  return (
    <>
      <div className="App">
       <div> <RecipeDescription /></div>
       <div><RecipeIngredients /></div>
      
      </div>
      

      
    </>
  )
}

export default App