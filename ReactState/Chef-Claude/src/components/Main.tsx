import { useState } from "react";
import type { FormEvent } from "react";
import { MdAdd } from "react-icons/md";

const Main = () => {
    const [ingredients, setIngredients] = useState<string[]>([]);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const newIngredient = formData.get("ingredient") as string;
        setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
        e.currentTarget.reset();
    };
    const removeIngredient = (index: number): void => {
        setIngredients((prevIngredients) =>
            prevIngredients.filter((_, i) => i !== index)
        );
    };
    return (
        <main className="flex flex-col items-center justify-center mt-20 px-4">
        <form
            className="flex items-center justify-center gap-3 w-full max-w-xl"
            onSubmit={handleSubmit}
        >
            <input
            type="text"
            name="ingredient"
            aria-label="Add Ingredient"
            placeholder="e.g. oregano"
            className="flex-1 min-w-[150px] max-w-md bg-white px-4 py-2 border border-gray-300 rounded-md shadow-md focus:outline-none focus:ring-1 focus:ring-orange-500 text-gray-800 placeholder-gray-400"
            />
            <button
            type="submit"
            className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition"
            >
            <MdAdd className="text-lg" />
            Add Ingredient
            </button>
        </form>
        <div className="w-full max-w-xl mt-5">
            <ul className="bg-white rounded-md shadow-sm divide-y divide-gray-100 overflow-hidden">
            {ingredients.map((ingredient, index) => (
                <li
                key={index}
                className="px-4 py-3 flex items-center justify-between"
                >
                <span className="text-gray-800">{ingredient}</span>
                    <button
                        onClick={() => removeIngredient(index)}
                        className="text-sm text-gray-400 hover:text-gray-600">
                    Remove
                </button>
                </li>
            ))}
            </ul>
        </div>
        </main>
    );
};

export default Main;

