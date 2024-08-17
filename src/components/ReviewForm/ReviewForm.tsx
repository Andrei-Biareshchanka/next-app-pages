import cn from 'classnames';
import { ReviewFormProps } from './ReviewFormProps';
import styles from './ReviewForm.module.css';
import { Button, Input, Rating, Textarea } from '@/components';
import CrossIcon from './cross.svg';

export const ReviewForm = ({
  productId,
  className,
  ...props
}: ReviewFormProps): JSX.Element => {
  return (
    <>
      <div className={cn(className, styles.reviewForm)} {...props}>
        <Input placeholder="Имя" />
        <Input className={styles.title} placeholder="Заголовок отзыва" />
        <div className={styles.rating}>
          <span>Оценка:</span>
          <Rating rating={0} />
        </div>
        <Textarea className={styles.description} placeholder="Текст отзыва" />
        <div className={styles.submit}>
          <Button appearance="primary">Отправить</Button>
          <span className={styles.info}>
            * Перед публикацией отзыв пройдет предварительную модерацию и
            проверку
          </span>
        </div>
      </div>
      <div className={styles.success}>
        <div className={styles.successTitle}>Ваш отзыв отправлен</div>
        <div>Спасибо, ваш отзыв будет опубликован после проверки</div>
        <CrossIcon className={styles.cross} />
      </div>
    </>
  );
};
