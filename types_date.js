// date

var today = new Date(); // current date and time

var a = new Date(2000, 0, 1); // months are 0 based
var b = new Date(2000, 0, 1, 0, 0, 0);

a.getMonth(); // 0-11
a.getFullYear(); // YYYY
a.getDate(); // 1-31 day of month
a.getDay(); // 0-6 day of week, 0 = sunday
a.getHours(); // 0-23
a.getTime(); // unix epoch (since 1/1/1970)
