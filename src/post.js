import axios from "axios";
import React, { Component } from "react";
import "../src/post.css"
class Post extends Component {
    constructor(props){
        super(props);
        this.state={
            sno:" ",
            id:" ",
            itemname:" ",
            purchasedate:" ",
            price:" ",
        }
    }
handlesnoChange = (event) => {
    this.setState({ sno:event.target.value});
}

handleIdChange = (event) => {
    this.setState({ id:event.target.value});
}
handleItemNameChange = (event) => {
    this.setState({ itemname:event.target.value});
}
handlePurchasedateChange = (event) => {
    this.setState({ purchasedate:event.target.value});
}
handlePriceChange = (event) => {
    this.setState({ price:event.target.value});
}

handleSubmit = (event) =>{
    event.preventDefault();
    const data = {
        sno : this.state.sno,
        id : this.state.id,
        itemname : this.state.itemname,
        purchasedate : this.state.purchasedate,
        price : this.state.price       
    }
    axios.post('http://127.0.0.1:8080/post',data)
};
render(){
    return ( 
        <div className="post">
        <form onSubmit={this.handleSubmit} className="login-form">
            <label className="login-label">Sno</label><br/>
            <input
                className="login" 
                type="text" 
                value={this.state.sno}
                onChange ={this.handlesnoChange}
            /><br/><br/>

            <label className="login-label">Id</label><br/>
            <input
                className="login" 
                type="text" 
                value={this.state.id}
                onChange ={this.handleIdChange}
            /><br/><br/>

            <label className="login-label">ItemName</label><br/>
            <input
                className="login" 
                type="text" 
                value={this.state.itemname}
                onChange ={this.handleItemNameChange}
            /><br/><br/>

            <label className="login-label">PurchaseDate</label><br/>
            <input
                className="login" 
                type="text" 
                value={this.state.purchasedate}
                onChange ={this.handlePurchasedateChange}
            /><br/><br/>

            <label className="login-label">Price</label><br/>
            <input
                className="login" 
                type="text" 
                value={this.state.price}
                onChange ={this.handlePriceChange}
            /><br/><br/>
            <button className="button" type="submit"> Submit </button>
        </form>
        </div>
    );
  }
}

export default Post;