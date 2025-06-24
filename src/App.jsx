import { useState } from "react";
import Home from "./New";
import ListUser from './ListUser.jsx';
import { Routes, Route } from 'react-router-dom'
import About from "./pages/About.jsx"
import Contact from "./pages/Contact.jsx"
function App() {
  let [user, setUser] = useState({ name: "rajavel", username: "Rohinprasanth" })
  let [userList, setUserList] = useState([]);
  let [user1, setUser1] = useState({ name: '', email: '', work: '', priority: '' });
  return (
    <>
      <Home name="Rohinprasanth" usernmae="rajavel" />
      <form onSubmit={(e) => {
        e.preventDefault()
        setUserList([...userList, { ...user }]);// ...(triple dots) are used to avoid the recent updated data to all 
      }
      }>
        <input type="text" placeholder="Enter your Name" onChange={(e) => { user.name = e.target.value; }} />
        <input type="text" placeholder="Enter your e-mail" onChange={(e) => { user.email = e.target.value; }} />
        <input type="text" placeholder="Enter the work" onChange={(e) => { user.work = e.target.value; }} />
        <input type="text" placeholder="Enter the priority of the work" onChange={(e) => { user.priority = e.target.value; }} />
        <button type="submit">Submit</button>
      </form>
      <div>
        <table className="table" style={{ border: "2px solid black" }}>
          <thead>
            <tr style={{ border: "1px solid black" }}>
              <th >Name</th>
              <th>E-mail</th>
              <th>Work</th>
              <th>Priority</th>
            </tr>
          </thead>
          <tbody >
            {userList.map((user, index) => (
              <tr key={index} style={{ border: "1px solid black" }}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.work}</td>
                <td>{user.priority}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ListUser />
      <Routes>
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </>
  );
}
export default App;
