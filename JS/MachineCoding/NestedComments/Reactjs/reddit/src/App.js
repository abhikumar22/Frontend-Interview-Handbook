import { useEffect, useRef, useState } from "react";
import NestedCommentsRenderer from './Components/NestedCommentsRenderer'
const App = () => {
  const file_obj = [
    {
      name: "abhishek",
      message: "Hello Good video",
      reply: [
        {
          name: "mohit",
          message: "what good video",
          reply: [
            {
              name: "abhishek",
              message: "????? seriously",
              reply: [
                {
                  name: "mohit",
                  message: "go to hell",
                  reply: [
                    {
                      name: "abhishek",
                      message: "same to you",
                    }
                  ]
                }
              ]
            },
            {
              name: "aviral",
              message: "+1 mohit",
              reply: [
                {
                  name: "abhishek",
                  message: "you also want to become senior",
                }
              ]
            }
          ]
        }
      ]
    },
    {
      name: "john",
      message: "okay guys",
    }
  ]
  return (
    <div>
      <NestedCommentsRenderer fileData={file_obj} />
    </div>
  )
};

export default App;