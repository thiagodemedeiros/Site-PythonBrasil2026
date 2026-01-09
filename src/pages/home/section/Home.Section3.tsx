import "../styles/Home.Section3.css"
import foto_key_1 from "/img/page/home/section3/foto_key_1.png"
import logo_github from "/img/page/home/section3/logo_github.png"
import logo_globinho from "/img/page/home/section3/logo_globinho.png"
import logo_ig from "/img/page/home/section3/logo_ig.png"
import logo_linkdin from "/img/page/home/section3/logo_linkdin.png"
import key_dot_1 from "/img/page/home/section3/key_dot_1.png"
import key_dot_2 from "/img/page/home/section3/key_dot_2.png"
import key_dot_3 from "/img/page/home/section3/key_dot_3.png"
import key_dot_4 from "/img/page/home/section3/key_dot_4.png"
import Carrossel from "../../../components/Carrossel"

export default function Home_Section3() {
    return(<>
    <section className="Home_Section3" id="KEYNOTES">
        <div className="Home_Section3_carrossel_keynotes">
            <h4>Keynotes</h4>
            <div className="Home_Sectine3_carrossel_card_keynote">
                <div className="Home_Section3_carrossel_card_keynote_parte_esquerda">
                    <img src={foto_key_1} alt="foto do keynote" />
                    <li>
                        <a href=""><ul><img src={logo_linkdin} alt="" /></ul></a>
                        <a href=""><ul><img src={logo_github} alt="" /></ul></a>
                        <a href=""><ul><img src={logo_ig} alt="" /></ul></a>
                        <a href=""><ul><img src={logo_globinho} alt="" /></ul></a>
                    </li>
                </div>
                <div className="Home_Section3_carrossel_card_keynote_parte_direita">
                    <h4>Fernanda Wanderley</h4>
                    <p>Fernanda é formada em Ciência da Computação e Mestre em Inteligência Artificial pela UFRJ, Doutora em Inteligência Computacional pela UFMG e Google Developer Expert em Machine Learning.</p>
                    <p>É co-fundadora da Mulheres em IA, embaixadora do WiDS Rio de Janeiro e colaboradora de longa data da PrograMaria. Acredita que é na diversidade que construímos tecnologias mais justas e com maior impacto social</p>
                </div>
            </div>
            <div className="Home_Section3_carrossel_foto_selecao_keynote">
                <img src={key_dot_1} alt="" />
                <img src={key_dot_2} alt="" />
                <img src={key_dot_3} alt="" />
                <img src={key_dot_4} alt="" />
            </div>
        </div>
    </section>
    <Carrossel/>
    </>)
}