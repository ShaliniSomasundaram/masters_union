import React from 'react'
import style from "../style/main.module.css"
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png"
import img3 from "../assets/img3.jpg"
import img4 from "../assets/img4.jpg"
import img5 from "../assets/img5.png"
import img6 from "../assets/img6.png"
import img7 from "../assets/img7.jpg"
import img8 from "../assets/img8.png"
import img9 from "../assets/img9.png"
import img10 from "../assets/img10.png"
import img11 from "../assets/img11.png"
import img12 from "../assets/img12.png"
import img13 from "../assets/img13.png"
import img14 from "../assets/img14.png"
import img15 from "../assets/img15.png"
import img16 from "../assets/img16.png"
import img17 from "../assets/img17.png"
import img18 from "../assets/img18.png"
import img19 from "../assets/img19.png"
import img20 from "../assets/img20.png"
import img21 from "../assets/img21.jpg"
import img22 from "../assets/img22.jpg"
import img23 from "../assets/img23.jpg"
import img24 from "../assets/img24.jpg"
import img25 from "../assets/img25.png"
import img26 from "../assets/img26.png"
import img27 from "../assets/img27.png"
import img28 from "../assets/img28.png"
import img29 from "../assets/img29.png"


function Main() {
  return (
    <div id={style.main}>
        <section>
            <img src={img1} alt="" />
            <img src={img2} alt="" id={style.overlay} />
            <div>
                <img src={img3} alt="" />
                <img src={img4} alt="" />
            </div>
            <section>
                <div><img src={img5} alt="" id={style.d1}/></div>
                <article><img src={img6} alt="" /></article>
                <div><img src={img7} alt="" id={style.d2}/></div>
            </section>
            <article>
                <img src={img8} alt="" />
            </article>
            <section id={style.section2}></section>
            <div id={style.div2}>
                <section>
                    <div id={style.img13}>
                        <img src={img13} alt="" />
                    </div>
                    <div id={style.img9}>
                        <img src={img9} alt="" />
                    </div>
                </section>
                <img src={img10} alt="" />
                <article>
                    <img src={img11} alt="" id={style.img11}/>
                    <img src={img12} alt="" id={style.img12}/>
                </article>
                <section id={style.section3}></section>
            </div>
            <article id={style.article2}>
                <img src={img14} alt="" />
            </article>
            <div id={style.div4}>
                <section>
                    <img src={img15} alt="" id={style.img15}/>
                    <div>
                        <img src={img16} alt="" id={style.img16}/>
                    </div>
                    <img src={img17} alt="" id={style.img17}/>
                    <img src={img18} alt="" id={style.img18}/>
                </section>
                <article>
                    <div id={style.img19}>
                        <img src={img19} alt="" />
                    </div>
                    <div id={style.img20}>
                        <img src={img20} alt="" />
                    </div>
                </article>
                <section id={style.section5}></section>
            </div>
            <article id={style.article4}>
                <div id={style.div5}>
                    <div>
                        <img src={img21} alt="" id={style.img21}/>
                    </div>
                </div>
                <section id={style.section6}>
                    <img src={img22} alt="" />
                </section>
            </article>


            <div id={style.footer}>
                <section>
                    <img src={img23} alt="" id={style.img23}/>
                    <img src={img28} alt="" id={style.img28}/>
                </section>
                <article>
                    <img src={img24} alt="" id={style.img24}/>
                    <img src={img25} alt="" id={style.img25}/>

                    <section>
                        <img src={img29} alt="" id={style.img29}/>
                    </section>
                    <div>
                        <section>
                            <img src={img26} alt="" id={style.img26}/>
                        </section>
                        <article>
                            <img src={img27} alt="" id={style.img27}/>
                        </article>
                    </div>
                </article>
            </div>
        </section>
    </div>
  )
}

export default Main