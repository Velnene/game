import style from './index.module.scss';
import './index.scss';

console.log(style);
const numbers: number[] = [9, 3, 5];

// Стрелочная функция. Не запнётся ли на ней Internet Explorer?
const doubledNumbers = numbers.map(number => number * 2);

console.log(doubledNumbers); // 4, 6, 10