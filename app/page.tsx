"use client";

import { useState } from "react";
import { recipes, aisles } from "./recipes";
import RecipeAisle from "./components/recipeAisle";

type RecipeObject = {
  name: string;
  ingredients: string[];
};

export default function Home() {
  // State variables to manage recipes, ingredient counts, and selected number of meals
  const [weeklyRecipes, setWeeklyRecipes] = useState<RecipeObject[]>([]);
  const [ingredientCounts, setIngredientCounts] = useState<{
    [key: string]: number;
  }>({});
  const [num, setNum] = useState<number>(0);

  // Function to randomly select a recipe from the provided recipes array
  function randomRecipe(arr: RecipeObject[]): RecipeObject {
    let randomIndex: number = Math.floor(Math.random() * recipes.length);
    return arr[randomIndex];
  }

  // Handle changes in the number input element
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setNum(event.target.valueAsNumber);
  }

  // Function to generate a random list of recipes and update ingredient counts
  const generateRandomRecipe = () => {
    let selectedRecipes: RecipeObject[] = [];
    let newIngredientCounts: { [key: string]: number } = {};

    // Loop until the desired number of recipes is reached
    while (selectedRecipes.length < num) {
      let recipe = randomRecipe(recipes);

      // Ensure recipe isn't already selected and add it to the list
      if (!selectedRecipes.includes(recipe)) {
        selectedRecipes.push(recipe);

        // Update ingredient counts for each ingredient in the recipe
        recipe.ingredients.forEach((ingredient) => {
          newIngredientCounts[ingredient] =
            (newIngredientCounts[ingredient] || 0) + 1;
        });
      }
    }
    // Update state with the selected recipes and ingredient counts
    setWeeklyRecipes(selectedRecipes);
    setIngredientCounts(newIngredientCounts);
  };

  type IngredientType = {
    [ingredient: string]: number;
  };

  // Initialize empty ingredient count objects for different categories
  let produce: IngredientType = {};
  let fridge: IngredientType = {};
  let pantry: IngredientType = {};
  let canned: IngredientType = {};
  let breads: IngredientType = {};
  let frozen: IngredientType = {};

  // Loop through ingredient counts and sort them based on aisle category using aisles object
  Object.entries(ingredientCounts).map(([ingredient, count]) => {
    if (aisles.freshProduce.includes(ingredient)) {
      produce[ingredient] = count;
    } else if (aisles.fridgeyStuff.includes(ingredient)) {
      fridge[ingredient] = count;
    } else if (aisles.pantry.includes(ingredient)) {
      pantry[ingredient] = count;
    } else if (aisles.canned.includes(ingredient)) {
      canned[ingredient] = count;
    } else if (aisles.breads.includes(ingredient)) {
      breads[ingredient] = count;
    } else if (aisles.frozen.includes(ingredient)) {
      frozen[ingredient] = count;
    } else {
      // Warn if any ingredients were not added to aisle catagory
      console.warn(
        `Ingredient "${ingredient}" not assigned to an aisle category`
      );
    }
  });

  console.log(produce);

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
        <RecipeAisle title="Fresh Produce" items={produce} />
        <RecipeAisle title="Pantry" items={pantry} />
        <RecipeAisle title="Fridgey stuff" items={fridge} />
        <RecipeAisle title="Canned" items={canned} />
        <RecipeAisle title="breads" items={breads} />
        <RecipeAisle title="Frozen" items={frozen} />
      </ul>
    </main>
  );
}
