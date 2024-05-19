// src/users/PageUser.jsx
import { useEffect, useState } from "react";
import axios from "axios";

const PageUser = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/users")
      .then((response) => setUsers(response.data))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  const handleUserClick = (user) => {
    setSelectedUser(user);
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">User List</h1>
      <div className="row">
        <div className="col-md-6">
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <th scope="row">{user.id}</th>
                  <td>
                    {user.name.firstname} {user.name.lastname}
                  </td>
                  <td>{user.email}</td>
                  <td>
                    <button className="btn btn-primary btn-sm" onClick={() => handleUserClick(user)}>
                      View Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {selectedUser && (
          <div className="col-md-6">
            <h2>User Details</h2>
            <ul className="list-group">
              <li className="list-group-item">
                <strong>ID:</strong> {selectedUser.id}
              </li>
              <li className="list-group-item">
                <strong>Name:</strong> {selectedUser.name.firstname} {selectedUser.name.lastname}
              </li>
              <li className="list-group-item">
                <strong>Email:</strong> {selectedUser.email}
              </li>
              <li className="list-group-item">
                <strong>Username:</strong> {selectedUser.username}
              </li>
              <li className="list-group-item">
                <strong>Phone:</strong> {selectedUser.phone}
              </li>
              <li className="list-group-item">
                <strong>Address:</strong> {selectedUser.address.street}, {selectedUser.address.city}, {selectedUser.address.zipcode}
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default PageUser;
