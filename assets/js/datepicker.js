$(document).ready(function () {

    function pad(n, width, z) {
        z = z || '0';
        n = n + '';
        return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
      }

    $('#uppdragsstart').calendar({
        monthFirst: false,
        type: 'date',
        formatter: {
          date: function (date, settings) {
            if (!date) return '';
            var day = date.getDate();
            var month = date.getMonth() + 1;
            var year = date.getFullYear();
            return year + '-' + pad(month, 2) + '-' + pad(day, 2);
          }
        }
      });
    
});
