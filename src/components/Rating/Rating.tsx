'use client';

import { useEffect, useState } from 'react';
import StarIcon from './star.svg';
import cn from 'classnames';
import { RatingProps } from './RatingProps';
import styles from './Rating.module.css';

export const Rating = ({
  isEditable = false,
  rating,
  setRating,
  ...props
}: RatingProps): JSX.Element => {
  const [ratingArray, setratingArray] = useState<JSX.Element[]>(
    new Array(5).fill(<></>)
  );

  useEffect(() => {
    constructRating(rating);
  }, [rating]);

  const constructRating = (currrentRating: number) => {
    const updatedArray = ratingArray.map((r: JSX.Element, i: number) => (
      <StarIcon
        key={i}
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        className={cn(styles.star, {
          [styles.filled]: i < currrentRating,
        })}
      />
    ));

    setratingArray(updatedArray);
  };

  return (
    <div {...props} className="flex">
      {ratingArray.map((r, i) => (
        <span key={i}>{r}</span>
      ))}
    </div>
  );
};
