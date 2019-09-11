import React from 'react';


class Nav extends React.Component {

    render() {

    return (
      <div className="top">
        <h1 className="logo">Weraoke</h1>
        <nav>
          <ul>
            <li><a>Create New Session</a></li>
            <li><a>Add Song</a></li>
          </ul>
        </nav>

      </div>
    );
  }
}

export default Nav;
