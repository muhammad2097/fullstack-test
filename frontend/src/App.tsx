import { useEffect, useMemo, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/api/users")
      .then((res) => res.json())
      .then((res) => {
        setUsers(res);
        console.log(res);
      });
  }, []);

  // change func
  const changeFn = (e) => {
    setFilter(e.target.value);
  };

  // filtered by name
  const filtered = useMemo(() => {
    return users.filter((u) => u.name.toLowerCase().includes(filter));
  }, [users, filter]);

  console.log(filtered);

  // implement debounce
  // function debounce(callback, delay) {
  //   let timer;

  //   return (...args) {
  //     timer = setTimeout(() => callback(...args), delay);
  //     clearTimeout(timer);
  //   }
  // }
  
  return (
    <>
      Search by name:
      <input
        style={{ padding: "10px", margin: "10px" }}
        type="text"
        onChange={changeFn}
      />
      <ul>
        {filtered.map((user) => (
          <div style={{ textAlign: "left" }}>
            <input type="checkbox" value={user.favourite} />
            <li key={user.id} style={{ textAlign: "left" }}>
              {user.name} - {user.email} - {user.company.name}
            </li>
          </div>
        ))}
      </ul>
      {/* <p>Initial page</p> */}
    </>
  );
}

export default App;
