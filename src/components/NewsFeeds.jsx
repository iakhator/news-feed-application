import React from 'react';
import Sources from './Sources.jsx';
import NewsActions from '../actions/NewsActions';
import NewsStore from '../stores/NewsStore';

class News extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newsSource: NewsStore.getSources(),
      search: '',
      isAuthenticated: false
    };
    this.recieveSources = this.recieveSources.bind(this);
    this.onSearch = this.onSearch.bind(this);
  }

  componentDidMount() {
    NewsActions.recieveSources();
    NewsActions.recieveSources();
    this.onRecieveChange();
  }

  componentWillUnmount() {
    NewsStore.removeListener("change", this.recieveSources);
  }

  onRecieveChange() {
    NewsStore.on("change", this.recieveSources)
  }

  onSearch(e) {
    this.setState({
      search: e.target.value
    })
  }

  recieveSources() {
    this.setState({
      newsSource: NewsStore.getSources()
    })
  }

  render() {
    return (
      <div className="body">
        <div className="container contain">
          <div className="row">
            <div className="col-md-10 col-md-offset-1">
              <p className="para text-center ">
                <i className="fa fa-newspaper-o fa-2x" aria-hidden="true" /> 
                <span>Welcome to NewsFlash</span></p>
              <div className="page-header col-md-10 col-md-offset-1">
                <input
                  className="form-control"
                  placeholder="Search for your favourite headlines on the go..."
                  type="text"
                  value={this.state.search}
                  onChange={this.onSearch}
                />
              </div>
              <div>
                {!this.state.newsSource ? <p className="load">Loading...</p>
                :<Sources
                  newsSource={this.state.newsSource}
                  search={this.state.search}
                />}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

News.PropTypes = {

}
export default News;