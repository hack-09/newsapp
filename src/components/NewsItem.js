import React, { Component } from "react";

export class NewsItem extends Component {
  render() { 
    let {title, description, imageUrl, newsUrl, author, date, source} = this.props;
    const fallbackImageUrl = "https://c.ndtvimg.com/2021-06/sb4deh4g_boeing-737-max-reuters-650_625x300_17_June_21.jpg";
    return (
      <div className="my-3">
        <div className="card ">
          <div>
            <span className=" badge rounded-pill bg-danger d-flex position-absolute end-0" >{source}</span>
          </div>
          <img src={imageUrl || fallbackImageUrl}
            onError={(e) => {
              e.target.src = fallbackImageUrl; 
            }}
            className="card-img-top" alt=".."/>
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-body-secondary">By {!author?"unknown":author  } on {new Date (date).toGMTString()}</small></p>
            <a rel="noreferrer" href={newsUrl} target="_blank_" className="btn btn-sm btn-dark">
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;

