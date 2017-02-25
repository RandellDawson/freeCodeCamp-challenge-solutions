/* Friendly Date Ranges

Convert a date range consisting of two dates formatted as YYYY-MM-DD into a more
readable format.

The friendly display should use month names instead of numbers and ordinal dates instead of
cardinal (1st instead of 1).

Do not display information that is redundant or that can be inferred by the user: if the date range
ends in less than a year from when it begins, do not display the ending year.

Additionally, if the date range begins in the current year (i.e. it is currently the year 2016) and ends
within one year, the year should not be displayed at the beginning of the friendly range.

If the range ends in the same month that it begins, do not display the ending year or month.

Examples:

makeFriendlyDates(["2016-07-01", "2016-07-04"]) should return ["July 1st","4th"]

makeFriendlyDates(["2016-07-01", "2018-07-04"]) should return ["July 1st, 2016", "July 4th, 2018"].

Code by: Randell Dawson
http://www.freecodecamp.com/rmdawson71
*/


function getMonth(m) {
  return {1:'January',2:'February',3:'March',4:'April',5:'May',6:'June',
    7:'July',8:'August',9:'September',10:'October',11:'November',12:'December'}[m];
}
function ending(day) {
  day = day.toString();
  if (day[day.length-1] == 1 && day != 11) {return 'st';}
  else if (day[day.length-1] == 2 && day != 12) {return 'nd';}
  else if (day[day.length-1] == 3 && day != 13) {return 'rd';}
  return 'th';
}

function convert(num) {return parseInt(num,10);}

function makeFriendlyDates(arr) {
  function getDateObject(a) {
    a = a.split('-').map(convert);
    return {'year':a[0],'month':a[1],'day':a[2]};
  }

  function isLessThanYear() {
    var yearDiff = end.year - start.year;
    if (yearDiff === 0)  return true;
    else if (yearDiff === 1) {
      if (end.month < start.month)  return true;
      else if (start.month == end.month && end.day < start.day) return true;
    }
    return false;
  }

  var start = getDateObject(arr[0]);
  var end = getDateObject(arr[1]);
  var currentYear = 2016; // test cases assume current year is 2016
  var first = getMonth(start.month) + ' '+start.day+ending(start.day);
  var second = getMonth(end.month) + ' ';

  if (start.year == currentYear) { // // start if current year is same as start year
    if (start.month == end.month)  second = end.day+ending(end.day);
    else if (!isLessThanYear()) {
      first += ', '+start.year;
      second += end.day+ending(end.day)+ ', '+end.year;
    }
    else second += end.day+ending(end.day);
  }  // end if current year is same as start year
  else {  // start year is not current year
    first += ', '+start.year;
    if (start.month == end.month && start.year == end.year)
      second = end.day+ending(end.day);
    else if (!isLessThanYear())
      second += end.day+ending(end.day)+ ', '+end.year;
    else
      second += end.day+ending(end.day);
  } // end if start is not current year

  if (arr[0] == arr[1]) { return [first];}
  return [first,second];
}

makeFriendlyDates(['2016-07-01', '2016-07-04']);
