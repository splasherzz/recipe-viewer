import fs from 'node:fs';

export default async function handler(req, res) {
    fs.readFile('pages/api/recipes.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        const recipes = JSON.parse(data);
        res.status(200).json({ message: recipes });
    })
}