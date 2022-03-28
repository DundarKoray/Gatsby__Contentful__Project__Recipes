import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"

const Home = () => {
  return (
    <Layout>
      <h1>Home Page</h1>
      <div>
        <Link to="about">About</Link>
      </div>
      <div>
        <Link to="company/history">History</Link>
      </div>
    </Layout>
  )
}

export default Home
