"use client";

import { useState } from "react";
import { recipes, aisles } from "./recipes";
import RecipeAisle from "./components/recipeAisle";

type RecipeObject = {
  name: string;
  ingredients: string[];
};

export default function Home() {
  const [weeklyRecipes, setWeeklyRecipes] = useState<RecipeObject[]>([]);
  const [ingredientCounts, setIngredientCounts] = useState<{
    [key: string]: number;
  }>({});
  const [num, setNum] = useState<number>(0);

  // randomise function
  function randomRecipe(arr: RecipeObject[]): RecipeObject {
    let randomIndex: number = Math.floor(Math.random() * recipes.length);
    return arr[randomIndex];
  }

  // onChange handler for num input
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setNum(event.target.valueAsNumber);
  }

  // generates list of all randomised recipes in an object and a dictionary to count ingredients
  const generateRandomRecipe = (): void => {
    let selectedRecipes: RecipeObject[] = [];
    let newIngredientCounts: { [key: string]: number } = {};
    while (selectedRecipes.length < num) {
      let recipe = randomRecipe(recipes);
      if (!selectedRecipes.includes(recipe)) {
        selectedRecipes.push(recipe);
        // keep track of ingredient count
        recipe.ingredients.forEach((ingredient) => {
          newIngredientCounts[ingredient] =
            (newIngredientCounts[ingredient] || 0) + 1;
        });
      }
    }
    setWeeklyRecipes(selectedRecipes);
    setIngredientCounts(newIngredientCounts);
    console.log(ingredientCounts);

    // push ingredients to aisles

    //   Object.entries(ingredientCounts).map(([ingredient, count]) => {
    //     if (aisles.freshProduce.includes(ingredient)) {
    //       produce.push(ingredient);
    //     }
    //     if (aisles.fridgeyStuff.includes(ingredient)) {
    //       fridge.push(ingredient);
    //     }
    //     if (aisles.pantry.includes(ingredient)) {
    //       pantry.push(ingredient);
    //     }
    //     if (aisles.canned.includes(ingredient)) {
    //       canned.push(ingredient);
    //     }
    //     if (aisles.breads.includes(ingredient)) {
    //       breads.push(ingredient);
    //     }
    //     if (aisles.frozen.includes(ingredient)) {
    //       frozen.push(ingredient);
    //     }
    //   });
  };

  // const produce: any = [];
  // const fridge: any = [];
  // const pantry: any = [];
  // const canned = [];
  // const breads = [];
  // const frozen = [];

  // console.log(produce)

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
      {/* <ul>
        <RecipeAisle title="Fresh Produce" items={produce} />
      </ul> */}
      <ul>
        {Object.entries(ingredientCounts).map(([ingredient, count]) => (
          <li key={ingredient}>
            {ingredient} x {count}
          </li>
        ))}
      </ul>
    </main>
  );
}
