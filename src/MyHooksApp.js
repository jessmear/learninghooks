import React, { useReducer, useState } from 'react';
import HooksAppHeader from './HooksAppHeader';
import HooksAppCount from './HooksAppCount';

const myReducer = (myState, myAction) => {
  // console.log({myState, myAction})
  switch(myAction.type) {
    case 'theme': {
      return {
        ...myState,
        count: myState.count + 1,
        darktheme: !myState.darktheme
      };
      break;
    }
    case 'bigwords': {
      return {
        ...myState,
        bigwords: !myState.bigwords
      };
      break;
    }
    default: {
      return myState;
    }
  }
}

const myInitialState = {
  darktheme: true,
  bigwords: true,
  count: 0
}

export const MyExampleContext = React.createContext();

export default function MyHooksApp() {

  const [myState, myDispatch] = useReducer(myReducer, myInitialState);

  const handleColorsClick = () => {
    myDispatch({ type: 'theme'})
  }

  const handleTextSizeClick = () => {
    myDispatch({ type: 'bigwords'})
  }

  return (
    <MyExampleContext.Provider value={myState} >
      <div id={myState.darktheme ? 'darktheme' : 'lighttheme'} className="MyHooksApp">
        <HooksAppHeader>My Super Awesome useContext and useReducer Hooks App</HooksAppHeader>
        <button onClick={handleColorsClick}>Toggle Colors</button>
        <HooksAppCount />
        <button onClick={handleTextSizeClick}>Toggle Text Size</button>
        <p>
          <em>useContext</em> is a hook that allows the coder to create a named context, then surround a small or large peice of the app with thatContext.Provider, which also passes a value, which is (usually) a state object. That gives everything inside the provider, including other components, access to the state object. 
        </p>
        <p>
          Components which inherit the context must import the context, and create a variable to hold the contents of the context. Then that variable can be used to display or otherwise use the contents of the context.
        </p>
        <p>
          <em>useReducer</em> is a hook that holds state and updates it through dispatches. The dispatch sends a type of action to the reducer, which uses a switch statement to decide what to do. It is good practice to use the 'default' case to just return the state.
        </p>
      </div>
    </MyExampleContext.Provider>
  );
};