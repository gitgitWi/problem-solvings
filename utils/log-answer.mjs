// @ts-check
/**
 * @typedef {Object} AnswerLoggerArgs
 * @property {!any} expected
 * @property {!any} answer
 */

/**
 * @param {AnswerLoggerArgs} param0
 */
export const answerLogger = ({ expected, answer }) => {
  console.assert(
    expected === answer,
    `\nanswer: ${ANSI_COLORS.START}${ANSI_COLORS.RED}%d${ANSI_COLORS.END}\nexpected: ${ANSI_COLORS.START}${ANSI_COLORS.GREEN}%d${ANSI_COLORS.END}\n`,
    answer,
    expected
  );
};

/**
 * @readonly
 * @constant
 * @description
 * - {@link https://en.m.wikipedia.org/wiki/ANSI_escape_code#Colors}
 */
export const ANSI_COLORS = {
  START: '\x1b[',
  END: '\x1b[0m',
  RED: '91m',
  YELLOW: '93m',
  GREEN: '92m',
};
