
type IngredientType = {
  [ingredient: string]: number;
};

type ComponentType = {
  title: string;
  items: IngredientType
}

export default function RecipeAisle({ title, items }:  ComponentType) {
  return (
    <div>
      <p className="text-2xl">{title}</p>
      <ul>
        {Object.entries(items).map(([ingredient, count]) => {
          return (
            <li key={ingredient}>
              {ingredient} x {count}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
