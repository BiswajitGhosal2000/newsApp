import React, { Component } from "react";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

import NewsItem from "./NewsItem";
import Spinner from "./Spinner";

export class News extends Component {
  static defaultProps = { country: "in", pageSize: 6 };
  static propTypes = {
    name: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = { articles: [], loading: false, page: 1, totalResults: 0 };
    document.title = `${this.props.category[0].toUpperCase() + this.props.category.slice(1)
      } : News Today`;
  }

  async componentDidMount() {
    this.props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    this.props.setProgress(40);
    let parsedData = await data.json();
    this.props.setProgress(70);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
    this.props.setProgress(100);
  }
  fetchMoreData = () => {
    console.log("Fetch More Data Called")
    this.setState({ page: this.state.page + 1, }, async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        articles: this.state.articles.concat(parsedData.articles),
        totalResults: parsedData.totalResults,
      });
    });

  };
  // fetchMoreData = () => {
  //   this.setState({ page: this.state.page + 1 }, () => {
  //     // Now, the state has been updated, and you can use the new page value here.
  //     const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
  //     fetch(url)
  //       .then((data) => data.json())
  //       .then((parsedData) => {
  //         this.setState({
  //           articles: this.state.articles.concat(parsedData.articles),
  //           totalResults: parsedData.totalResults,
  //         });
  //       })
  //       .catch((error) => {
  //         console.error("Error fetching data:", error);
  //       });
  //   });
  // };


  render() {
    return (
      <div className="container my-3 rounded bg-light">
        <h2 className="text-center p-2 border-bottom border-info">
          Top Headlines on {this.props.category[0].toUpperCase() + this.props.category.slice(1)}
        </h2>
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length <= this.state.totalResults}
          loader={<Spinner />}
        >
          <div className="container">
            <div className="row ">
              {this.state.articles.map((element) => {
                return (
                  <div className="col-md-4" key={element.url}>
                    <NewsItem
                      title={element.title ? element.title.slice(0, 30) : "Unknown"}
                      description={element.description ? element.description.slice(0, 50) : "Unknown"}
                      imgUrl={element.urlToImage ? element.urlToImage : "https://t3.ftcdn.net/jpg/03/27/55/60/360_F_327556002_99c7QmZmwocLwF7ywQ68ChZaBry1DbtD.jpg"}
                      newsUrl={element.url} publishedAt={element.publishedAt}
                      author={element.author} source={element.source.name}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
      </div>
    );
  }
}

export default News;
