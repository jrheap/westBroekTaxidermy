import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Reviews from "./pages/Reviews";
import Services from "./pages/Services";
import Awards from "./pages/Awards";
import About from "./pages/About";
import Gallery from "./pages/Gallery";

class App extends Component {
 render() {
   return (
     <Router>
       <div>
         <Switch>
           <Route exact path="/" component={Home} />
           <Route exact path="/Gallery" component={Gallery} />
           <Route exact path="/About" component={About} />
           <Route exact path="/Contact" component={Contact} />
           <Route exact path="/Reviews" component={Reviews} />
           <Route exact path="/Services" component={Services} />
           <Route exact path="/Awards" component={Awards} />
         </Switch>
       </div>
     </Router>
   );
 }
}
export default App;