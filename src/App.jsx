import { useState } from "react";
import Home from "./New";
import ListUser from './ListUser.jsx';
function App() {
  let [user, setUser] = useState({ name: "Suresh", username: "Tharunkumar" })
  let [userList, setUserList] = useState([]);
  let [user1, setUser1] = useState({ name: '', email: '', password: '' });
  return (
    <>
      <Home name="Rohinprasanth R" usenmae="Suresh5" />
      <form onSubmit={(e) => {
        e.preventDefault()
        setUserList([...userList, { ...user }]);// ...(triple dots) are used to avoid the recent updated data to all 
      }
      }>
        <input type="text" placeholder="Enter your Name" onChange={(e) => { user.name = e.target.value; }} />
        <input type="text" placeholder="Enter your e-mail" onChange={(e) => { user.email = e.target.value; }} />
        <button type="submit">Submit</button>
      </form>
      <div>
        <table className="table table-striped" style={{ border: "2px solid black" }}>
          <thead>
            <tr>
              <th>Name</th>
              <th>E-mail</th>
            </tr>
          </thead>
          <tbody>
            {userList.map((user, index) => (
              <tr key={index}>
                <td>{user.name}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
          </table>
      </div>
    
      <ListUser />
    </>
  );
}
export default App;