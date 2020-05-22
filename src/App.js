import React from 'react';
import Button from './nextQuoteButton';

let style = {display: 'flex',
            textAlign: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh'}
class App extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      quotes: [],
      quotesIndex: null,
    } 
    this.randomNumberGenerator = this.randomNumberGenerator.bind(this);
    this.nextQuoteGenerator = this.nextQuoteGenerator.bind(this);
   
  }

  componentDidMount() {
    fetch('https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json')
      .then(data => data.json())
        .then(quotes => this.setState({quotes: quotes}
          , this.nextQuoteGenerator))
  } 

  get selectedQuote () {
  if (!this.state.quotes.length || !Number.isInteger(this.state.quotesIndex)) {
    return undefined;
  }
    return this.state.quotes[this.state.quotesIndex]
}

  randomNumberGenerator() {
    if (!this.state.quotes.length) {
      return;
    }
      return Math.floor(Math.random() * 102);
}

  nextQuoteGenerator() {
    this.setState({
      quotesIndex: this.randomNumberGenerator()
    })
  };


  render() {
    return (
      <div className="App" id="quote-box" style={style}>
        {this.selectedQuote &&
          <Button selectedQuote={this.selectedQuote} nextQuote={this.nextQuoteGenerator}/> 
        }
      </div>
    );
  }
  
}
export default App;
