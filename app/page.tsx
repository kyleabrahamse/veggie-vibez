"use client";

import { useState } from "react";
import { recipes, aisles } from "./recipes";

type RecipeObject = {
  name: string;
  ingredients: string[];
};

export default function Home() {
  const [weeklyRecipes, setWeeklyRecipes] = useState<RecipeObject[]>([]);
  const [num, setNum] = useState<number>(0);

  function randomRecipe(arr: RecipeObject[]): RecipeObject {
    let randomIndex: number = Math.floor(Math.random() * recipes.length);
    return arr[randomIndex];
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setNum(event.target.valueAsNumber);
  }

  const generateRandomRecipe = (): void => {
    let selectedRecipes: RecipeObject[] = [];
    while (selectedRecipes.length < num) {
      let recipe = randomRecipe(recipes);
      if (!selectedRecipes.includes(recipe)) {
        selectedRecipes.push(recipe);
      }
    }
    setWeeklyRecipes(selectedRecipes);
  };

  return (
    <main>
      <h1>Veggie Vibez</h1>
      <h2>Meals</h2>
      <ul>
        {weeklyRecipes?.map((recipe, i) => {
          return <li key={i}>{recipe.name}</li>;
        })}
      </ul>
      <input
        type="number"
        className="border border-gray-300"
        min="0"
        max="7"
        onChange={handleChange}
        value={num}
      />
      <button onClick={generateRandomRecipe} className="border border-gray-500">
        Genrate Shopping List
      </button>
      <h2>Shopping List</h2>
      <ul>
        {weeklyRecipes?.map((recipe, i) =>
          recipe.ingredients.map((rec, i) => {
            return <li key={i}>{rec}</li>;
          })
        )}
      </ul>
    </main>
  );
}
