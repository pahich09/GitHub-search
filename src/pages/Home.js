import React, {useContext} from "react"
import Search from "../components/Search"
import Card from "../components/Card"
import Alert from "../components/Alert"
import {GitHubContext} from "../context/gitHub/gitHubContext";

const Home = props => {
  const gitHub = useContext(GitHubContext)
  console.log(gitHub.users)
  return (
    <div>
      <Alert alert={{text: 'alert'}}/>
      <Search/>
      <div className="row">
        {gitHub.users.map(user=>(
          <div className="col-sm-3" key={user.id}>
            <Card user={user}/>
          </div>
        ))}
      </div>

    </div>
  )
}
export default Home
