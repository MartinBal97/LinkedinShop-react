
export default function Rating({rating}) {

  return (
   <>
    <i className={rating >= 1 ? 'fa-solid fa-star' : 'fa-regular fa-star'}></i> 
    <i className={rating >= 2 ? 'fa-solid fa-star' : 'fa-regular fa-star'}></i> 
    <i className={rating >= 3 ? 'fa-solid fa-star' : 'fa-regular fa-star'}></i> 
    <i className={rating >= 4 ? 'fa-solid fa-star' : 'fa-regular fa-star'}></i> 
    <i className={rating >= 5 ? 'fa-solid fa-star' : 'fa-regular fa-star'}></i> 
   </>
  )
}

