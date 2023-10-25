(function(){
    'use strict'
    const recipesDropdown = $("#recipes")
    const name = $("#name")
    const description = $("#description")
    const ingredients = $("#ingredients")
    const picture = $("img")
    recipesDropdown.on("change",fetchRecipe)
    populateDropdown()

    async function getNames() {
        try {
            let names = await fetch("hw79.json");
            if (!names.ok) {
                throw new Error('Not OK Netword Response');
            }
            let array = await names.json();
            return array;
        } 
        catch (error) {
            console.error('An error occurred ', error);
        }
    }
        
    async function populateDropdown(){
        const theRecipes = await getNames()
        console.log(theRecipes)
        theRecipes.forEach(recipe => recipesDropdown.append('<option value="' + recipe.id + '">' + recipe.name + '</option>'))
        picture.hide()
    }

    async function fetchRecipe(){
        const theRecipes = await getNames()
        let itemId = parseInt(recipesDropdown.val())
        let item = theRecipes[itemId]
        name.text(item.name)
        description.text(item.description)
        ingredients.text(item.ingredients)
        picture.attr('src', item.picture);
        picture.show()
    }
}())