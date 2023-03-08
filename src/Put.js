import axios from "axios";
import React, { Component } from "react";
import "../src/post.css"
class Put extends Component {
    constructor(props){
        super(props);
        this.state={
            sno:" ",
            id:" ",
            itemName:" ",
            purchasedate:" ",
            price:" ",
        }
    }
handleSnoChange = (event) => {
    this.setState({ sno:event.target.value});
}

handleIdChange = (event) => {
    this.setState({ id:event.target.value});
}
handleItemNameChange = (event) => {
    this.setState({ itemName:event.target.value});
}
handlePurchaseDateChange = (event) => {
    this.setState({ purchasedate:event.target.value});
}
handlePriceChange = (event) => {
    this.setState({ price:event.target.value});
}


handleSubmit = (event) =>{
    event.preventDefault();
    const data = {
        sno : this.state.sno,
        id:this.state.id,
        itemName:this.state.itemName,
        purchasedate:this.state.purchasedate,
        price:this.state.price,       
    }
    axios.put('http://127.0.0.1:8080/grocery',data)
};
render(){
    return ( 
        <form onSubmit={this.handleSubmit} className="login-form" align="center">
            <label className="login-label">Sno</label><br/>
            <input
                className="login-input" 
                type="text" 
                value={this.state.sno}
                onChange ={this.handleSnoChange}
            /><br/><br/>

            <label className="login-label">Id</label><br/>
            <input
                className="login-input" 
                type="text" 
                value={this.state.id}
                onChange ={this.handleIdChange}
            /><br/><br/>

            <label className="login-label">ItemName</label><br/>
            <input
                className="login-input" 
                type="text" 
                value={this.state.itemName}
                onChange ={this.handleItemNameChange}
            /><br/><br/>

            <label className="login-label">PurchaseDate</label><br/>
            <input
                className="login-input" 
                type="text" 
                value={this.state.purchasedate}
                onChange ={this.handlePurchaseDateChange}
            /><br/><br/>

            <label className="login-label">Price</label><br/>
            <input
                className="login-input" 
                type="text" 
                value={this.state.price}
                onChange ={this.handlePriceChange}
            /><br/><br/>
             
            <button className="login-button" type="submit"> Submit </button>
        </form>
    );
  }
}

export default Put;