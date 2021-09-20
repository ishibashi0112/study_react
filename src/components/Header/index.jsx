import Link from "next/link"
import Classes from "src/components/Header/Header.module.css"
// import classes from '/Footer.module.css'

export const Header = () => {
  const NAV_ITEMS = [
    {href: "/", label: "Index"},
    {href: "/posts", label: "Posts"},
    {href: "/users", label: "Users"},
    {href: "/comments", label: "Commnets"},
  ]
  return (
    <header className={Classes.header}>
      {NAV_ITEMS.map((item) => {
        return (
          <Link key={item.href} href={item.href}>
            <a className={Classes.ancher}>{item.label}</a>
          </Link> 
        )
      })}
    </header>
  )
}