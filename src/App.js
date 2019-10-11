import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
// import Contact from "./Pages/Contact";
// import Packages from "./Pages/Packages";
// import About from "./Pages/About";
import Gallery from "./pages/Gallery";
// import Weddings from "./Pages/Weddings";

class App extends Component {
 render() {
   return (
     <Router>
       <div>
         <Switch>
           <Route exact path="/" component={Home} />
           <Route exact path="/Gallery" component={Gallery} />
           {/* <Route exact path="/Packages" component={Packages} />
           <Route exact path="/Contact" component={Contact} />
           <Route exact path="/About" component={About} />
           <Route exact path="/Weddings" component={Weddings} /> */}
         </Switch>
       </div>
     </Router>
   );
 }
}
export default App;