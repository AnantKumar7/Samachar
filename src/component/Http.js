import React, { Component } from 'react'
import axios from 'axios'
import Navbar from './Navbar'

export class Http extends Component {


    constructor(props) {
        super(props)
        this.inputref = React.createRef()
        this.state = {
            news: [],
            link: 'https://newsapi.org/v2/everything?' +
                'q=Apple&' +
                'from=2022-05-16&' +
                'sortBy=popularity&' +
                'apiKey=3a6d8f0f11c04067858829b2fea9a79f'
        }
    }
    componentDidMount() {
        axios.get(this.state.link)
            .then((response) => {
                console.log(response)
                this.setState({
                    news: response.data.articles
                })
            })
            .catch(error => {
                console.log(error)
            })
    }

    search = (value) => {
        console.log()
        this.setState({
            link: 'https://newsapi.org/v2/everything?' +
                'q=' + value + '&' +
                'from=2022-05-16&' +
                'sortBy=popularity&' +
                'apiKey=3a6d8f0f11c04067858829b2fea9a79f'
        }, () => {
            axios.get(this.state.link)
                .then(response => {
                    this.setState({
                        news: response.data.articles
                    })
                })
                .catch(error => {
                    console.log(error)
                })
        })
    }

    render() {
        const { news } = this.state
        return (
            <div>
                <Navbar search={this.search}></Navbar>
                {/* <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <a className="navbar-brand" href=''>News</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse mx-auto" id="navbarSupportedContent">
                            <form className="d-flex">
                                <input ref={this.inputref} className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                                <button onClick={this.search} className="btn btn-outline-success" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </nav> */}
                <div className='row row-cols-5 row-cols-md-3 flex-wrap mt-3'>
                    {
                        news.map((newser, index) => <div key={index}><div className="card border-primary text-center mx-auto d-flex" style={{ width: 18 + 'rem' }}>
                            <img src={newser.urlToImage} className="card-img-top" alt="..."></img>
                            <div className="card-body">
                                <h5 className="card-title">{newser.title}</h5>
                                <p className="card-text">{newser.discription}</p>
                                <p className="card-text" style={{ textAlign: 'right' }}>{newser.author}</p>
                            </div>
                            <div className="card-body">
                                <a target='_blank' rel="noreferrer" href={newser.url} className="btn btn-primary">Read full news</a>
                            </div>
                        </div> <br></br></div>)
                    }
                </div>
            </div>
        )
    }
}

export default Http