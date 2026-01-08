import "./styles/Footer.css"
import logo from "/img/components/footer/logo.png"

export default function Footer() {
    return (<footer className="Footer">
            <div className="Footer_barra_verde"></div>
        <div className="Footer_logo">
            <img src={logo} alt="LOGO" />
        </div>
        <div className="Footer_links">
            <div className="Footer_links_site">
                <h4>Site</h4>
                <li>
                    <ul>Início</ul>
                    <ul>O evento</ul>
                    <ul>Keynotes</ul>
                    <ul>Programação</ul>
                    <ul>Guia da cidade</ul>
                    <ul>Patrocinadores</ul>
                    <ul>FAQ</ul>
                    <ul>Contato</ul>
                    <ul>Inscreva-se</ul>
                </li>
            </div>
            <div className="Footer_links_nossas_redes">
                <h4>Nossas redes</h4>
                <li>
                    <ul><img src="" alt="" />Instagram</ul>
                    <ul><img src="" alt="" />Linkedin</ul>
                    <ul><img src="" alt="" />Facebook</ul>
                    <ul><img src="" alt="" />X</ul>
                    <ul><img src="" alt="" />Bluesky</ul>
                    <ul><img src="" alt="" />Youtube</ul>
                    <ul><img src="" alt="" />E-mail</ul>
                    <ul><img src="" alt="" />Flickr</ul>
                    <ul><img src="" alt="" />Telegram</ul>
                </li>
            </div>
            <div className="Footer_links_da_apyb">
                <h4>Links da APyB</h4>
                <li>
                    <ul>APyB</ul>
                    <ul>Código de conduta</ul>
                    <ul>Formulário para relatos do Código de conduta</ul>
                    <ul>Dormeles Tremea / Jean Ferri</ul>
                </li>
            </div>
            <div className="Footer_links_botoes_politicas">
                <div className="Footer_links_botoes_politicas_buttons">
                    <button>Comprar Ingressos!</button>
                    <button>Plano de Patrocínio</button>
                </div>
                <h4>Politicas de privacidade</h4>
            </div>
        </div>
    </footer>)
}