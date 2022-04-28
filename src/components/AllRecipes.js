import React from "react"
import Recipes from "./Recipes"
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
    <div>
      <h4>AllRecipes</h4>
      <Recipes recipes={recipes} />
      <TagsList recipes={recipes} />
    </div>
  )
}

export default AllRecipes
