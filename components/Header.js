import Link from "next/link"
import Classes from "./Header.module.css"
// import classes from '/Footer.module.css'

export function Header() {
  return (
    <header className={Classes.header}>
      <Link href="/">
        <a className={Classes.ancher}>Index</a>
      </Link> 
      <Link href="/about">
        <a className={Classes.ancher}>About</a>
      </Link> 

    </header>
  )
}