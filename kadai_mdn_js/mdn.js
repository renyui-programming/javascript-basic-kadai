const today = new Date();
const year = today.getUTCFullYear();
const month = today.getMonth();
const date = today.getDate();

console.log(today.toLocaleDateString("ja-JP-u-ca-japanese"));

const dateToday = () => {
  console.log(year);
  console.log('年');
  console.log(month);
  console.log('月');
  console.log(date);
  console.log('日');
}

dateToday();