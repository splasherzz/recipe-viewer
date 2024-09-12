import Link from 'next/link';

export default function Menu({ recipes }) {
  return (
    <div className="menu-container">
      <div className="menu-card">
        <div className="dish-name dish-name-home">
          Menu
        </div>
        <hr />
        <div className="dish-list">
          {
            recipes.map((recipe, index) => (
              <div key={index} className="details dish-entry">
                <Link href={`/dish/${recipe.recipe_name}`} className="text-lg">{recipe.recipe_name}</Link>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}
