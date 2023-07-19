import Link from 'next/link'
import styles from './Navigation.module.css'

const links = [{
  text: 'Home',
  route: '/'
}, {
  text: 'Persons',
  route: '/persons'
}, {
  text: 'Posts',
  route: '/posts'
}]

export default function Navigation () {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.navigation}>
          {
            links.map(({ text, route }) => (
              <li key={route}>
                <Link href={route}>
                  {text}
                </Link>
              </li>
            ))
          }
        </ul>
      </nav>
    </header>
  )
}