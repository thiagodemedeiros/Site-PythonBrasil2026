import "./styles/Header.css"
import "./styles/Menu.css"
import { useState } from 'react';
import { Link } from "react-router-dom"
import icone_acima_do_menu from "/img/components/header/icone_acima_do_menu.png"
import logo from "/img/components/header/logo.svg"
import logo_menu from "/img/components/menu/Logo.svg"
import X_menu from "/img/components/menu/X.svg"
import surf_menu from "/img/components/menu/surf.svg"

export default function Header() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (<header className="Header">
        <div className="Header_itens">
            <div className="Header_menu_esquerdo">
                <li>
                    <ul>
                        <div>
                            <img src={icone_acima_do_menu} alt="" onClick={() => setIsModalOpen(true)}/>
                            <h4 onClick={() => setIsModalOpen(true)}>MENU</h4>


                            <div className={`Menu ${isModalOpen ? "aberto" : ""}`}>
                                <div className="Menu_itens">
                                    <div className="Menu_itens_botoes">
                                        <div className="Menu_itens_botoes_linha1">
                                            <img src={logo_menu} alt="" />
                                            <div className="Menu_itens_botoes_linha1_fechar">
                                                <img src={X_menu} alt="" onClick={() => setIsModalOpen(false)}/>
                                                <p>Fechar</p>
                                            </div>
                                        </div>
                                        <div className="Menu_itens_botoes_linha2">
                                            <Link to='/'><a href="#HOME" onClick={() => setIsModalOpen(false)}>INÍCIO</a></Link>
                                            <a href="#O_EVENTO" onClick={() => setIsModalOpen(false)}>O EVENTO</a>
                                            <a href="#KEYNOTES" onClick={() => setIsModalOpen(false)}>KEYNOTES</a>
                                            <Link to="/programacao" onClick={() => setIsModalOpen(false)}>PROGRAMAÇÃO</Link>
                                            <a href="#GUIA_DA_CIDADE" onClick={() => setIsModalOpen(false)}>GUIA DA CIDADE</a>
                                            <a href="#PATROCINADORES" onClick={() => setIsModalOpen(false)}>PATROCINADORES</a>
                                            <Link to="/perguntas_frequentes" onClick={() => setIsModalOpen(false)}>FAQ</Link>
                                            <a href="#CONTATO_footer" onClick={() => setIsModalOpen(false)}>CONTATO</a>
                                        </div>
                                        <div className="Menu_itens_botoes_linha3">
                                            <a href="">
                                                <button>Comprar Ingressos!</button>
                                            </a>
                                            <a href="">
                                                <button>Plano de Patrocínio</button>
                                            </a>
                                        </div>
                                        <img src={surf_menu} alt="" className="Menu_itens_surfista_menu_mobile"/>
                                    </div>
                                    <img src={surf_menu} alt="" className="Menu_itens_surfista menu_desktop"/>
                                </div>
                            </div>


                        </div>
                    </ul>
                    <ul className="Header_menu_desktop"><a href="#O_EVENTO">O evento</a></ul>
                    <ul className="Header_menu_desktop"><a href="#KEYNOTES">Keynotes</a></ul>
                    <ul className="Header_menu_desktop">Programação</ul>
                </li>
            </div>
            <div className="Header_logo Header_menu_desktop_logo">
                <Link to='/'><img src={logo} alt="LOGO" /></Link>
            </div>
            <div className="Header_menu_direito">
                <div className="Header_linguagem">
                    <li>
                        <ul className="Header_menu_desktop">BR</ul>
                        <ul className="Header_menu_desktop">EN</ul>
                        <ul className="Header_menu_desktop">ES</ul>
                    </li>
                </div>
                <button>Comprar Ingressos!</button>
            </div>
        </div>
        <div className="Header_logo Header_menu_mobile">
            <img src={logo} alt="LOGO" />
        </div>
    </header>)
}