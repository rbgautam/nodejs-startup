import './basic.css';
import numeral from "numeral";


let coursevalue = numeral(100000).format('$0,0.00');
debugger;
console.log((`Course value is ${coursevalue}`));