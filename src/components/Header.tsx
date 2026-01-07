import "./styles/Header.css"
import icone_acima_do_menu from "/img/components/header/icone_acima_do_menu.png"
import logo from "/img/components/header/logo.png"

export default function Header() {
    return (<header className="Header">
        <div className="Header_itens">
            <div className="Header_menu_esquerdo">
                <li>
                    <ul>
                        <div>
                            <img src={icone_acima_do_menu} alt="" />
                            <h4>MENU</h4>
                        </div>
                    </ul>
                    <ul>O evento</ul>
                    <ul>Keynotes</ul>
                    <ul>Programação</ul>
                </li>
            </div>
            <div className="Header_logo">
                <img src={logo} alt="LOGO" />
            </div>
            <div className="Header_menu_direito">
                <div className="Header_linguagem">
                    <li>
                        <ul>BR</ul>
                        <ul>EN</ul>
                        <ul>ES</ul>
                    </li>
                </div>
                <button>Comprar Ingressos!</button>
            </div>
        </div>
    </header>)
}