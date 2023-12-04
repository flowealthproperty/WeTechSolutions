import React from 'react'
import {FaSearch} from "react-icons/fa"
import { Container } from '../Containers'
const Navbar = () => {
  return (
    <main>
      <Container className="relative z-50 flex justify-between py-3 border-b border-gray-400">
      <h2>WeTech Solutions</h2>
      <div className="flex">
      <p>+17807004994</p>
      <div className="flex">
      <input type="search" />
      <FaSearch/>
      </div>
      </div>
      </Container>
    </main>
  )
}

export default Navbar
