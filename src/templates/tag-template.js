import React from "react"
import { graphql } from "gatsby"
import RecipesList from "../components/RecipesList"
import Layout from "../components/Layout"

const TagTemplate = ({ data, pageContext }) => {
  // console.log(data)
  const recipes = data.allContentfulRecipe.nodes
  // console.log(recipes)

  return (
    <Layout>
      <main className="page">
        <div className="tag-recipes">
          <h2>{pageContext.tag}</h2>
          <RecipesList recipes={recipes} />
        </div>
      </main>
    </Layout>
  )
}

export const query = graphql`
  query GetRecipeByTag($tag: String) {
    allContentfulRecipe(
      sort: { fields: title, order: ASC }
      filter: { content: { tags: { eq: $tag } } }
    ) {
      nodes {
        id
        cookTime
        prepTime
        title
        image {
          gatsbyImageData(placeholder: TRACED_SVG, layout: CONSTRAINED)
        }
      }
    }
  }
`

export default TagTemplate
