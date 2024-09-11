import Link from 'next/link';
import { useEffect, useState } from 'react';
import Menu from '../components/Menu';

export default function Home() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/api/recipe');
      const data = await response.json();
      setRecipes(data.message.recipes);
    }
    fetchData();
  }, []);

  return (
    <Menu recipes={recipes} />
  );
}
