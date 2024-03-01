import { useState } from "react";
import './myStyle.css';

const ImageCarousel = ({
    imageUrls,
}) => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    if(!(imageUrls&&imageUrls.length>0)) return;
    const handleNextClick = () => {
        let currIndx = selectedIndex;
        if (currIndx + 1 >= imageUrls.length) {
            setSelectedIndex(0);
            return;
        }
        setSelectedIndex(prevIndx => prevIndx + 1);
    }
    const handlePreviousClick = () => {
        let currIndx = selectedIndex;
        if (currIndx - 1 < 0) {
            setSelectedIndex(imageUrls.length - 1);
            return;
        }
        setSelectedIndex(prevIndx => prevIndx - 1);
    }
    return (
        <div className="image_carousel_wrapper">
            <div className="image_carousel">
                <img
                    src={imageUrls[selectedIndex]}
                />
            </div>
            <div className="page">
                {`${selectedIndex + 1} of ${imageUrls.length}`}
            </div>
            <div className="buttons">
                <button onClick={() => handlePreviousClick()}>Prev</button>
                <button onClick={() => handleNextClick()}>Next</button>
            </div>
        </div>
    )
};

export default ImageCarousel;