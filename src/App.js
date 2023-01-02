import React from 'react';
import ColorScheme from './colors';

import {Header, Content, Projects} from './containers';
import { Menu, NavBar } from './components';

class App extends React.Component {

  scrollRef;
  projectsRef;
  welcomeRef;

  constructor(props) {
    super(props);
    this.scrollRef = React.createRef();
    this.projectsRef = React.createRef();
    this.welcomeRef = React.createRef();
    this.changeTitle = this.changeTitle.bind(this);
    this.changeView = this.changeView.bind(this);
    this.state = {
      navBarTitle: "Welcome",
      menuVisible: false
    }
  }

  changeTitle(code) {
    switch(code) {
      case 0:
        this.setState({
          navBarTitle: "Welcome",
        });
        break;
      case 1:
        this.setState({
          navBarTitle: "Welcome",
        });
        break;
      case 2:
        this.setState({
          navBarTitle: "Welcome",
        });
        break;
      default:
        break;
    }
  }

  changeView(index) {
    let newTitle = "";
    switch(index) {
      case 0:
        this.welcomeRef.current.scrollIntoView();
        newTitle = "Welcome";
        break;
      case 1:
        this.scrollRef.current.scrollIntoView();
        newTitle = "About me";
        break;
      case 2:
        this.projectsRef.current.scrollIntoView();
        newTitle = "Projects";
        break;
      default:
        break;
    }
    this.setState({menuVisible: false, navBarTitle: newTitle});
  }

  render() {
    return (
      <div style={{position: "fixed", width:"100%", height:"100%", top:"0", left:"0", overflow:"hidden",
       backgroundColor: ColorScheme.SiteBackground, scrollBehavior: "smooth"}}>
        <Menu display={this.state.menuVisible} changeView={this.changeView}/>
        <NavBar title={this.state.navBarTitle} onButtonClick={() => {this.setState({menuVisible: true})}}/>
        <Header contentScrollRef={this.welcomeRef} titleChangeFunc={this.changeTitle}/>
        <Content scrollRef={this.scrollRef} projectsRef={this.projectsRef} titleChangeFunc={this.changeTitle}/>
        <Projects projectsRef={this.projectsRef}/>
      </div>
    );
  }
}

export default App;
