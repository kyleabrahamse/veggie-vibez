"use client";

import { useState, useEffect } from "react";
import { recipes, aisles } from "./recipes";
import RecipeAisle from "./components/recipeAisle";

type RecipeObject = {
  name: string;
  ingredients: string[];
};

export default function Home() {
   // State variables to manage recipes, ingredient counts, and selected number of meals
   const [weeklyRecipes, setWeeklyRecipes] = useState<RecipeObject[]>(() => {
    const storedRecipes = localStorage.getItem("weeklyRecipes");
    return storedRecipes ? JSON.parse(storedRecipes) : [];
  });
  const [ingredientCounts, setIngredientCounts] = useState<{
    [key: string]: number;
  }>(() => {
    const storedCounts = localStorage.getItem("ingredientCounts");
    return storedCounts ? JSON.parse(storedCounts) : {};
  });
  const [num, setNum] = useState<number>(0);

  // Save weeklyRecipes and ingredientCounts to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("weeklyRecipes", JSON.stringify(weeklyRecipes));
    localStorage.setItem("ingredientCounts", JSON.stringify(ingredientCounts));
  }, [weeklyRecipes, ingredientCounts]);

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
        recipe.ingredients.forEach((ingredient: any) => {
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
    } else if (aisles.pantry.includes(ingredient)) {
      pantry[ingredient] = count;
    } else if (aisles.fridgeyStuff.includes(ingredient)) {
      fridge[ingredient] = count;
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
    <main className="bg-[#73BA9B] pt-10 pb-20">
      <div className="md:w-5/12 w-10/12 bg-white border-2 border-grey-100 flex flex-col mx-auto p-5 rounded-lg">
        <h1 className="text-3xl mx-auto">Veggie Vibez</h1>
        <h2 className="text-xl pt-10 pb-5">Meals</h2>
        <ul>
          {weeklyRecipes?.map((recipe, i) => {
            return <li key={i}>{recipe.name}</li>;
          })}
        </ul>
        <div className="flex my-4 mx-auto gap-5">
          <input
            type="number"
            className="border border-gray-300 px-5 py-2 rounded-lg "
            min="0"
            max="7"
            placeholder="Number of recipes"
            onChange={handleChange}
            value={num}
          />
          <button
            onClick={generateRandomRecipe}
            className="border bg-[#4fd5fe] rounded-lg px-5 py-2"
          >
            Genrate Shopping List
          </button>
        </div>
        <h2>Shopping List</h2>
        <ul>
          <RecipeAisle title="Fresh Produce" items={produce} />
          <RecipeAisle title="Pantry" items={pantry} />
          <RecipeAisle title="Fridgey stuff" items={fridge} />
          <RecipeAisle title="Canned" items={canned} />
          <RecipeAisle title="breads" items={breads} />
          <RecipeAisle title="Frozen" items={frozen} />
        </ul>
      </div>
    </main>
  );
}
