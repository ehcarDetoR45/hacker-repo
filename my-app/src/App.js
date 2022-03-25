import { useEffect, useState } from "react";
import axios from "axios";
import Header from "./components/Header";
import "./App.css";
import data from "./HackerNews.json";

function App() {
  const [data, setData] = useState([]);
  console.log(data);

  useEffect(() => {
    axios
      .get("http://hn.algolia.com/api/v1/search?query=")
      .then((response) => setData(response.data.hits))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <Header />
    </div>
  );
}
export default App;

