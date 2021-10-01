import React, { Component } from 'react'
import load from './loading.svg'

export default class Spinner extends Component {
    render() {
        return (
                <div className="mt-4 text-center">
                    <img src= {load} alt="Loading..." width={this.props.width} height={this.props.height}/>
                </div>
        )
    }
}
