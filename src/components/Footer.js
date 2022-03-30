import React from "react"
import Layout from "./Layout"

const Footer = () => {
  return (
    <Layout>
      <footer class="page-footer">
        <p>
          &copy; {new Date().getFullYear()} <span>What we eat ?</span>. Built
          with <a href="https://www.gatsbyjs.com/">Gatsby</a>
        </p>
      </footer>
    </Layout>
  )
}

export default Footer
