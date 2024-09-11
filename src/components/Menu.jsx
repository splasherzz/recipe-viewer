import Link from 'next/link';

export default function Menu({ recipes }) {
  return (
    <div className="flex items-center justify-center bg h-screen">
      <div className="flex flex-col items-center border-double border-4 border-[#3b2f3b] text-center bg-[#fffaf6] p-8 rounded-2xl shadow-lg">
        <div className="dish-name mb-6 text-7xl tracking-wider text-[#ee653d] text-shadow shadow-gray-300 border-double border-4 border-[#f3aa6e] pt-4 px-6">
          Menu
        </div>
        <hr className="w-full border-dotted border-2 border-[#a49d9c] mb-6" />
        <div className="columns-2 -mb-4 px-2">
          {
            recipes.map((recipe, index) => (
              <div key={index} className="details mb-3 hover:underline hover:text-[#c3563c]">
                <Link href={`/dish/${recipe.recipe_name}`} className="text-lg">{recipe.recipe_name}</Link>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}
