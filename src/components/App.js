import React, { useState } from "react";
import "./../styles/App.css";

const App = () => {
  const tabsData = [
    { title: "Tab 1", content: "This is the content for Tab 1" },
    { title: "Tab 2", content: "This is the content for Tab 2" },
    { title: "Tab 3", content: "This is the content for Tab 3" }
  ];

  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const handleTabsClick = (index) => {
    setActiveTabIndex(index);
  };

  return (
    <div>
      <div>
        <ul>
          {tabsData.map((tab, index) => (
            <li
              key={index}
              onClick={() => handleTabsClick(index)}
              className={activeTabIndex === index ? "active" : ""}
            >
              {tab.title}
            </li>
          ))}
        </ul>
      </div>
      <p>{tabsData[activeTabIndex].content}</p>
    </div>
  );
};

export default App;
