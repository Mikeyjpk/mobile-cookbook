
import RecipeForm from "./components/recipe-form";

interface RecipeIdPageProps {
    params: {
        recipeId: string;
    };
};

const RecipeIdPage = async ({ params } : RecipeIdPageProps) => {
    return (
        <div>
            <RecipeForm />
        </div>
    )
};

export default RecipeIdPage;



    {/* Keep this for HomePage
        // get userId
        // get recipes

        // if there are no recipes the user created
        // return <EmptyRecipeState />

        // return <UserRecipes />
     */}