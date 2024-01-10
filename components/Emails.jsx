import React from "react";
import Email from "./Email";


const Emails = ({emails}) => {
 
  return (
    <>
      {emails?.map((email) => (
        <Email type={email.type} id={email.id} key={email.id}
        expeditor={email.expeditor} messageTitle={email.messageTitle} message={email.message} timestamp={email.timestamp} />
      ))}
    </>
  );
};

export default Emails;
