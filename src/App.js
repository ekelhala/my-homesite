import React from 'react';
import ColorScheme from './colors';

import {Header, Content, Projects} from './containers';
import { NavBar } from './components';

class App extends React.Component {

  scrollRef;
  projectsRef;

  constructor(props) {
    super(props);
    this.scrollRef = React.createRef();
    this.projectsRef = React.createRef();
    this.changeTitle = this.changeTitle.bind(this);
    this.state = {
      navBarTitle: "Welcome",
    }
  }

  changeTitle(code) {
    if(code === 0) {
      this.setState({
        navBarTitle: "Me",
      });
    }
    else if(code === 1) {
      this.setState({
        navBarTitle: "Projects",
      });
    }
  }

  render() {
    return (
      <div style={{position: "fixed", width:"100%", height:"100%", top:"0", left:"0", overflow:"hidden",
       backgroundColor: ColorScheme.SiteBackground, scrollBehavior: "smooth"}}>
        <NavBar title={this.state.navBarTitle}/>
        <Header contentScrollRef={this.scrollRef} titleChangeFunc={this.changeTitle}/>
        <Content scrollRef={this.scrollRef} projectsRef={this.projectsRef} titleChangeFunc={this.changeTitle}/>
        <Projects projectsRef={this.projectsRef}/>
      </div>
    );
  }
}

export default App;
