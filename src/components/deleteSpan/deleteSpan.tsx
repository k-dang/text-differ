import styles from './deleteSpan.module.css';

interface props {
  children: string;
}

const DeleteSpan = ({ children }: props) => {
  return <span className={styles.del}>{children}</span>;
};

export default DeleteSpan;
