import './basic.css';
import numeral from "numeral";

/* eslint-disable no-console */
let coursevalue = numeral(100000).format('$0,0.00');
debugger;
console.log((`Course value is ${coursevalue}`));