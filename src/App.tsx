import * as React from 'react';
import './App.css';

import logo from './static/logo.svg';

class App extends React.Component {
  
  public componentDidMount() {
    window.onload = (): void => {
      console.log(window, '----map----');
    }
    const url:string = 'https://webapi.amap.com/maps?v=1.4.15&key=db9b562852f4f843e7a1f49897d138f9&callback=';
    const jsapi:any = document.createElement('script');
    jsapi.charset = 'utf-8';
    jsapi.src = url;
    document.head.appendChild(jsapi);
  }

  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <div id="container_map" style={{'width':'300px', 'height': '180px'}} />
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
