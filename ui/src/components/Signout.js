import React, { useEffect } from 'react';

const Signout = () => {
  useEffect(() => {
    const logoutUser = async () => {
      try {
        const response = await fetch("https://bs-53zg.onrender.com/bajansociety/user/logout", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (response.ok) {
          window.alert("Logout Successful, redirecting to home page!");
          window.location.href = "/";
          localStorage.removeItem("isLoggedIn");
        } else {
          console.error("Logout failed");
        }
      } catch (error) {
        console.error("Error during logout", error);
      }
    };

    logoutUser();
  }, []); // Run the effect only once on component mount

  return (
    <div>
      {/*Logging out...*/}
    </div>
  );
};

export default Signout;
