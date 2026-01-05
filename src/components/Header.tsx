import "./styles/Header.css"

export default function Header() {
    return (<header className="Header">
        <div className="Header_menu">
            <li>
                <ul>MENU</ul>
                <ul>O evento</ul>
                <ul>Keynotes</ul>
                <ul>Programação</ul>
            </li>
        </div>
        <div className="Header_logo">
            <img src="" alt="LOGO" />
        </div>
        <div className="Header_linguagem">
            <li>
                <ul>BR</ul>
                <ul>EN</ul>
                <ul>ES</ul>
            </li>
        </div>
        <button>Comprar Ingressos!</button>
    </header>)
}