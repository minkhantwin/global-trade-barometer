
import { BrowserRouter as Router,Switch, Route } from 'react-router-dom';
import Comparator from './pages/Comparator';
import Sidebar from './components/Sidebar';
import store from './redux/store'
import { Provider } from 'react-redux';
import QuestionIconButton from './components/QuestionIconButton';


function App() {
  return (
    <Provider store={store}>
      <Router>
    
        <Sidebar/>
        <div className='page-wrapper'>

          <Switch>

            <Route path="/" >
              <Comparator/>
            </Route>

          </Switch>

          <QuestionIconButton/>

        </div>
      </Router>

    </Provider>
  );
}

export default App;
