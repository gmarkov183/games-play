/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */


const CatalogItem = ({ game }) => {
  return(
  <div className="allGames">
    <div className="allGames-info">
      <img src={game.imageUrl} />
      <h6>{game.category}</h6>
      <h2>{game.title}</h2>
      <a href="#" className="details-button"> 
        Details
      </a>
    </div>
  </div>
  )
};

export default CatalogItem;