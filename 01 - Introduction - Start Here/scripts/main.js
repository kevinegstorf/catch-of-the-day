var React = require('react');
var ReactDOM = require('react-dom');
/*
  StorePicker
  This will let us make <StorePicker/>
*/

var StorePicker = React.createClass({

  render : function(){
    var name = "Kevin"
    // normal comments
    return (
      <form className="store-selector">
      {/* Comment goed in here! */}
        <h2>Please Enter A Store {name}</h2>
        <input type="text" ref= "storeId" required />
        <input type="Submit" />
      </form>
    )
  }
});

ReactDOM.render(<StorePicker/>, document.querySelector('#main'));
