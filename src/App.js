import React, { Component } from 'react';
import MyComponent from "./MyComponent";
import i18n from "./i18n";
import { I18nextProvider } from "react-i18next";

class App extends Component {
  render() {
    /*
    * Play around with the number of components below. The number of renders climbs:
    * - 1 component renders 6 times post-load
    * - 2 components render 14 times post-load
    * - 3 components render 24 times post-load
    * - 4 components render 36 times post-load
    * - 5 components render 50 times post-load
    */
    return (
        <I18nextProvider i18n={i18n} initialLanguage={"de"}>
          <div>
            <MyComponent name="number 1" />
		    <MyComponent name="number 2" />
        	<MyComponent name="number 3" />
			<MyComponent name="number 4" />
			<MyComponent name="number 5" />
          </div>
        </I18nextProvider>
    );
  }
}

export default App;
