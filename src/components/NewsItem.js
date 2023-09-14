import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imgUrl, newsUrl } = this.props;
    return (
      <div className="my-3">
        <div className="card" style={{ width: "18rem", minHeight: "20rem" }}>
          <img
            className="card-img-top"
            src={imgUrl}
            alt="Card cap"
            style={{ width: "18rem", height: "12rem" }}
          />
          <div className="card-body" style={{ minHeight: "10rem" }}>
            <h5 className="card-title">{title}....</h5>
            <p className="card-text">{description}....</p>
          </div>
          <div className="card-footer">
            <a
              href={newsUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary w-100"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
