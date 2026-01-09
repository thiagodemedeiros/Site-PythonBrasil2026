import "../styles/Home.Section4.css"
import cobra_1 from "/img/page/home/section4/secao4_cobra_1.png"
import cobra_2 from "/img/page/home/section4/secao4_cobra_2.png"

export default function Home_Section4() {
    return(<section className="Home_Section4">
            <div className="Home_Section4_itens_texto">
                <h4>Submissão de Atividades</h4>
                <div className="Home_Section4_itens_texto_buttons">
                    <a href=""><button className="Home_Section4_buttons_1">Enviar Atividade</button></a>
                    <a href=""><button className="Home_Section4_buttons_2">Regulamento</button></a>
                </div>
                <a href=""><p>Acompanhe as novidades nas nossas redes sociais</p></a>
            </div>
            <div className="Home_Section4_cobras">
                <img src={cobra_1} alt="" />
                <img src={cobra_2} alt="" />
            </div>
    </section>)
}