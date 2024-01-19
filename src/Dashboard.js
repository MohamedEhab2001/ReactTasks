
import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="container mt-5">
      <h2 className="mb-4" style={{ color: 'red' }}>
  DashBoard
</h2>

      <div className="row">
        <div className="col-md-6">
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">Week 1</h5>
              <p className="card-text">Tasks:</p>
              <ul className="list-group">
                <li className="list-group-item">
                  <Link to="/week1/task1">Task 1 - Counter</Link>
                </li>
                <li className="list-group-item">
                  <Link to="/week1/task2">Task 2 - Timer</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Week 2 and 3</h5>
              <p className="card-text">Tasks:</p>
              <ul className="list-group">
                <li className="list-group-item">
                  <Link to="/week2/task1">Task 1 - Form1</Link>
                </li>
                <li className="list-group-item">
                  <Link to="/week2/task2">Task 2 - Form2</Link>
                </li>
                <li className="list-group-item">
                  <Link to="/week2/task3">Task 3 - Login with redux and axios</Link>
                </li>
                <li className="list-group-item">
                  <Link to="/week2/task4">Task 4 - Login with useQuery</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
