import React from "react"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const RecipesList = ({ recipes = [] }) => {
  return (
    <div className="recipes-list">
      {recipes.map(recipe => {
        // const { id, title, image, prepTime, cookTime } = recipe
        // return <p>{title}</p>
        return (
          <Link key={recipe.id} to={`/${recipe.title}`} className="recipe">
            <GatsbyImage
              image={recipe.image}
              alt={recipe.title}
              className="recipe-img"
            />
            <h5>{recipe.title}</h5>
            <p>
              Prep: {recipe.prepTime} min | Cook: {recipe.cookTime} min
            </p>
          </Link>
        )
      })}
    </div>
  )
}

export default RecipesList
