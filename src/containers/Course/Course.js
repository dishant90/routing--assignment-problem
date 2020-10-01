import React, { Component } from 'react';

class Course extends Component {

    state = {
        loadedCourse: null
    }

    loadCourse = () => {
        if(this.props.match.params.id) {
            if(!this.state.loadedCourse || (this.state.loadedCourse && this.state.loadedCourse.id !== this.props.match.params.id)) {
                const query = new URLSearchParams(this.props.location.search);
                for(let param of query.entries()) {
                    console.log(param);
                    if(param && param[0] && param[1]) {
                        this.setState({
                            loadedCourse: {
                                id: this.props.match.params.id,
                                title: param[1]
                            }
                        })
                    }
                }
            }
        }
        
    }

    componentDidMount() {
        this.loadCourse();
    }

    componentDidUpdate() {
        this.loadCourse();
    }

    render () {
        let course = <div style={{textAlign:"center"}}>Please select a course...</div>
        if(this.props.match.params.id) {
            course= <div style={{textAlign:"center"}}>Loading...</div>
        }

        if(this.state.loadedCourse) {
            course = <div>
                        <h1>{this.state.loadedCourse.title}</h1>
                        <p>You selected the Course with ID: {this.state.loadedCourse.id}</p>
                    </div>
        }

        return course;
    }
}

export default Course;