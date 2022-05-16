import React, { Component } from 'react'

export class Navbar extends Component {

    constructor(props) {
      super(props)
    
      this.inputref = React.createRef()
    }
  render() {
      const {search} = this.props
    return ( 
        <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
            <a className="navbar-brand" href='#'>News</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <form className="d-flex">
                        <input ref={this.inputref} className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                            <button onClick={(e)=> {
                                e.preventDefault()
                                search(this.inputref.current.value)}} className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    </div>
    )
  }
}

export default Navbar