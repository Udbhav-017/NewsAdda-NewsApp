import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import InfiniteScroll from 'react-infinite-scroll-component';

export default class News extends Component {

    // To use props inside constructor, pass props to construtor and super
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            totalArticles: 1
        }
    }

    loadNews = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let dataParsed = await data.json();
        this.setState({ articles: this.state.articles.concat(dataParsed.articles), totalArticles: dataParsed.totalResults })
    }

    componentDidMount() {
        this.loadNews();
    }

    // handlePreviousClick = async () => {
    //     await this.setState({ page: this.state.page - 1 });
    //     await this.loadNews();
    // }

    // handleNextClick = async () => {
    //     await this.setState({ page: this.state.page + 1 });
    //     await this.loadNews();
    // }

    fetchData = async () => {
        await this.setState({ page: this.state.page + 1 });
        await this.loadNews();
    }

    render() {
        return (
            <>
                <h2 className="m-4 text-center text-capitalize" style={{ 'fontFamily': 'Fira Sans'}}><strong>NewsAdda - latest happenings in India <span className="text-success">{this.props.category!=='general'?`- ${this.props.category}`:""}</span></strong></h2>

                <InfiniteScroll
                    dataLength={this.state.articles.length} //This is important field to render the next data
                    next={this.fetchData}
                    hasMore={this.state.articles.length !== this.state.totalArticles}
                    loader={<Spinner className='m-3' />}
                    endMessage={
                        <p style={{ textAlign: 'center' }}>
                            <b>Check after some time for more!!</b>
                        </p>
                    }>
                    <div className="container">
                        <div className="row">
                            {
                                !this.state.loading && this.state.articles.map((news) => {
                                    return <div className="col-12 col-md-4 p-3" key={news.url}>
                                        <NewsItem title={news.title} description={news.description} imageUrl={news.urlToImage} sourceUrl={news.url} author={news.author} date={news.publishedAt} />
                                    </div>
                                })
                            }
                        </div>
                    </div>
                </InfiniteScroll>
                {/* <div className="d-flex justify-content-between m-3">
                    <button disabled={this.state.page === 1} type="button" className="btn btn-dark" onClick={this.handlePreviousClick} >&larr; Previous</button>
                    <span>Page {this.state.page}</span>
                    <button disabled={this.state.page === Math.ceil(this.state.totalArticles / this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick} >Next &rarr;</button>
                </div> */}
            </>
        )
    }
}
