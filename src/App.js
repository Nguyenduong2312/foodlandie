import './App.css';
import Footer from './components/common/footer';
import Header from './components/common/header';
import RecipesDetail from './pages/recipesDetail';
// import Home from './pages/home';

function App() {
  // const check = ('ab' === '' ;--  ')
  // console.log('b' === '' || 'ab'=== 'ab');
    // const [value, setValue] = useState('')
    const checkValue = (value) => {
      const key = '12345'
      return (value ===  key)
    }

    return (
      <div>

        {/* <button 
         onClick={() =>{console.log(checkValue(hash));
        }}
        > Click </button> */}
        
        
        <Header/>
        {/* <Home/> */}
        <RecipesDetail/>
        <Footer/>
        
      </div>
    );
}

export default App;
