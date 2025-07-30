// src/App.jsx
import './App.css';
import { useState } from 'react';
export const availableIngredients = [
  { name: 'Kaiser Bun', color: 'saddlebrown' },
  { name: 'Sesame Bun', color: 'sandybrown' },
  { name: 'Gluten Free Bun', color: 'peru' },
  { name: 'Lettuce Wrap', color: 'olivedrab' },
  { name: 'Beef Patty', color: '#3F250B' },
  { name: 'Soy Patty', color: '#3F250B' },
  { name: 'Black Bean Patty', color: '#3F250B' },
  { name: 'Chicken Patty', color: 'burlywood' },
  { name: 'Lettuce', color: 'lawngreen' },
  { name: 'Tomato', color: 'tomato' },
  { name: 'Bacon', color: 'maroon' },
  { name: 'Onion', color: 'lightyellow' },
  { name: 'Cheddar Cheese', color: '#FDE18B' },
  { name: 'Swiss Cheese', color: '#F1E1A8' },
];
const App = () => {
  const [stack, setStack] = useState([])
  const addToBurger = (ingredients) => {
    setStack([ingredients, ...stack])
  }
  const removeFromBurger = (index) => {
    const newStack = []

    for (let i = 0; i < stack.length; i++) {
      if (i !== index) {
        newStack.push(stack[i])
      }
    }
    setStack(newStack)
  }
    return (
      <main>
        <h1>Burger Stacker</h1>
        <section>
          <>
            <h2>Ingredients</h2>
            <br></br>
            <ul>

              {availableIngredients.map((ingredients, index) => {
                return(

                  <li style={{ backgroundColor: ingredients.color }} key={index}>name
                  : {ingredients.name}
                  <button onClick={() => addToBurger(ingredients)}>+</button>
                </li>
                )
              })}
            </ul>
          </>
          <>
            <h2>Your choices</h2>
            {stack.length === 0 ? (<p> no ingredients</p>) : (            
                <ul>
                {stack.map((ingredients, index) => {
                  <li key={index} style={{ backgroundColor: ingredients.color }}>
                    name {ingredients.name}
                    <button onClick={() => removeFromBurger(index)}>-</button>
                  </li>
                })}
              </ul>
            )}
          </>
        </section>
      </main>
    );
  };

export default App;


