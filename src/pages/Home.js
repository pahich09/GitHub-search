import React from "react";
import Search from "../components/Search";
import Card from "../components/Card";
import Alert from "../components/Alert";

const Home = props => {
  const data = new Array(12).fill(1);
  return (
    <div>
      <Alert alert={{text: 'alert'}}/>
      <Search/>
      <div className="row">
        {data.map(card=>(
          <div className="col" key={card}>
            <Card/>
          </div>
        ))}
      </div>

    </div>
  )
}
export default Home
