import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Home() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch('/api/recipe')
      .then(response => response.json())
      .then(data => setRecipes(data.message.recipes));
  }, []);

  return (
    <div>
      <h1 className="text-4xl font-bold">Welcome to the Recipe App</h1>
      <div>
        {
          recipes.map((recipe, index) => (
            <div key={index}>
              <Link href={`/dish/${recipe.recipe_name}`}>{recipe.recipe_name}</Link>
            </div>
          )) 
        }
      </div>
    </div>
  );
}
