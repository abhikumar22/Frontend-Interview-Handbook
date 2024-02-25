import { useEffect, useRef, useState } from "react";
import MemeCard from "./components/MemeCard";

const App = () => {
  const endPoint = "https://meme-api.com/gimme/10";
  const [memeData, setMemeData] = useState([]);
  const [loading, setLoading] = useState(false);
  const loadingRef = useRef(false);

  useEffect(() => {
    fetchMeme();
    window.addEventListener('scroll', checkState);
  }, []);

  const checkState = async () => {
    if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
      fetchMeme()
    }
  }

  const fetchMeme = async () => {
    if(!loadingRef.current){
      loadingRef.current = true;
      setLoading(true);
      let res = await fetch(endPoint);
      res = await res.json();
      setMemeData((mem)=>[...mem,...res.memes]);
      setLoading(false);
      loadingRef.current = false;
    }
  }

  return (
    <div>
      {memeData && memeData.length > 0 && memeData.map((currMeme, idx) => {
        const title = currMeme.title;
        const previewUrl = currMeme.preview[0];
        const postLink = currMeme.postLink;
        return (<MemeCard
          key={postLink}
          name={title}
          imageUrl={previewUrl}
        />)
      })}
      {loading && <div><strong>Loading .......</strong></div>}
    </div>
  )
};

export default App;