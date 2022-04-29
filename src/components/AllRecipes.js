import React from "react"
import RecipesList from "./RecipesList"
import TagsList from "./TagsList"
import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
  {
    allContentfulRecipe(sort: { fields: title, order: ASC }) {
      nodes {
        id
        title
        cookTime
        prepTime
        content {
          tags
        }
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }
`

const AllRecipes = () => {
  const data = useStaticQuery(query)
  // console.log(data)
  const recipes = data.allContentfulRecipe.nodes
  // console.log(recipes)

  // this is the same
  // const {allContentfulRecipe:{nodes: recipes}} = useStaticQuery(query)
  return (
    <section className="recipes-container">
      <h4>AllRecipes</h4>
      <RecipesList recipes={recipes} />
      <TagsList recipes={recipes} />
    </section>
  )
}

export default AllRecipes
