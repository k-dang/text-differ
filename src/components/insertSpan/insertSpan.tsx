import styles from './insertSpan.module.css';

interface props {
  children: string;
}

const InsertSpan = ({ children }: props) => {
  return <span className={styles.ins}>{children}</span>;
};

export default InsertSpan;
