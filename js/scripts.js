// business logic



function Ticket() {
  this.price = 0;
  this.movie = '';
  this.time = '';
  this.age = '';
}

Ticket.prototype.calc = function() {

  var message = `You've selected a ${this.age} ticket to see ${this.movie} at ${this.time}`
  return message;
}


$(document).ready(function(){

  $('form#inputform').submit(function(event){
    event.preventDefault();

    var newTicket = new Ticket();

    newTicket.age = $('#ageinput').val();
    newTicket.movie = $('#movieinput').val();
    newTicket.time = $('input:radio[name=time]:checked').val();

    console.log(newTicket);

    var resultMessage = newTicket.calc();

    // var all = (age + ', ' + movie + ', ' + time);

    $('#tixprice').text(resultMessage);
    $('#resultsdiv').fadeIn();


  });

});
