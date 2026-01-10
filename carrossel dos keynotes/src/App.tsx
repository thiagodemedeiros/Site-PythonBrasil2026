import './App.css'
import "./slide.css"
import SimpleSwiper from './SimpleSwiper'
import Slide from './slide'
import key_dot_1 from "/img/page/home/section3/key_dot_1.png"
import key_dot_2 from "/img/page/home/section3/key_dot_2.png"
import key_dot_3 from "/img/page/home/section3/key_dot_3.png"


function App() {
  return (<>
<section className="Home_Section3" id="KEYNOTES">
    <div className="Home_Section3_carrossel_keynotes">
        <h4>Keynotes</h4>
        <SimpleSwiper
          slides={[<Slide />, <Slide />, <Slide />, <Slide />]}
          dots={[key_dot_1, key_dot_2, key_dot_3]}
        />
    </div>
</section>  
  </>)
}

export default App
