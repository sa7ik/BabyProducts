    import React, { useContext } from "react";
    // import AdminNav from "./Nav/AdminNav";
    import 'mdb-react-ui-kit/dist/css/mdb.min.css';
    import {
      MDBBadge,
      MDBBtn,
      MDBTable,
      MDBTableHead,
      MDBTableBody,
    } from "mdb-react-ui-kit";
    import {context} from "../../Homepage/MainRouter";


    const UserDetails = () => {
    //   const { userData } = useContext(myContext)
    const {users} = useContext(context)

    console.log(users)

      return (
        <>
        <div>

          {/* <AdminNav/> */}
        </div>
        
        <MDBTable align="middle" >
          <MDBTableHead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">User</th>
              <th scope="col">UserName</th>
              <th scope="col">Email</th>
              <th scope="col">Password</th>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
            {users.map((user, index) => 
               (
                <tr key={index.id}>
                  <td>
                    <MDBBadge color="primary" pill>
                      {index + 1}
                    </MDBBadge>
                  </td>
                  <td>
                    <div className="d-flex align-items-center">
                      <img
                        src="https://cdn.vectorstock.com/i/1000x1000/18/36/user-avatar-flat-icon-isolated-on-white-background-vector-50331836.webp"
                        alt=""
                        style={{ width: "45px", height: "45px" }}
                        className="rounded-circle"
                      />
                      <div className="ms-3">
                        <p className="fw-bold mb-1"></p>
                        <p className="text-muted mb-0">{user.email}</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p className="fw-normal mb-1">{user.userName}</p>
                  </td>
                  <td>
                    <MDBBadge color="primary" pill>
                      {user.email}
                    </MDBBadge>
                  </td>
                  <td>{user.password}</td>
                  <td>
                    <MDBBtn color="link" rounded size="sm">
                      Edit
                    </MDBBtn>
                  </td>
                </tr>
              )
            )}
          </MDBTableBody>
        </MDBTable>
        </>
      );
    };

    export default UserDetails;