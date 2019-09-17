import React, { useContext } from 'react';
import { MyExampleContext } from "./MyHooksApp";

function HooksAppCount(props) {
  const myState = useContext(MyExampleContext);

  return (
    <div id="count">
      <p className={myState.bigwords ? 'bigwords' : 'smallwords' }> 
        The theme has been toggled {myState.count} times and is currently set to {myState.darktheme ? 'darktheme' : 'lighttheme'}.
      </p>
    </div>
  );
}

export default HooksAppCount;
