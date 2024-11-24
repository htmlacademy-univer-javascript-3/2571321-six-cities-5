import classNames from 'classnames';
import { Link } from 'react-router-dom';
import BookmarkButton from '@/components/bookmark-button';
import Rating from '@/components/rating';
import { OfferEntity } from '@/types/offer';
import { Point } from '@/types/point';
import offersToPoints from '@/utils/offers-to-points';

type OfferCardProps = {
  offer: OfferEntity;
  type: 'Main' | 'Favorites' | 'Nearby';
  onOfferSelect?: (point: Point | undefined) => void;
};

function OfferCard({
  offer,
  type,
  onOfferSelect,
}: OfferCardProps): JSX.Element {
  const coverImage = offer.images.filter((el) => el.isCoverImage);
  const offerPoint = offersToPoints([offer])[0];

  let cardClassName: string;
  let imageWrapperClassName: string;
  let imageWidth: string;
  let imageHeight: string;

  switch (type) {
    case 'Main':
      cardClassName = 'cities__card';
      imageWrapperClassName = 'cities__image-wrapper';
      imageWidth = '260';
      imageHeight = '200';
      break;
    case 'Favorites':
      cardClassName = 'favorites__card';
      imageWrapperClassName = 'favorites__image-wrapper';
      imageWidth = '150';
      imageHeight = '110';
      break;
    case 'Nearby':
      cardClassName = 'near-places__card';
      imageWrapperClassName = 'near-places__image-wrapper';
      imageWidth = '260';
      imageHeight = '200';
      break;
  }

  return (
    <article
      className={classNames(cardClassName, 'place-card')}
      onMouseOver={onOfferSelect ? () => onOfferSelect(offerPoint) : undefined}
      onMouseLeave={onOfferSelect ? () => onOfferSelect(undefined) : undefined}
    >
      {offer.mark ? (
        <div className="place-card__mark">
          <span>{offer.mark}</span>
        </div>
      ) : null}
      <div
        className={classNames(
          imageWrapperClassName,
          'place-card__image-wrapper'
        )}
      >
        <Link to={`/offer/${offer.id}`}>
          <img
            className="place-card__image"
            src={coverImage[0].src}
            width={imageWidth}
            height={imageHeight}
            alt={coverImage[0].alt}
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price.value}</b>
            <span className="place-card__price-text">
              &#47;&nbsp;{offer.price.period}
            </span>
          </div>
          <BookmarkButton marked={type === 'Favorites'} />
        </div>
        <Rating
          starValue={offer.rating.starValue}
          containerClassName={'place-card__rating'}
          starsClassName={'place-card__stars'}
        />
        <h2 className="place-card__name">
          <Link to={`/offer/${offer.id}`}>{offer.name}</Link>
        </h2>
        <p className="place-card__type">{offer.features.placeType}</p>
      </div>
    </article>
  );
}

export default OfferCard;