import React from 'react'
import { connect } from 'react-redux'

const RepoDetails = ({ repoDetail }) => {
    console.log(repoDetail)
    return (
        <div className="wrapper">
        <div
            key={repoDetail.username}
            className="profile"
            onClick={() => console.log("ff")}>
            <img src={repoDetail.avatar} alt={repoDetail.avatar} />
            <span className="blue-text">{repoDetail.name}</span>
        </div>
        {RepoListElement(repoDetail)}
    </div>
    );
};

const RepoListElement = ({ repos }) => {
    if (!repos) {
      return null;
    }
    const renderList = () =>
      repos.map((repo, ind) => {
        return (
          <div
            key={ind}
            className="list-item"
            onClick={() => window.open(repo.url, "_blank")}>
            <span className="blue-text">{repo.name}</span>
            <br/>
            {repo.description !== null ? (
              <span className="green-text"> {repo.description}</span>
            ) : (
              <span className="red-text"> None </span>
            )}
            <br/>
            {/* {repo.stars !== null ? (
              <span className="blue-text"> {repo.stars}</span>
            ) : (
              <span className="red-text"> None </span>
            )} */}
          </div>
        );
    });
  
    return (
        <div className="repo-container">
            <h3>Repository List</h3>
            <div className="repo-list">{renderList()}</div>
        </div>
    );
};


function mapStateToPropos(state) {
    return {
        //this or create empty object if there is no data
        repoDetail : state.home.repoDetails || {} 
    }
}

export default connect(mapStateToPropos)(RepoDetails);
