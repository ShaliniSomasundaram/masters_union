import React from 'react'
import style from "../style/nav.module.css"
import create from "../assets/create.png"
import signin from "../assets/signin.png"
import logo from "../assets/logo.png"

function Nav() {
  return (
    <div id={style.nav}>
      <nav>
        <article>
          <img src={logo} alt="" id={style.logo}/>
        </article>
        <section>
          <img src={signin} alt="" id={style.signin}/>
          <img src={create} alt="" id={style.create}/>
        </section>      
      </nav>
    </div>
  )
}

export default Nav