import axios from "axios";
import React,{Component} from "react";
import '../src/get.css';
class Get extends Component{
    state={
        data:[]
    }
    componentDidMount()
    {
        axios.get('http://127.0.0.1:8080/getvalues').then(response=>{
            this.setState({data:response.data});
        })
        .catch(error=>{
            console.log(error);
        });
    }
    render()
      {
        return(
            <table border={1}>
                <thead>
                    <tr>
                        <th>sno</th>
                        <th>id</th>
                        <th>itemName</th>
                        <th>purchasedate</th>
                        <th>price</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.data.map(user=>(
                        <tr>
                            <td>{user.sno}</td>
                            <td>{user.id}</td>
                            <td>{user.itemName}</td>
                            <td>{user.purchasedate}</td>
                            <td>{user.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        )
      }
}
export default Get;