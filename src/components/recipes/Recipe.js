import React from 'react';
import style from './RecipeModules.css'

const Recipe = ({title, calories, image, ingredients}) => {
    
    return (
        <div className={style.recipe}>
            <div className='recipeBlock'>
                <h1 >{title}</h1>
                <img className={style.image} src={image} alt="" />
                <ol>
                    {ingredients.map(ingredient => (
                        <li>{ingredient.text}</li>
                    ))}
                </ol>
                <p>Calories: {calories.toFixed()}</p>
            </div>
        </div>
    )
}

export default Recipe;