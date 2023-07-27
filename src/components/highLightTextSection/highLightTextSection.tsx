import { Operation } from '@/constants/textConstants';
import { DiffObject } from '@/types';
import InsertSpan from '../insertSpan/insertSpan';
import DeleteSpan from '../deleteSpan/deleteSpan';
import styles from './highLightTextSection.module.css';

interface Props {
  diffObjects: Array<DiffObject>;
}

const renderWord = (
  operation: string | number,
  word: string,
  index: number
) => {
  switch (operation) {
    case Operation.Insertion:
      return <InsertSpan key={index}>{word}</InsertSpan>;
    case Operation.Deletion:
      return <DeleteSpan key={index}>{word}</DeleteSpan>;
    default:
      return <span key={index}>{word}</span>;
  }
};

const HighLightTextSection = ({ diffObjects }: Props) => {
  return (
    <div className={styles.textContainer}>
      {diffObjects.map((diffObject: DiffObject, i: number) => {
        const operation = diffObject[0];
        const word = diffObject[1];
        return renderWord(operation, word.toString(), i);
      })}
    </div>
  );
};

export default HighLightTextSection;
