import Link from 'next/link';
import { useEffect, useState } from 'react';
import Menu from '../components/Menu';

export default function Home() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch('/api/recipe')
      .then(response => response.json())
      .then(data => setRecipes(data.message.recipes));
  }, []);

  return (
    <Menu recipes={recipes} />
  );
}
