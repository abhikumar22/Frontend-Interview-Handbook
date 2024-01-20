import React from "react";
import { useState } from "react";
import "./customStyle.css";

const RenderingEngine = ({ dataDump }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    dataDump &&
    dataDump.length > 0 &&
    dataDump.map((currFolder, indx) => {
      const currFileName = currFolder.fileName;
      const currSubFolders = currFolder.subFolders || [];
      const hasSubfolders = !!(currSubFolders && currSubFolders.length > 0);
      return (
        <div
          key={currFileName}
          style={{ position: "relative", top: 0, left: 0, padding: "0.5em" }}
        >
          <div
            style={{
              cursor: hasSubfolders ? "pointer" : "text",
              position: "relative",
              top: 0,
              left: 0,
            }}
            onClick={() => hasSubfolders && setIsActive(!isActive)}
          >
            {hasSubfolders
              ? `${isActive ? `-` : `+`} ${currFolder.fileName}`
              : `${currFolder.fileName}`}
          </div>
          <div style={{ marginLeft: "1em" }}>
            {currSubFolders && currSubFolders.length > 0 && isActive && (
              <RenderingEngine dataDump={currSubFolders} />
            )}
          </div>
        </div>
      );
    })
  );
};

export default RenderingEngine;
