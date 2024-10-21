import { OfferEntity } from '../../entities/offer';

type PlaceCardProps = {
  offer: OfferEntity;
};

function PlaceCard({ offer }: PlaceCardProps): JSX.Element {
  const coverImage = offer.images.filter((el) => el.isCoverImage);

  return (
    <article className="cities__card place-card">
      {offer.mark ? (
        <div className="place-card__mark">
          <span>{offer.mark}</span>
        </div>
      ) : null}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={coverImage[0].src} width="260" height="200" alt={coverImage[0].alt}></img>
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price.value}</b>
            <span className="place-card__price-text">&#47;&nbsp;{offer.price.period}</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${20 * offer.rating.starValue}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{offer.name}</a>
        </h2>
        <p className="place-card__type">{offer.features.placeType}</p>
      </div>
    </article>
  );
}

export default PlaceCard;