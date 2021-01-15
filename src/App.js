import React from 'react';
import './App.css';

class App extends React.Component {
  componentDidMount() {
    let divElement = document.getElementById('viz1610728256243');
    let vizElement = divElement.getElementsByTagName('object')[0];
    vizElement.style.width = '912px';
    vizElement.style.height = '2527px';
    let scriptElement = document.createElement('script');
    scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
    vizElement.parentNode.insertBefore(scriptElement, vizElement);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
        </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a>
        </header>

        <div class='tableauPlaceholder' id='viz1610728256243' style={{position: 'relative'}}>
          <noscript>
            <a href='#'>
              <img alt=' ' src='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;G5&#47;G5FCY36ZY&#47;1_rss.png' style={{border: 'none'}} />
            </a>
          </noscript>
          <object class='tableauViz' style={{display:'none'}}>
            <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' />
            <param name='embed_code_version' value='3' />
            <param name='path' value='shared&#47;G5FCY36ZY' />
            <param name='toolbar' value='yes' />
            <param name='static_image' value='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;G5&#47;G5FCY36ZY&#47;1.png' />
            <param name='animate_transition' value='yes' />
            <param name='display_static_image' value='yes' />
            <param name='display_spinner' value='yes' />
            <param name='display_overlay' value='yes' />
            <param name='display_count' value='yes' />
            <param name='language' value='en' />
          </object>
        </div>
      </div>
    );
  }
}
export default App;
