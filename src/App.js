import Header from './components/Header/Header';
import Portfolio from "./components/Portfolio/Porfolio";
import SocialList from "./components/SocialList/SocialList";
import NewProject from './components/NewProjectForm/NewProject';

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
