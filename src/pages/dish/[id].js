import Link from 'next/link';

// component
export default function Dish(props) {
    return (
        <div className="flex items-center justify-center bg h-screen">
            <div className="relative flex flex-col items-center bg-[#fffaf6] rounded-lg w-3/4 p-10 shadow-md border-dotted border-2 border-[#3b2f3b]">
                <Link href="/" className="absolute top-2 right-3 bg-[#fffaf6] text-[#ee653d] text-xl font-bold py-2 px-2 rounded-full">X</Link>
                <div className="dish-name mb-4 text-7xl tracking-wider text-[#ee653d] text-shadow shadow-gray-300">
                    {props.name}
                </div>
                <div className="details items-center text-center mb-6">
                    {props.ingredients.map(ingr => (<div>{ingr}</div>))}
                </div>
                <div className="instruc py-2 px-4 w-1/2 border-double border-4 border-[#f3aa6e] rounded-2xl text-justify">
                    {props.instructions}
                </div>
            </div>
        </div>
    )
}

export async function getStaticPaths() {
    const res = await fetch('http://localhost:3000/api/recipe')
    const data = await res.json()
    return {
        paths: data.message.recipes.map((recipe) => ({
            params: { id: recipe.recipe_name }
        })),
        fallback: false
    }
}

export async function getStaticProps(props) {
    const res = await fetch('http://localhost:3000/api/recipe')
    const data = await res.json()
    const recipe = data.message.recipes.find((recipe) => recipe.recipe_name === props.params.id)

    return {
        props: {
            name: props.params.id,
            ingredients: recipe.ingredients,
            instructions: recipe.cooking_instructions
        }
    }
}
