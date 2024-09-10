import Link from 'next/link';

// component
export default function Dish(props) {
    console.log(props)
    return ( 
        <div>
            <div>Dish {props.name}</div>
            <div>Ingredients: {props.ingredients.join(", ")}</div>
            <div>Instructions: {props.instructions}</div>
            <Link href="/">Home</Link>
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