import React, {useContext} from "react"
import Search from "../components/Search"
import Card from "../components/Card"
import Alert from "../components/Alert"
import {GitHubContext} from "../context/gitHub/gitHubContext";
import {Loader} from "../components/Loader";

const Home = () => {
  const {users, loading} = useContext(GitHubContext)
  return (
    <div>
      <Alert alert={{text: 'alert'}}/>
      <Search/>
      <div className="row">
        {loading
          ?
          <Loader/>
          :
          users.map(user => (
            <div className="col-sm-3" key={user.id}>
              <Card user={user}/>
            </div>
          ))
        }
      </div>
    </div>
  )
}
export default Home
