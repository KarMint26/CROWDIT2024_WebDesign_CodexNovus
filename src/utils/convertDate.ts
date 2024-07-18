export default function convertDate(date: Date) {
  const res = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  return res;
}
