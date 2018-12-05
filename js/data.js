"use strict";

+function () {
  var now = new Date();
  var month = now.getMonth();
  var day = now.getDate();
  var checkavailInputIn = document.querySelector('.checkavailInput__in');
  var checkavailInputOut = document.querySelector('.checkavailInput__out');
  var defaultMonth = document.querySelectorAll('.checkavailSelect__data');
  checkavailInputIn.value = day;
  checkavailInputOut.value = day + 1;

  for (var i = 0; i < defaultMonth.length; i++) {
    var b = defaultMonth[i].options[month];
    defaultMonth[i].value = b.value;
  }
}();