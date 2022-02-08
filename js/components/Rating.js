import React, { useState } from "react";

export default function Rating({element, rated, rating, inWatchList, addRating, changeRating, handleCheckbox }){
    const [hoverValue, setHoverValue] = useState(0);
    const id = Math.random();
    const onClick = (e) =>{
        if(!rated){
            addRating(e.target.value)
        }else{
            changeRating(e.target.value)
        }
    }
    const labelStyle = (value) => ({
        style: {color: rating < value && hoverValue < value ? '#ddd' : '#FFD700'},
        onMouseEnter: () => setHoverValue(value)
    })
    const inputStyle = (value) => ({
        onMouseOver: (e) => console.log(e.target.value)
    })
    return(
        <form className='ratingContainer'>
        {!inWatchList && <fieldset className="rating" id={id} value={rating} onMouseLeave={() => setHoverValue(0)}>
            <input type="radio" id={id + "star5"} name="rating" value={5} onChange={onClick}/><label className = "full" title="Awesome - 5 stars" htmlFor={id + 'star5'} {...labelStyle(5)}></label>
            <input type="radio" id={id + "star4half"} name="rating" value={4.5}  onChange={onClick}/><label className="half" title="Pretty good - 4.5 stars" htmlFor={id + 'star4half'} {...labelStyle(4.5)}></label>
            <input type="radio" id={id + "star4"} name="rating" value={4}  onChange={onClick}/><label className = "full" title="Pretty good - 4 stars" htmlFor={id + 'star4'} {...labelStyle(4)}></label>
            <input type="radio" id={id + "star3half"} name="rating" value={3.5}  onChange={onClick}/><label className="half" title="Meh - 3.5 stars" htmlFor={id + 'star3half'} {...labelStyle(3.5)}></label>
            <input type="radio" id={id + "star3"} name="rating" value={3}  onChange={onClick}/><label className = "full" title="Meh - 3 stars" htmlFor={id + 'star3'} {...labelStyle(3)}></label>
            <input type="radio" id={id + "star2half"} name="rating" value={2.5}  onChange={onClick}/><label className="half" title="Kinda bad - 2.5 stars" htmlFor={id + 'star2half'} {...labelStyle(2.5)}></label>
            <input type="radio" id={id + "star2"} name="rating" value={2}  onChange={onClick}/><label className = "full" title="Kinda bad - 2 stars" htmlFor={id + 'star2'} {...labelStyle(2)}></label>
            <input type="radio" id={id + "star1half"} name="rating" value={1.5}  onChange={onClick}/><label className="half" title="Meh - 1.5 stars" htmlFor={id + 'star1half'} {...labelStyle(1.5)}></label>
            <input type="radio" id={id + "star1"} name="rating" value={1}  onChange={onClick}/><label className = "full" title="Sucks big time - 1 star " htmlFor={id + 'star1'} {...labelStyle(1)}></label>
            <input type="radio" id={id + "starhalf"} name="rating" value={0.5}  onChange={onClick} {...inputStyle()}/><label className="half" title="Sucks big time - 0.5 stars" htmlFor={id + 'starhalf'} {...labelStyle(0.5)}></label>
        </fieldset>}
        {!rated && <input type='checkbox' name="watchList" title='Add to Your Watchlist' className='AddToWL' checked={inWatchList} onChange={() => {
            handleCheckbox(element, inWatchList);
        }}/>}
        </form>
    )
}