import { useEffect, useRef, useState } from "react";
import FileRenderer from  './Components/FileRenderer'
const App = () => {
  const file_obj = [
    {
      name: "package.json"
    },
    {
      name: "package-lock.json"
    },
    {
      name: "Readme.md"
    },
    {
      name: "Src",
      subFolders: [
        {
          name: "components",
          subFolders: [
            {
              name: "product.js",
            },
            {
              name: "navbar.js",
            }
          ]
        }
      ]
    },
    {
      name: "utils",
      subFolders: [
        {
          name: "client",
          subFolders: [
            {
              name: "helpers",
            },
            {
              name: "actions",
            }
          ]
        },
        {
          name: "server",
          subFolders: [
            {
              name: "axios",
            },
            {
              name: "apis",
            }
          ]
        }
      ]
    }
  ]
  return (
    <div>
      <FileRenderer fileData={file_obj}/>
    </div>
  )
};

export default App;