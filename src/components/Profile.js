import { useState, useEffect } from "react";

const Profile = (props) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    //API call
  });
  return (
    <>
      <h1>Functional Component</h1>
      <h2>{props.name}</h2>
      <h3>{count}</h3>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        set
      </button>
    </>
  );
};

export default Profile;
