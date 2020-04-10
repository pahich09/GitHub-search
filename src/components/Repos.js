import React from "react"

export const Repos = ({repos}) => (
  <>
    {repos.map(el => (
      <div className='card mb-3' key={el.id}>
        <div className="card-body">
          <h5>
            <a
              href={el.html_url}
              target='_blank'
              rel="noopener noreferrer"
            >{el.name}</a>
          </h5>
        </div>
      </div>
    ))}
  </>
)
