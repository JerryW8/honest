import './App.css';
import Summary from "./components/Summary"
import Prompt from "./components/Prompt"
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
        <Router>
            <div className="App">
                <Switch>
                    <Route exact={true} path="/tldr" component={Summary} />
                    <Route path="/" component={Prompt} />
                </Switch>
            </div>
        </Router>
    )
}

export default App;
