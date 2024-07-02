export default function hasValuesFromArray(Set, arr) {
  return arr.every((value) => Set.has(value));
}
