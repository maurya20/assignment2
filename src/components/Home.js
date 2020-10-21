import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';



class Home extends Component {
  constructor(props){
  super()
      this.state={
        compaign:[],
      }
    }
      componentDidMount() {
        axios.get(`http://127.0.0.1:8000/api/getCampaignList/`)
          .then(res => {
            const compaign = res.data;
            this.setState({ compaign });
          })
      }



  render() {
    return (
      <div className="container">
        <br></br>
        <div className="row">
          <div className="col">
            <h3>Compaigns</h3>
          </div>
          <div className="col">
          </div>
          
          <div className="col">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Search Compaign..."
              />
              <div className="input-group-append">
                <button className="btn btn-info" type="button">
                  <i className="fa fa-search"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="col">
            <button className="btn btn-info">Create Compaign</button>
          </div>
        </div>
        <br></br>
        <div className="row">
          <div className="col bg">
            <Link>
              <span>⏱</span>Recent
            </Link>
          </div>
          <div className="col bg">
            <span>✔️</span>Sent
          </div>
          <div className="col bg">
            <span>📅</span>Scheduled
          </div>
          <div className="col bg">
            <span>📝</span>Draft
          </div>
          <div className="col bg"></div>
          <div className="col bg"></div>
          <div className="col bg"></div>
        </div>
        <hr></hr>
        <div >
        <table className="table table-sm" style={{ border: "1px solid" }}>
          <thead>
            <tr>
              <th>Compaign</th>
              <th>Status</th>
              <th style={{paddingLeft:"40px"}}>Opens</th>
              <th>Clicks</th>
              <th style={{width:"20%",paddingLeft:"70px"}}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.state.compaign.map(item =>(
            <tr>
              <td style={{width:"50%"}}><Link>{item.campaignName}</Link></td>
              <td><span className="badge badge-pill badge-success btn-block">{item.status}</span></td>
          <td style={{width:"20%",paddingLeft:"40px"}}>{item.opens}</td>
          <td>{item.clicks}</td>
              <td style={{width:"20%",paddingLeft:"70px"}}>
                <li class="list-inline-item">
                  <button
                    class="btn btn-warning"
                    type="button"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Edit"
                  >
                    <i class="fa fa-edit"></i>
                  </button>
                </li>
                <button className="btn btn-danger">
                  <i className="fa fa-trash"></i> 
                </button>
              </td>
              </tr>
            ))}
          
          </tbody>
        </table>
</div>
       




        <ul class="pagination justify-content-center">
    <li class="page-item"><a class="page-link" href="javascript:void(0);">Previous</a></li>
    <li class="page-item"><a class="page-link" href="javascript:void(0);">1</a></li>
    <li class="page-item"><a class="page-link" href="javascript:void(0);">2</a></li>
    <li class="page-item"><a class="page-link" href="javascript:void(0);">Next</a></li>
  </ul>
      </div>
    );
  }
}

export default Home;
