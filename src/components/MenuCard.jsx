
export default function MenuCard({menuDataItems}){
    
  return (
    <>
    <section className='main-card-container'>
    {menuDataItems.map((item)=>{
        const {id, name, category, image, description, price} = item; //destructuring
        return(
            <>
            <div className="card-container power" key={id}>
            <div className="card">
                <div className="card-body">
                    <span className="card-number block">{id}</span>
                    <span className="card-author brown">{category}</span>
                    <h2 className="card-title">{name}</h2>
                    <span className="card-description">{description}</span>
                    <div className="card-read read"><hr/>Read</div>
                </div>
                <div className="card-bottom">
                <img src={ image } alt="images" className="card-media fashion" />
                <span className="card-tag btn">Order Now</span>
                <span className="card-price money">₹{price}</span>
                </div>
            </div>
            </div>
            </>

        )
    })}
     </section> 
    </>
  )
}

