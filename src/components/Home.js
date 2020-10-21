import React, { Component } from "react";
import { Link } from "react-router-dom";



class Home extends Component {
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

        <table className="table table-hover" style={{ border: "1px solid" }}>
          <thead>
            <tr>
              <th>Compaign</th>
              <th>Status</th>
              <th>Opens</th>
              <th>Clicks</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>John</td>
              <td className="btn btn-success rounded-pill">Draft</td>
              <td>john@example.com</td>
              <td>john@example.com</td>
              <td>
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
            <tr>
              <td>Mary</td>
              <td className="btn btn-success">Draft</td>
              <td>mary@example.com</td>
              <td>Mary</td>
              <td>
                {" "}
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

            <tr>
              <td>Mary</td>
              <td className="btn btn-success">Draft</td>
              <td>mary@example.com</td>
              <td>Mary</td>
              <td>
                {" "}
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
            <tr>
              <td>Mary</td>
              <td className="btn btn-success">Draft</td>
              <td>mary@example.com</td>
              <td>Mary</td>
              <td>
                {" "}
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
          </tbody>
        </table>






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
