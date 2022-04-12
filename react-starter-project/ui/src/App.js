import React from "react";
import { hot } from 'react-hot-loader/root';
import Button from '@material-ui/core/Button';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import SimpleMap from "./simpleMap";

class App extends React.Component {
  componentDidMount() {
    console.log("componentDidMount2");
    //this.me = this.me.bind(this);
  }

  render() {
    const { name } = this.props;
    return (
      <>
        <h1 className="text-4xl text-white bg-black">
          Hello {name}
        </h1>
        <Button variant="contained">this yes is a material UI button</Button>
        <button className="btn btn-primary">
          This is a bootstrap button
        </button>
        <SimpleMap />
      </>
    );
  }
}

export default hot(App);
