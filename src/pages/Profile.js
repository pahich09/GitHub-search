import React, {useContext, useEffect} from "react";
import {GitHubContext} from "../context/gitHub/gitHubContext";
import {Link} from "react-router-dom";
import {Loader} from "../components/Loader";
import {Repos} from "../components/Repos";

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
    return <div className='d-flex'><Loader/></div>
  }
  return (
    <>
      <Link to='/' className="btn btn-link">На главную</Link>
      <div className="card mb-4">
        <div className="card-body">
          <div className="row">
            <div className="col-12 col-md-5 col-lg-4  text-center">
              <img
                style={{maxWidth: '300px'}}
                src={avatar_url}
                alt={login}
                className='card-img '
              />
              <h3 className="card-title">{name}</h3>
            </div>
            <div className="col-md-7 col-lg-8 col-12">
              <a
                className='btn btn-dark'
                href={html_url}
                target='_blank'
                rel="noopener noreferrer"
              >Открыть профиль</a>
              <ul className="list-unstyled">
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
              <div
                className="badge badge-primary mr-2">Подписчики: {followers}</div>
              <div
                className="badge badge-success mr-2">Подписан: {following}</div>
              <div
                className="badge badge-info mr-2">Репозитори: {public_repos}</div>
            </div>
          </div>

        </div>
      </div>
      <Repos repos={repos}/>
    </>
  )
}

export default Profile
