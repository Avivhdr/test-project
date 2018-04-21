import string from 'absoluteImport';

// require('./login.es6'); // commonJS
import login from './login.es6';
import styles from '../css/app.css';

console.log('App Loaded');
document.writeln('Welcome From app.js!');

console.log('app styles: ');
console.dir(styles);

console.log(string);

login('admin', 'radical');

const x = () => {
  debugger;
  console.log(5);
};

x();
