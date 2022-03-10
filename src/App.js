import Header from './components/Header/Header';
import SocialList from "./components/SocialList/SocialList";
import Portfolio from "./components/Portfolio/Porfolio";
import NewProject from "./components/NewProject/NewProject";

function App() {

    return (
        <div>
            <Header />
            <NewProject />
            <Portfolio />
            <SocialList />
        </div>
    )
}

export default App;
