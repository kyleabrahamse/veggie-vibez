"use client";

import { ChangeEvent, useState } from "react";
import { recipes } from "./recipes";

type RecipeObject = {
  name: string;
  ingredients: string[];
};

function randomRecipe(arr: RecipeObject[]): RecipeObject {
  let randomIndex: number = Math.floor(Math.random() * recipes.length);
  return arr[randomIndex];
}

// const selectedRecipe = randomRecipe(recipes);

export default function Home() {
  const [selectedRecipe, setSelectedRecipe] = useState<RecipeObject>();
  const [num, setNum] = useState<Number>(0);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    // Ensure value parsed is an number
    const value: number = parseInt(event.target.value);
    setNum(value);
  }

  const generateRandomRecipe = () => {
    const recipe: RecipeObject = randomRecipe(recipes);
    setSelectedRecipe(recipe);
  };

  return (
    <main>
      <h1>Veggie Vibez</h1>
      <h2>Meals</h2>
      <ul>{selectedRecipe?.name}</ul>
      <input
        type="number"
        className="border border-gray-300"
        min="0"
        max="7"
        onChange={handleChange}
        // value={num}
      />
      <button onClick={generateRandomRecipe} className="border border-gray-500">
        Genrate Shopping List
      </button>
      <h2>Shopping List</h2>
      <ul>
        {selectedRecipe?.ingredients.map((recipe, i) => {
          return <li key={i}>{recipe}</li>;
        })}
      </ul>
    </main>
  );
}
