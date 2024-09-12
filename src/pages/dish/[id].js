import Link from 'next/link';

// component
export default function Dish(props) {
    console.log(props)
    return (
        <div className="bg dish-container">
            <div className="dish-card">
                <Link href="/" className="home-link">X</Link>
                <div className="dish-name dish-name-page">
                    {props.name}
                </div>
                <div className="details details-page">
                    {props.ingredients.map(ingr => (
                        <div>{ingr}</div>
                    ))}
                </div>
                <div className="instruc">
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
    console.log("props", props)
    console.log("data", data.message)

    return {
        props: {
            name: props.params.id,
            ingredients: data.message.recipes.find((recipe) => recipe.recipe_name === props.params.id).ingredients,
            instructions: data.message.recipes.find((recipe) => recipe.recipe_name === props.params.id).cooking_instructions
        }
    }
}