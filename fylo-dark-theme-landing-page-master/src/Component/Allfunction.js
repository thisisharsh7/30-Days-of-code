import React from "react";
import Function from "./Function";
import accessAny from "./icon-access-anywhere.svg";
import anyFile from "./icon-any-file.svg";
import collaborate from "./icon-collaboration.svg";
import security from "./icon-security.svg";

const Allfunction = () => {
  return (
    <>
      <div id="allFunction">
        <Function
          image={accessAny}
          headerText="All your files in one secure location, accessible anywhere."
          paraText="The ability to use a smartphone, tablet, or computer to access your
          account means your files follow you everywhere."
        />

        <Function
          image={security}
          headerText="Security you can trust"
          paraText="2-factor authentication and user-controlled encryption are just a couple of the security 
  features we allow to help secure your files."
        />
        <Function
          image={collaborate}
          headerText="Real-time collaboration"
          paraText="Securely share files and folders with friends, family and colleagues for live collaboration. 
  No email attachments required."
        />
        <Function
          image={anyFile}
          headerText="Store any type of file"
          paraText="Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all 
  file types to be securely stored and shared."
        />
      </div>
    </>
  );
};

export default Allfunction;
