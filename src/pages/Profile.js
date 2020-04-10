import React, {useContext, useEffect} from "react";
import {GitHubContext} from "../context/gitHub/gitHubContext";
import {Link} from "react-router-dom";
import {Loader} from "../components/Loader";

const Profile = props => {
  const {getUser, getRepos, user, repos, loading} = useContext(GitHubContext)
  const urlName = props.match.params.name
  useEffect(() => {
    getUser(urlName)
    getRepos(urlName)
    // eslint-disable-next-line
  }, [])
  const {
    login, avatar_url, name, html_url, company, blog,
    followers, following, public_repos,
  } = user
  if (loading) {
    return <Loader/>
  }
  return (
    <>
      <Link to='/' className="btn btn-link">На главную</Link>
      <div className="card mb-4">
        <div className="card-body">
          <div className="row">
            <div className="col text-center">
              <img
                style={{width: '150px'}}
                src={avatar_url}
                alt={login}
                className='card-img '
              />
              <h2 className="card-title">{name}</h2>
            </div>
            <div className="col">
              <a
                className='btn btn-dark'
                href={html_url}
                target='_blank'
                rel="noopener noreferrer"
              >Открыть профиль</a>
              <ul>
                {login && <li>
                  <strong>Username: </strong> {login}
                </li>}
                {company && <li>
                  <strong>Company: </strong> {company}
                </li>}
                {blog && <li>
                  <strong>Website: </strong> {blog}
                </li>}
              </ul>
              <div className="badge badge-primary">Подписчики: {followers}</div>
              <div className="badge badge-success">Подписан: {following}</div>
              <div className="badge badge-info">Репозитори: {public_repos}</div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Profile
