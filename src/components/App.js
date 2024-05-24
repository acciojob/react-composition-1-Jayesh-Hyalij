import React, {useState} from "react";
import "./../styles/App.css";

const App = () => {
  const [tabs, setTabs] = useState("Tab 1");

  const handleTabsClick = (tabName) => {
    setTabs(tabName);
  }

  return (
    <div>
      <div>
      <ul>
        <li onClick={() => handleTabsClick("Tab 1")}>Tab 1</li>
        <li onClick={() => handleTabsClick("Tab 2")}>Tab 2</li>
        <li onClick={() => handleTabsClick("Tab 3")}>Tab 3</li>
      </ul>
      </div>
      <p>This is the content for {tabs}</p>
    </div>
  );
};

export default App;
