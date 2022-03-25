import React from "react"
import { Link } from "gatsby"
import Navbar from "../components/Navbar"

const index = () => {
  return (
    <div>
      <Navbar />
      <h1>Home Page</h1>
      <div>
        <Link to="about">About</Link>
      </div>
      <div>
        <Link to="company/history">History</Link>
      </div>
    </div>
  )
}

export default index
