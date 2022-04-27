import React from "react"
import Recipes from "./Recipes"
import TagsList from "./TagsList"
import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
  {
    allContentfulRecipe(sort: { fields: title, order: ASC }) {
      edges {
        node {
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
  }
`

const AllRecipes = () => {
  const data = useStaticQuery(query)
  console.log(data)
  return (
    <div>
      <h4>AllRecipes</h4>
      <Recipes />
      <TagsList />
    </div>
  )
}

export default AllRecipes
