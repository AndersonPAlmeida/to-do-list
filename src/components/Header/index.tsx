import logo from '../../assets/rocket.svg';
import style from './Header.module.css';

export function Header() {
   return (
      <header className={style.header}>
         <img src={logo} alt="Logo da página" />

         <span className={style.titleBlue}>
            to
         </span>
         <span className={style.titlePurple}>
            do
         </span>
      </header>
   );
}