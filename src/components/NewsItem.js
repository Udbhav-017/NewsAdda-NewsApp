import React, { Component } from 'react'

export default class NewsItem extends Component {
    render() {
        let { title, description, imageUrl, sourceUrl, author, date } = this.props;

        return (
                <div className="card">
                    <img src={imageUrl? imageUrl : "/assets/noimage.png"} height='260px' width='350px' className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title fw-bold">{title}</h5>
                        <p className="card-text">{description? description : ""}</p>
                        <p className="card-text"><small className="text-muted">By {author? author : 'Unknown'} on {new Date(date).toGMTString()} </small></p>
                        <a href={sourceUrl} target='_blank' rel="noopener noreferrer" className="btn btn-info">Read More</a>
                    </div>
                </div>
        )
    }
}
