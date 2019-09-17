import React, { useContext } from 'react';
import { MyExampleContext } from "./MyHooksApp";

function HooksAppHeader(props) {
  const myState = useContext(MyExampleContext);

  return (
    <div id="header">
      <h1 className={myState.bigwords ? 'bigwords' : 'smallwords' }>{props.children}</h1>
    </div>
  );
}

export default HooksAppHeader;
