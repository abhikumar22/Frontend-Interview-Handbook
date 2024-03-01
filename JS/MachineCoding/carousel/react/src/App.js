import { useEffect, useRef, useState } from "react";
import ImageCarousel from "./components/ImageCarousel";

const App = () => {
  const imageUrls = [
    "https://external-preview.redd.it/GuaqcyUmY7VsyQKcvJgAu9yd2_vh7F_GVjQDSD7REqI.png?width=108&crop=smart&auto=webp&s=e8ddcd79bbef901e8863d19a348790958f0a1f06",
    "https://preview.redd.it/n7d5z6j4amlc1.png?width=216&crop=smart&auto=webp&s=7aa5d13f3c21a2c99c5f8c88d666cb27625632c9",
    "https://preview.redd.it/jlgiy9fqzmjc1.png?width=216&crop=smart&auto=webp&s=e2f3390e2a8034dabf16a31768b555516437ee8c",
    "https://preview.redd.it/pdzzntnvtjlc1.png?width=216&crop=smart&auto=webp&s=4c538cfd504189d1584e392a3e82c0762be86666",
  ];
  return (
    <div>
      <ImageCarousel imageUrls={imageUrls} />
    </div>
  )
};

export default App;