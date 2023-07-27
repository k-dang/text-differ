import { useState, ChangeEvent } from 'react';
import { diff_match_patch } from 'diff-match-patch';
import styles from './comparator.module.css';
import HighLightTextSection from '../highLightTextSection/highLightTextSection';

const Comparator = () => {
  const [originalText, setOriginalText] = useState('');
  const [changedText, setChangedText] = useState('');

  // const [redPhrases, setRedPhrases] = useState<Array<Highlight>>([]);
  // const [greenPhrases, setGreenPhrases] = useState<Array<Highlight>>([]);

  const dmp = new diff_match_patch();
  const diff = dmp.diff_main(originalText, changedText);

  const onChangeOriginalText = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setOriginalText(event.target.value);
  };

  const onChangeChangedText = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setChangedText(event.target.value);
  };

  return (
    <div className={styles.container}>
      <div className={styles.textAreaSection}>
        <div className={styles.textAreaContainer}>
          <label className={styles.label}>Original</label>
          <textarea
            className={styles.textArea}
            value={originalText}
            onChange={onChangeOriginalText}
          />
        </div>
        <div className={styles.spacer}></div>
        <div className={styles.textAreaContainer}>
          <label className={styles.label}>Changed Text</label>
          <textarea
            className={styles.textArea}
            value={changedText}
            onChange={onChangeChangedText}
          />
        </div>
      </div>
      <label className={styles.label}>Differences</label>
      <HighLightTextSection diffObjects={diff} />
    </div>
  );
};

export default Comparator;
