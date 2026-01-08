import Carrossel from "../../../components/Carrossel"
import "../styles/Home.Section1.css"
import hero from '/hero.png'

export default function Home_Section1() {
    return(<>
    <section className="Home_Section1">
        <img src={hero} alt="" />
    </section>
    <Carrossel/>
    </>)
}