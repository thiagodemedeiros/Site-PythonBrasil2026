import "./styles/Header.css"
import "./styles/Menu.css"
import { useState } from 'react';
import icone_acima_do_menu from "/img/components/header/icone_acima_do_menu.png"
import logo from "/img/components/header/logo.png"
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
                                            <a href="#HOME" onClick={() => setIsModalOpen(false)}>INÍCIO</a>
                                            <a href="#O_EVENTO" onClick={() => setIsModalOpen(false)}>O EVENTO</a>
                                            <a href="#KEYNOTES" onClick={() => setIsModalOpen(false)}>KEYNOTES</a>
                                            <a href="">PROGRAMAÇÃO</a>
                                            <a href="#GUIA_DA_CIDADE" onClick={() => setIsModalOpen(false)}>GUIA DA CIDADE</a>
                                            <a href="#PATROCINADORES" onClick={() => setIsModalOpen(false)}>PATROCINADORES</a>
                                            <a href="">FAQ</a>
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
                                    </div>
                                    <img src={surf_menu} alt="" className="Menu_itens_surfista"/>
                                </div>
                            </div>


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