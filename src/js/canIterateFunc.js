export default function canIterate(inspectObj) {
  if (inspectObj == null) {
    return false;
  }
  return typeof inspectObj[Symbol.iterator] === 'function';
}
