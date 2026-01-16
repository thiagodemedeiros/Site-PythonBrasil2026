import Header from './components/Header';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';
import ButtonPrincipal from './components/ButtonPrincipal';

export default function Layout() {
    return (<>
        <Header/>

        <main>
            <Outlet/>
            <ButtonPrincipal/>
        </main>

        <Footer/>
    </>)
}