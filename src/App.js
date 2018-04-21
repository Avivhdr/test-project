import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import _ from 'lodash';
import Map from './components/map';
// import SearchBox from './components/SearchBox';
import StandAloneSearchBox from './components/StandAloneSearchBox';
// import Performance from './components/performance'
import Show from './components/Show';
import Home from './components/Home';
import Contact from './components/Contact';
// import store from './redux/store';


const ShowLocations = () => (
  <Show
    containerElement={<div style={{ height: '600px' }} />}
    mapElement={<div style={{ height: '100%' }} />}
  />
);

const ShowFeatures = () => (
  <Map
    containerElement={<div style={{ height: '600px' }} />}
    mapElement={<div style={{ height: '100%' }} />}
  // onToggleOpen={this.onToggleOpen.bind(this)}
  // isOpen={this.state.isOpen}
  />
);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  onToggleOpen() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return (
      <Router>
        <div>
          <ul style={styles.ul}>
            <li style={styles.li}><Link to="/">Home</Link></li>
            <li style={styles.li}><Link to="/search">Search</Link></li>
            <li style={styles.li}><Link to="/show">Show</Link></li>
            <li style={styles.li}><Link to="/features">Features</Link></li>
            <li style={styles.li}><Link to="/form">form</Link></li>
            {/* <li style={styles.li}><Link to="/performance">performance</Link></li> */}
          </ul>

          <hr />

          <Route exact path="/" component={Home} />
          <Route path="/search" component={StandAloneSearchBox} />
          <Route path="/show" component={ShowLocations} />
          <Route path="/features" component={ShowFeatures} />
          <Route path="/form" component={Contact} />
          {/* <Route path="/performance" component={Performance} /> */}

        </div>
      </Router>

    );
  }
}

export default App;

const styles = {
  ul: {
    listStyleType: 'none',
    margin: 0,
    padding: 0,
    overflow: 'hidden',
  },
  li: {
    float: 'left',
    padding: '8px'
  }
};


/* <StandAloneSearchbox /> */

/* <Searchbox
  containerElement={ <div style={{ height: `550px` }}  /> }
  mapElement={ <div style={{ height: `100%` }} /> }
/> */

/* <Map
  containerElement={ <div style={{ height: `600px` }} /> } 
  mapElement={ <div style={{ height: `100%` }} /> }
  onToggleOpen={this.onToggleOpen.bind(this)}
  isOpen={this.state.isOpen}
  /> */

