import "../styles/Home.Section6.css"
import hotel from '/img/page/home/section6/hotel.png'

export default function Home_Section6() {
    return(<>
    <section className="Home_Section6">
            <h4>Localização</h4>
            <div className="Home_Section6_localizacao_cards">
                <div className="Home_Section6_localizacao_cards_Palestras">
                    <h6>Palestras</h6>
                    <h5>Oceania Park Hotel Spa & Convention Center</h5>
                    <p>14 a 19 de Outubro</p>
                    <img src={hotel} alt="" />
                    <p>Dias principais do evento, espaços para job fair, network, palestras de diversos temas acontecendo simultaneamente.</p>
                    <div>
                        <a href=""><button>Planta do Evento</button></a>
                        <a href=""><button>Ver no mapa</button></a>
                    </div>
                </div>
                <div className="Home_Section6_localizacao_cards_Tutoriais">
                    <h6>Tutoriais</h6>
                    <p>A definir</p>
                </div>
                <div className="Home_Section6_localizacao_cards_Sprints">
                    <h6>Sprints</h6>
                    <p>A definir</p>
                </div>
            </div>
            
    </section>
    <div className="Home_Section6_barra_verde"></div>
    </>)
}