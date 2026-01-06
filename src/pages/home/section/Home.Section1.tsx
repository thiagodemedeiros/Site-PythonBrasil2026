import "../styles/Home.Section1.css"
import hero from '/hero.png'
import mini_logo from '/mini_logo_pybr_carrossel.png'

export default function Home_Section1() {
    return(<section className="Home_Section1">
        <img src={hero} alt="" />
        <div className="Home_Section1_carrossel">
            {/* TODO
                implementar o carrossel */}
            <p>pela comunidade</p>
            <img src={mini_logo} alt="" />
            <p>para comunidade</p>
        </div>
    </section>)
}