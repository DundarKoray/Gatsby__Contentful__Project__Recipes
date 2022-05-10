import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import slugify from "slugify"
//getImage is for to aviod image error if there is not one
const RecipesList = ({ recipes = [] }) => {
  return (
    <div className="recipes-list">
      {recipes.map(recipe => {
        // const { id, title, image, prepTime, cookTime } = recipe
        // return <p>{title}</p>
        const pathToImage = getImage(recipe.image.gatsbyImageData)
        const slug = slugify(recipe.title, { lower: true })
        return (
          <Link key={recipe.id} to={`/${slug}`} className="recipe">
            <GatsbyImage
              image={pathToImage}
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
