import { AdvantagesProps } from './AdvantagesProps';
import styles from './Advantages.module.css';
import CheckIcon from './check.svg';

export const Advantages = ({ advantages }: AdvantagesProps): JSX.Element => {
  return (
    <>
      {advantages.map((a) => (
        <div key={a._id} className={styles.advantage}>
          <CheckIcon />
          <div>
            <div className={styles.title}>{a.title}</div>
            <div>{a.description}</div>
          </div>
        </div>
      ))}
    </>
  );
};
