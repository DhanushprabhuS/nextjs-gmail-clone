import React from "react";
import Email from "./Email";


const Emails = ({emails, type}) => {
 
  return (
    <>
      {emails.map((email) => (
        <Email type={type} id={email.id} expeditor={email.expeditor} messageTitle={email.messageTitle} message={email.message} timestamp={email.timestamp} />
      ))}
    </>
  );
};

export default Emails;
