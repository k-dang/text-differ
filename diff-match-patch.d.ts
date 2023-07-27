declare module 'diff-match-patch' {
  class diff_match_patch {
    constructor();
    diff_main: (text1: string, text2: string) => Array<Array<(number | string)>>;
  }
}
