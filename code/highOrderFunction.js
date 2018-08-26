/* eslint-disable */

  // filter 类型签名 (Hindley-Milner 类型系统)
  filter :: (a → Boolean) → [a] → [a]

  // 一等函数
  const isEven = n => n % 2 === 0;

  // 函数作为参数、返回值
  const filterEven = R.filter(isEven);

  filterEven([1, 2, 3, 4]); //=> [2, 4]

  // 匿名函数与 𝝀 表达式
  const filterEven2 = R.filter(n => n % 2 === 0);
