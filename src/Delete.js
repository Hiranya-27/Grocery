import React from 'react';  
// import { Link } from "react-router-dom";   
import axios from 'axios';  


class Deletion extends React.Component
{
    state ={
        Expense:[]
    }
    componentDidMount(){
        axios.get('http://127.0.0.1:8080/getvalues')
        .then(response => {
          this.setState({ Expense:response.data });
        })
        .catch(error => {
          console.log(error);
        });
    
    }
    async remove(sno)
    {
        axios.delete('http://127.0.0.1:8080/delete/' +sno,
        {
            method: 'DELETE',
            headers:{
                'Content-Type':'application/json'
            },
        })
    
        .then(response => response.json());
    }
    render()
    {
        const {Expense} = this.state;
    const rows=
    Expense.map(Expense =>
        <tr key={Expense.id}>
            <td className="text-left">{Expense.sno}</td>
            <td className="text-left">{Expense.id}</td>
            <td className="text-left">{Expense.itemName}</td>
            <td className="text-left">{Expense.purchasedate}</td>
            <td className="text-left">{Expense.price}</td>
            <td><button size="sm" color="danger" onClick={() => this.remove(Expense.sno)} onChange={Expense}>Delete</button></td>
        </tr>)


    return(
        <div>
        <div class="table-title">
        
        </div>
        <table class="table-fill">
        <thead>
        <tr>
        <th class="text-left">sno</th>
        <th class="text-left">id</th>
        <th class="text-left">itemName</th>
        <th class="text-left">purchasedate</th>
        <th class="text-left">price</th>
        </tr>
        </thead>
                <tbody>
                   {rows}
                </tbody>
         </table>    
        </div>
    );
}
}
export default Deletion;