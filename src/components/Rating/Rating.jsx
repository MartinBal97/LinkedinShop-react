

export default function Rating({rating}) {

  return (
   <>
    <span className="stars">{(rating >= 1)? <i className="fa-solid fa-star"></i> : <i className="fa-regular fa-star"></i>}</span>
    <span className="stars">{(rating >= 2)? <i className="fa-solid fa-star"></i> : <i className="fa-regular fa-star"></i>}</span>
    <span className="stars">{(rating >= 3)? <i className="fa-solid fa-star"></i> : <i className="fa-regular fa-star"></i>}</span>
    <span className="stars">{(rating >= 4)? <i className="fa-solid fa-star"></i> : <i className="fa-regular fa-star"></i>}</span>
    <span className="stars">{(rating >= 5)? <i className="fa-solid fa-star"></i> : <i className="fa-regular fa-star"></i>}</span>
   </>
  )
}

