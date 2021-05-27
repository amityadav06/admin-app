import { useEffect, useState } from "react";
import "./styles.css";
import UserData from "./UserData";

const url =
  "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json";

export default function App() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const resJson = await response.json();
      // console.log(resJson);
      setData(resJson);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <form>
        <input
          type="text"
          placeholder="search..."
          className="input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </form>
      <div className="tab-con">
        <h3>Name</h3>
        <h3>Email</h3>
        <h3>Role</h3>
        <h3>Action</h3>
      </div>
      <UserData searchTerm={searchTerm} data={data} />
    </div>
  );
}
