export class RecipeListItem {
    name :string;
    id: string;
}
export class Recipe {
    name :string;
    recipeId: number;
    ingredients: Ingredient[];
    directions: Direction[];
    category: string;
}
export class Ingredient {
    unitType :string;
    quantity: number;
    name :string;

}
export class Direction {
    stepNumber :number;
    instruction: string;
}