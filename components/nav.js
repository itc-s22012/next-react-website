import Link from 'next/link'
import { useState } from 'react'
import styles from 'styles/nav.module.css'
export default function Nav() {
  const [navIsOpen, setNavIsOpen] = useState(false)

  const toggleNav = () => {
    setNavIsOpen((prev) => !prev)
  }
  const closeNav = () => {
    setNavIsOpen(false)
  }
  return (
    <nav className={navIsOpen ? styles.open : styles.close}>
    <button className={styles.btn} onClick={toggleNav}>MENU</button>
      <ul className={styles.list}>
          <Link legacyBehavior href="/"> 
            <a onClick={closeNav}>Home</a>
          </Link>
          <Link legacyBehavior href="/about"> 
            <a onClick={closeNav}>About</a>
          </Link>
          <Link legacyBehavior href="/blog"> 
            <a onClick={closeNav}>Blog</a>
          </Link>
      </ul>
    </nav>
  )
}
