import React, { useEffect, useState, useLayoutEffect } from "react";

function Layout() {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    console.log("Helooooooooooooooooo useEffect");
  });

  useLayoutEffect(() => {
    console.log("Helooooooooooooooooo useLayouEffect");
  });

  return (
    <div>
      <button
        onClick={() => {
          setToggle(true);
        }}
      >
        Toggle
      </button>
      {toggle && <h2>Toggled Me!</h2>}
    </div>
  );
}

export default Layout;
