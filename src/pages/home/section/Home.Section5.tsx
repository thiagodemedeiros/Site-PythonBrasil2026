import "../styles/Home.Section5.css"
import mini_logo from '/mini_logo_pybr_carrossel.png'
import cidade from '/img/page/home/section5/cidade.png'

export default function Home_Section4() {
    return(<section className="Home_Section5">
            <div className="Home_Section5_itens">
                <div className="Home_Section5_itens_texto">
                    <h4>Guia da Cidade</h4>
                    <div className="Home_Section5_itens_texto_p">   
                        <p>Em outubro, em Florianópolis, você pode aproveitar as praias (ainda não tão cheias), fazer trilhas, explorar o centro histórico, visitar o Projeto Tamar, relaxar em parques, curtir a gastronomia local e aproveitar ao máximo a Python Brasil 2026 com um clima fresco.</p>
                        <p>A cidade está na primavera, com um clima que combina dias quentes e ensolarados com possibilidade de chuvas e dias nublados.</p>
                        <p>Preparamos um guia do que fazer nas proximidades do evento e também passeios pela cidade, conheça:</p>
                    </div>
                    <a href=""><button>Guia da Cidade</button></a>
                </div>
                <img src={cidade} alt="Imagem da cidade" />
            </div>
            <div className="Home_Section5_carrossel">
                {/* TODO
                    implementar o carrossel */}
                <p>pela comunidade</p>
                <img src={mini_logo} alt="" />
                <p>para comunidade</p>
            </div>
    </section>)
}