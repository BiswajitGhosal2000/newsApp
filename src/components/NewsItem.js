import React, { Component } from "react";
// import { Link } from 'react-router-dom'

export class NewsItem extends Component {
  render() {
    let { title, description, imgUrl, newsUrl, publishedAt, author, source } = this.props;
    return (
      <div className="my-3">
        <div className="card">
          <img className="card-img-top img-fluid" src={imgUrl} alt="Card cap" style={{ height: "12rem" }} />
          <span className="position-absolute top-0 start-100 translate-middle badge badge-pill badge-danger">
            {source}
          </span>
          <div className="card-body">
            <h5 className="card-title">
              <strong>{title}...</strong>
              <span className="badge badge-pill badge-warning">
                {new Date(publishedAt).getDate() <= new Date().getDate() - 3 ? "old" : "new"}
              </span>
            </h5>
            <p className="card-text">{description}....</p>
            <p className="card-text">
              <small className="text-muted">
                Last Updated by: {author ? author : "Unknown"} on {new Date(publishedAt).toGMTString()}
              </small>
            </p>
          </div>
          <div className="card-footer">
            <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-primary w-100">Read More</a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
