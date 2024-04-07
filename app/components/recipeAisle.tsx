// interface RecipeProps {
//   title: string,
//   items: any
// }

export default function RecipeAisle({ title, items }: any) {
  return (
    <div>
      <p>{title}</p>
      <ul>
        {items.map((a: any, i: number) => {
          return <li key={i}>{a}</li>;
        })}
      </ul>
    </div>
  );
}
