import { ActiveLink } from "./ActiveLink";
import styles from './Navbar.module.css';   


const menuItems = [
  {
      text: 'Home',
      href: '/'
  },
  {
      text: 'About',
      href: '/about'
  },
  {
      text: 'Contact',
      href: '/contact'
  },
  {
      text: 'Pricing',
      href: '/pricing'
  }
];

export const Navbar = () => {

  const menuIBar=menuItems.map(({text, href})=>(
      <ActiveLink 
              key={href} 
              text={text}  
              href={href}/>  
  ))

  return (
    <nav className={styles['menu-container']}>
     {menuIBar}
  </nav>
  )
}
