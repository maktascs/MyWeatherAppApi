import React from 'react';

const Forms = (props) => (
  <div>

  <form className="ui form" onSubmit={props.handleClick}>



    <div className="inline fields">
        <div className="field">
    <div className="ui input " style={{paddingRight:'1em',width:'24em'}}>
      <input type="text" name = "city" placeholder="City..." />
    </div>
    </div>
    <div className="field">
    <div className="ui radio checkbox ">
      <input type="radio" name="temp" checked = "checked" id="F" value = "imperial" />
      <label for="F">F&deg;</label>
    </div>
  </div>
  <div className="field">
  <div className="ui radio checkbox">
    <input type="radio" name="temp" id="C" value="metric" />
    <label for="C">C&deg;</label>
  </div>
</div>
      <button className = "ui red button" type="submit" >Get Weather Info</button>
  </div>


  </form>
</div>
)
export default Forms;
