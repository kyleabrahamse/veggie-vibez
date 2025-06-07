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

  function randomRecipe(arr: RecipeObject[]): RecipeObject {
    let randomIndex: number = Math.floor(Math.random() * recipes.length);
    return arr[randomIndex];
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setNum(event.target.valueAsNumber);
  }

  const generateRandomRecipe = () => {
    let selectedRecipes: RecipeObject[] = [];
    let newIngredientCounts: { [key: string]: number } = {};

    while (selectedRecipes.length < num) {
      let recipe = randomRecipe(recipes);

      if (!selectedRecipes.includes(recipe)) {
        selectedRecipes.push(recipe);

        recipe.ingredients.forEach((ingredient: any) => {
          newIngredientCounts[ingredient] =
            (newIngredientCounts[ingredient] || 0) + 1;
        });
      }
    }

    setWeeklyRecipes(selectedRecipes);
    setIngredientCounts(newIngredientCounts);
  };

  type IngredientType = {
    [ingredient: string]: number;
  };

  let produce: IngredientType = {};
  let fridge: IngredientType = {};
  let pantry: IngredientType = {};
  let canned: IngredientType = {};
  let breads: IngredientType = {};
  let frozen: IngredientType = {};

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
      console.warn(
        `Ingredient "${ingredient}" not assigned to an aisle category`
      );
    }
  });

  // Function to generate the shopping list and recipe names as text
  const generateCopyText = () => {
    const recipeNames = weeklyRecipes.map((recipe) => recipe.name).join("\n");

    const formatAisle = (aisleName: string, items: IngredientType) => {
      const itemList = Object.entries(items)
        .map(([ingredient, count]) => `${ingredient} (${count})`)
        .join("\n");
      return `${aisleName}:\n${itemList}`;
    };

    const produceList = formatAisle("Fresh Produce", produce);
    const fridgeList = formatAisle("Fridgey stuff", fridge);
    const pantryList = formatAisle("Pantry", pantry);
    const cannedList = formatAisle("Canned", canned);
    const breadsList = formatAisle("Breads", breads);
    const frozenList = formatAisle("Frozen", frozen);

    return `Recipes:\n${recipeNames}\n\nShopping List:\n\n${produceList}\n\n${fridgeList}\n\n${pantryList}\n\n${cannedList}\n\n${breadsList}\n\n${frozenList}`;
  };

  // Function to copy the generated text to the clipboard
  const handleCopy = () => {
    const textToCopy = generateCopyText();
    navigator.clipboard.writeText(textToCopy).then(
      () => {
        alert("Shopping list and recipe names copied to clipboard!");
      },
      (err) => {
        console.error("Failed to copy: ", err);
      }
    );
  };

  return (
    <main className="bg-[#73BA9B] pt-10 pb-64">
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
            Generate Shopping List
          </button>
          {/* <button>
            Add Bhuda bowl
          </button> */}
        </div>

        <h2>Shopping List</h2>
        <ul>
          <RecipeAisle title="Fresh Produce" items={produce} />
          <RecipeAisle title="Fridgey stuff" items={fridge} />
          <RecipeAisle title="Pantry" items={pantry} />
          <RecipeAisle title="Canned" items={canned} />
          <RecipeAisle title="Breads" items={breads} />
          <RecipeAisle title="Frozen" items={frozen} />
        </ul>

        <button
          onClick={handleCopy}
          className="mt-5 border bg-[#4fd5fe] rounded-lg px-5 py-2"
        >
          Copy Shopping List & Recipes
        </button>
      </div>
    </main>
  );
}
