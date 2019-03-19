// business logic



function Ticket() {
  this.price = 0;
  this.movie = '';
  this.time = '';
  this.age = '';
  this.movieVal = '';
}

Ticket.prototype.displayMessage = function() {
  if (this.movieVal === 'blank') {
    return this.movie;
  } else {
    var message = `You've selected a ${this.age} ticket to see ${this.movie} at ${this.time}`
    return message;
  }
}

// Ticket.protoype.blankCheck = function() {
//   if (this.movie === 'blank') {
//
//   }
// }

// Ticket.protoype.convert() {
//   if (this.movie === 'tit') {
//     this.movie = 'Titanic';
//   } else if (this.movie === 'bttf') {
//     this.movie = 'Back to the Future';
//   } else {
//
//   }
// }


$(document).ready(function(){

  $('form#inputform').submit(function(event){
    event.preventDefault();

    var newTicket = new Ticket();

    newTicket.age = $('#ageinput').val();
    newTicket.movie = $('#movieinput option:selected').text();
    newTicket.time = $('input:radio[name=time]:checked').parent().text();
    newTicket.movieVal = $('#movieinput').val();

    // console.log(newTicket);

    var resultMessage = newTicket.displayMessage();

    // var all = (age + ', ' + movie + ', ' + time);

    $('#displaymsg').text(resultMessage);
    $('#resultsdiv').fadeIn();


  });

});
