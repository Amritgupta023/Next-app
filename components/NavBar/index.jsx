import React from 'react'
import Link from 'next/link';
function NavBar() {
  return (
    <div>
      <nav>
        <span>Logo</span>
        <span>
          <Link href="/"><a>Home</a></Link>
          <Link href="/about"><a>About Us</a></Link>
          <Link href="/contact-us"><a>Contact Us</a></Link>
        </span>
      </nav>
    </div>
  )
}

export default NavBar
