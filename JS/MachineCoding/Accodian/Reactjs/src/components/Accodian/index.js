import { useState } from 'react';
import './myStyle.css';

const Accodian = ({
    data
}) => {
    // For multi accodian active and close
    // const [isActive, setIsActive] = useState([]);
    // const handleClick = (isAccodian, index) => {
    //     if (isAccodian > -1) {
    //         setIsActive(prevState => prevState.filter(indices => indices != index))
    //         return
    //     };
    //     setIsActive(prevState => [...prevState, index])
    // }

    const [isActive, setIsActive] = useState(null);
    const handleClick = (index) =>{
        if(isActive === index){
            setIsActive(null);
            return
        }
        setIsActive(index);
    }

    console.log("**** isActive",isActive);



    return (
        data
        && data.length > 0
        && data.map((
            currData, indx
        ) => {
            const { name, description } = currData;
            // const isAccodianActive = isActive.indexOf(indx);
            return (
                <div
                    key={`${name, indx}`}
                    className="Accodian"
                    // onClick={() => handleClick(isAccodianActive, indx)}
                    onClick={() => handleClick(indx)}
                >
                    <div className="Title">
                        {name}
                    </div>
                    {/* {!!(isAccodianActive > -1) && <div className="Description"> */}
                    {!!(isActive===indx )&& <div className="Description">
                        
                        {description}
                    </div>}
                </div>
            )
        })
    )
};

export default Accodian;