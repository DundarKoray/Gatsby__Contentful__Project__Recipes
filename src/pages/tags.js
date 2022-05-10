import React from "react"
import Layout from "../components/Layout"
import { Link, graphql } from "gatsby"
import setupTags from "../utils/setupTags"

const Tags = ({ data }) => {
  const newTags = setupTags(data.allContentfulRecipe.nodes)
  // console.log(newTags)
  return (
    <Layout>
      <h1>Tags</h1>
      <main className="page">
        <section className="tags-page">
          {newTags.map((tag, index) => {
            // console.log(tag)
            const [text, value] = tag
            return (
              <Link className="tag" to={`/${text}`} key={index}>
                {/* <h5>{tag[0]}</h5> */}
                <h5>{text}</h5>
                {/* <p>{tag[1]} recipe</p> */}
                <p>{value} recipe</p>
              </Link>
            )
          })}
        </section>
      </main>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulRecipe {
      nodes {
        content {
          tags
        }
      }
    }
  }
`

export default Tags
