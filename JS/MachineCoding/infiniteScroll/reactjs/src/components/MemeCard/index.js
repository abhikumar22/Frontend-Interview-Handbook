import './myStyle.css';

const MemeCard = ({ name, imageUrl }) => {
    return (
        <div className='MemeCard_Wrapper'>
            <div className='name'>{name}</div>
            <img className='image' src={imageUrl}/>
        </div>
    )
};

export default MemeCard;