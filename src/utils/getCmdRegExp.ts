const ALIAS = '/';
function getCmdRegExp(command: string): RegExp {
  return new RegExp(`^(${ALIAS}${command})`, 'i');
}

export default getCmdRegExp;
