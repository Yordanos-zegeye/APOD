import React, { useEffect, useState } from "react";
import Main from "./components/Main";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";

export default function App() {
  const [data, setData] = useState();

  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
    async function fetchAPIData() {
      const NASA_KEY = import.meta.env.VITE_NASA_API_KEY;
      const url =
        "https://api.nasa.gov/planetary/apod" + `?api_key=${NASA_KEY}`;
      try {
        const res = await fetch(url);
        const apiData = await res.json();
        setData(apiData);

        console.log("data\n", apiData);
      } catch (error) {
        console.log(err.message);
      }
    }
    fetchAPIData();
  }, []);

  function handleToggleModal() {
    setShowSidebar((prevState) => !prevState);
  }
  return (
    <>
      {data ? (
        <Main data={data} />
      ) : (
        <div className="loadingState">
          <i className="fa-solid fa-gear"></i>
        </div>
      )}
      {showSidebar && (
        <SideBar data={data} handleToggleModal={handleToggleModal} />
      )}
      {data && (
        <Footer
          data={data}
          handleToggleModal={handleToggleModal}
          showSidebar={showSidebar}
        />
      )}
    </>
  );
}
