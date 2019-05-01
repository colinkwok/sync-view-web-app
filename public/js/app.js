console.log("Client side JS")

function progressBarLoop() {
    var progressBar = $('.progressbar');
    var progressSquare = $('#square');
    progressBar.click(function(event) {
      var divOffset = $(this).offset()
      console.log(divOffset);
    })
    setInterval(function(){
        if (player == null || progressBar == null) {
          return;
        }
        var fraction = player.getCurrentTime()/player.getDuration()*100
        progressSquare.css("left", fraction.toString() + "%");
        }, 200);
}

