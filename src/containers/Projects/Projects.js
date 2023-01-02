import React from "react";

class Projects extends React.Component {
    render() {
        return(
            <div ref={this.props.projectsRef} style={{height: "100%", overflowY: "scroll", zIndex:"3"}}>

            </div>
        );
    }
}

export default Projects;