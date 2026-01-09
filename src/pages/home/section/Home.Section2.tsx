import "../styles/Home.Section2.css"
import foto from "/foto_section2.png"
import cobra_esquerda_section2 from "/cobra_esquerda_section2.png"
import cobra_direita_section2 from "/cobra_direita_section2.png"


export default function Home_Section2() {
    return(<section className="Home_Section2" id="O_EVENTO">
        <div className="Home_Section2_parte_esquerda">
            <img src={foto} alt="" />
        </div>
        <div className="Home_Section2_parte_direita">
            <div className="Home_Section2_parte_direita_texto">
                <p>A <span>Python Brasil 2026</span> é a maior conferência sobre linguagem de programação Python do Brasil e da América Latina.</p>
                <p>Serão 5 dias de imersão com atividades que vão desde contribuir para projetos de software livre, participar de treinamentos e adquirir novos conhecimentos com profissionais renomados da comunidade.</p>
                <p>A edição de 2026 está sendo organizada pela comunidade Python de <span>Florianópolis/SC</span> com o apoio da APyB (Associação Python Brasil)</p>
            </div>
            <div className="Home_Section2_parte_direita_cobrinhas">
                <img src={cobra_esquerda_section2} alt="" />
                <img src={cobra_direita_section2} alt="" />
            </div>
        </div>
    </section>)
}