import { Recipe } from "../recipes/recipe.model";
import { Ingredient } from "../recipes/ingredients.model";

export class RecipeService{
    recipeList: Recipe[] = [
        new Recipe(1,'Test Recipe', 'Test', 'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/frying-pan-pizza-easy-recipe-collection.jpg', [new Ingredient('First Ingredient',100)]),
        new Recipe(2,'Test Recipe 2', 'Test 2', 'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/frying-pan-pizza-easy-recipe-collection.jpg', [new Ingredient('First Ingredient',100),new Ingredient('Second Ingredient',200)])
    ]

    public addRecipe(recipe: Recipe){
        this.recipeList.push(recipe);
    }

    
    public editRecipe(recipe: Recipe){
        this.recipeList[this.recipeList.findIndex((rec)=>{return rec.id===recipe.id})] = recipe;
    }

    
    public deleteRecipe(recipeId: number){
        this.recipeList.splice(this.recipeList.findIndex((rec)=>{
            return rec.id===recipeId;
        }),1)
    }
}