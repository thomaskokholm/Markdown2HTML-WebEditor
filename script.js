$(function() {

  $( ".preview-btn" ).click(function() {
      var sin = $("#in").val();
      console.log("in = ", sin);
      var sout = $("#out");
      var arr = new Array();
      arr = sin.split(" ");
      console.log(arr);
      /*
      for(var i = 0; i<arr.length; i++) {
        console.log(arr[i]);
        if(i.match(/\n/g)) {
          arr[i] = "<br />";
        }
      }*/
      sout.html( "<p>" + sin.replace(/(?:\r\n|\r|\n)/g, '<br />') + "</p>");
  });


});
