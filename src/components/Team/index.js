import React, { useState } from 'react';
import './index.css';

const Team = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [requests, setRequests] = useState([
    {
      name: 'Suresh',
      type: 'PL',
      from: '02 Jun 2024 - FH',
      to: '02 Jun 2024 - FH',
      days: 0.5,
      decision: 'Approved',
    },
    {
      name: 'Logesh',
      type: 'CL',
      from: '12 Jun 2024',
      to: '17 Jun 2024',
      days: 4,
      decision: 'Approved',
    },
    {
      name: 'Ashok Kumar',
      type: 'PL',
      from: '12 Jun 2024',
      to: '12 Jun 2024',
      days: 1,
      decision: 'Approved',
    },
    {
      name: 'Suresh',
      type: 'CL',
      from: '12 Jun 2024',
      to: '12 Jun 2024',
      days: 1,
      decision: 'Approved',
    },
    {
      name: 'Suresh',
      type: 'PL',
      from: '12 Jun 2024',
      to: '12 Jun 2024',
      days: 1,
      decision: 'Pending',
    },
    {
      name: 'Logesh',
      type: 'CL',
      from: '15 Jun 2024',
      to: '15 Jun 2024',
      days: 3,
      decision: 'Pending',
    },
    {
      name: 'Ashok Kumar',
      type: 'PL',
      from: '26 Jun 2024',
      to: '26 Jun 2024',
      days: 1,
      decision: 'Rejected',
    },
    {
      name: 'Suresh',
      type: 'CL',
      from: '28 Jun 2024',
      to: '28 Jun 2024',
      days: 1,
      decision: 'Approved',
    },
    {
      name: 'Suresh',
      type: 'CL',
      from: '28 Jun 2024',
      to: '28 Jun 2024',
      days: 1,
      decision: 'Approved',
    },
  ]);

  const itemsPerPage = 5;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentRequests = requests.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleApprove = (index) => {
    const updatedRequests = [...requests];
    updatedRequests[index].decision = 'Approved';
    setRequests(updatedRequests);
  };

  const handleReject = (index) => {
    const updatedRequests = [...requests];
    updatedRequests[index].decision = 'Rejected';
    setRequests(updatedRequests);
  };

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(requests.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="container">
      <div className="team-leave-requests">
        <h2>Team Leave Requests</h2>
        <p>Manage your team members leave requests here.</p>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>From</th>
              <th>To</th>
              <th>Days</th>
              <th>Decision</th>
            </tr>
          </thead>
          <tbody>
            {currentRequests.map((request, index) => (
              <tr key={index}>
                <td>{request.name}</td>
                <td>{request.type}</td>
                <td>{request.from}</td>
                <td>{request.to}</td>
                <td>{request.days}</td>
                <td>
                  <div className="decision-buttons">
                    {request.decision === 'Pending' && (
                      <>
                        <button onClick={() => handleApprove(indexOfFirstItem + index)}>Approve</button>
                        <button onClick={() => handleReject(indexOfFirstItem + index)}>Reject</button>
                      </>
                    )}
                    {request.decision === 'Approved' && (
                      <span className="approved">Approved</span>
                    )}
                    {request.decision === 'Rejected' && (
                      <span className="rejected">Rejected</span>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="pagination">
          <button disabled={currentPage === 1} onClick={() => handlePageChange(currentPage - 1)}>
            Previous
          </button>
          {pageNumbers.map((number) => (
            <button key={number} onClick={() => handlePageChange(number)} className={currentPage === number ? 'active' : ''}>
              {number}
            </button>
          ))}
          <button disabled={currentPage === pageNumbers.length} onClick={() => handlePageChange(currentPage + 1)}>
            Next
          </button>
        </div>
      </div>
      <div className="my-leave-request">
        <h2>My Leave Request</h2>
        <p>Check your leave requests here.</p>
        <table>
          <thead>
            <tr>
              <th>Type</th>
              <th>From</th>
              <th>To</th>
              <th>Days</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
          <tr>
              <td>PL</td>
              <td>12 Jun 2024</td>
              <td>12 Jun 2024</td>
              <td>1</td>
              <td>Pending</td>
              <td>
                <div className="action">
                  <span className="material-icons">visibility</span>
                  <span className="material-icons">cancel</span>
                </div>
              </td>
            </tr>
            <tr>
              <td>CL</td>
              <td>15 Jun 2024</td>
              <td>15 Jun 2024</td>
              <td>3</td>
              <td>Pending</td>
              <td>
                <div className="action">
                  <span className="material-icons">visibility</span>
                  <span className="material-icons">cancel</span>
                </div>
              </td>
            </tr>
            <tr>
              <td>PL</td>
              <td>26 Jun 2024</td>
              <td>26 Jun 2024</td>
              <td>1</td>
              <td>Rejected</td>
              <td>
                <button className="action-button">View Details</button>
              </td>
            </tr>
            <tr>
              <td>CL</td>
              <td>28 Jun 2024</td>
              <td>28 Jun 2024</td>
              <td>1</td>
              <td>Approved</td>
              <td>
                <button className="action-button">View Details</button>
              </td>
            </tr>
            <tr>
              <td>CL</td>
              <td>28 Jun 2024</td>
              <td>28 Jun 2024</td>
              <td>1</td>
              <td>Approved</td>
              <td>
                <button className="action-button">View Details</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Team;