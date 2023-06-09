import React, { Component } from "react";

export default class ChildComponent extends Component{
    constructor(props){
        super(props)
        this.state = {
            message: "",
            belief: ""
        }
    }
render() {
    return (
        <div>
            <p>{props.message}</p>
            <p>{props.belief}</p>
        </div>
    )

}
}

