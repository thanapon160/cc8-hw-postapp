import { BrowserRouter, Switch, Route } from "react-router-dom"
import HomePage from './pages/HomePage.js'
import AddPostPage from './pages/AddPostPage.js'
import SinglePostPage from './pages/SinglePostPage.js'
import CounterPage from './pages/CounterPage.js'
import EditPostPage from './pages/EditPostPage.js'
import './App.css';
// import Counter from "./components/Counter"
import DesignSystemPage from './pages/DesignSystemPage'
import { CounterProvider } from './contexts/counter'



// import logo from './logo.svg';
// import GreetingMessage from './GreetingMessage.js';
// import ProductItem from './ProductItem.js';

// function App() {
//   return (
//     <div className="App">
//       <h1>React Codecamp #8</h1>
//       <GreetingMessage />
//       <ProductItem title="XiaoMi Air Purifier" description="Good OK" price={45000}/>
//       <ProductItem title="Samsung TV" description="OK, fair enough" price={6000000}/>
//       <ProductItem />
//     </div>
//   );
// }

function App() {
  return (
    <div >
      <CounterProvider>
        <BrowserRouter>
          <Switch>
            <Route path="/design-system" component={DesignSystemPage} />
            <Route path="/editpost/:postId" component={EditPostPage} />
            <Route path="/counter" component={CounterPage} />
            <Route path="/post/:postId" component={SinglePostPage} />
            <Route path="/home" component={HomePage} />
            <Route path="/addpost" component={AddPostPage} />
          </Switch>
        </BrowserRouter>
      </CounterProvider>
    </div>
  )
}

export default App;