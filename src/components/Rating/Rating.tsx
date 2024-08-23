'use client';

import {
  useEffect,
  useState,
  KeyboardEvent,
  forwardRef,
  ForwardedRef,
  useRef,
} from 'react';
import StarIcon from './star.svg';
import cn from 'classnames';
import { RatingProps } from './RatingProps';
import styles from './Rating.module.css';

const RatingRef = (
  {
    isEditable = false,
    rating,
    setRating,
    error,
    tabIndex,
    ...props
  }: RatingProps,
  ref: ForwardedRef<HTMLDivElement>
): JSX.Element => {
  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(
    new Array(5).fill(<></>)
  );

  const ratingArrayRef = useRef<(HTMLSpanElement | null)[]>([]);

  const computeFocus = (r: number, i: number): number => {
    if (!isEditable) {
      return -1;
    }
    if (!rating && i == 0) {
      return tabIndex ?? 0;
    }

    if (r == i + 1) {
      return tabIndex ?? 0;
    }

    return -1;
  };

  useEffect(() => {
    constructRating(rating);
  }, [rating, tabIndex]);

  const constructRating = (currentRating: number) => {
    const updatedArray = ratingArray.map((r: JSX.Element, i: number) => (
      <span
        key={i}
        className={cn(styles.star, {
          [styles.filled]: i < currentRating,
          [styles.editable]: isEditable,
        })}
        onMouseEnter={() => changeDisplay(i + 1)}
        onMouseLeave={() => changeDisplay(rating)}
        onClick={() => onClick(i + 1)}
        tabIndex={computeFocus(rating, i)}
        onKeyDown={handleKey}
        ref={(r) => {
          if (r) {
            ratingArrayRef.current?.push(r);
          }
        }}
        role={isEditable ? 'slider' : ''}
        aria-valuenow={rating}
        aria-valuemin={1}
        aria-valuemax={5}
        aria-label={isEditable ? 'Укажите рейтинг' : 'рейтинг' + rating}
      >
        <StarIcon />
      </span>
    ));

    setRatingArray(updatedArray);
  };

  const changeDisplay = (i: number) => {
    if (!isEditable) {
      return;
    }
    constructRating(i);
  };

  const onClick = (i: number) => {
    if (!isEditable || !setRating) {
      return;
    }
    setRating(i);
  };

  const handleKey = (e: KeyboardEvent) => {
    if (!isEditable || !setRating) {
      return;
    }
    if (e.code == 'ArrowRight' || e.code == 'ArrowUp') {
      if (!rating) {
        setRating(1);
      } else {
        e.preventDefault();
        setRating(rating < 5 ? rating + 1 : 5);
      }
      ratingArrayRef.current[rating]?.focus();
    }
    if (e.code == 'ArrowLeft' || e.code == 'ArrowDown') {
      if (!rating) {
        setRating(1);
      } else {
        e.preventDefault();
        setRating(rating > 1 ? rating - 1 : 1);
      }
      ratingArrayRef.current[rating - 2]?.focus();
    }
  };

  return (
    <div
      ref={ref}
      {...props}
      className={cn(styles.ratingWrapper, {
        [styles.error]: error,
      })}
    >
      {ratingArray.map((r, i) => (
        <span key={i}>{r}</span>
      ))}
      {error && <span className={styles.errorMessage}>{error.message}</span>}
    </div>
  );
};

export const Rating = forwardRef(RatingRef);
