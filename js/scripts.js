// business logic



function Ticket() {
  this.price = 10;
  this.movie = '';
  this.time = '';
  this.age = '';
  this.movieVal = '';
  this.timeInput = ''
}

Ticket.prototype.displayMessage = function() {
  if (this.movieVal === 'blank') {
    return this.movie;
  } else {
    var message = `You've selected a ${this.age} ticket to see ${this.movie} at ${this.time}. The price is $ ${this.price}.`
    return message;
  }
}



Ticket.prototype.priceCalc = function() {



  if (this.age === 'Child') {
    this.price = 3;
    // console.log(this.price);
  } else if (this.age === 'Senior') {
    this.price = 5;
  } else {
    if (this.timeInput === '5') {
      this.price = 5;
    } else if (this.timeInput === '13') {
      this.price = 13;
    }
  }
  console.log(this.timeInput);
  return this.price;
}
//
// // Ticket.protoype.convert() {
// //   if (this.movie === 'tit') {
// //     this.movie = 'Titanic';
// //   } else if (this.movie === 'bttf') {
// //     this.movie = 'Back to the Future';
// //   } else {
// //
// //   }
// // }


$(document).ready(function(){

  $('form#inputform').submit(function(event){
    event.preventDefault();

    var newTicket = new Ticket();

    newTicket.age = $('#ageinput').val();
    // newTicket.timeInput = $('#timeinput').val();
    // console.log(newTicket.age);
    newTicket.movie = $('#movieinput option:selected').text();
    newTicket.time = $('input:radio[name=time]:checked').parent().text();
    newTicket.movieVal = $('#movieinput').val();
    newTicket.timeInput = $('input:radio[name=time]:checked').val();

    // console.log(newTicket);
    // console.log(newTicket.price);
    newTicket.priceCalc();
    // console.log(newTicket.price);
    var resultMessage = newTicket.displayMessage();


    // var all = (age + ', ' + movie + ', ' + time);

    $('#displaymsg').text(resultMessage);
    $('#resultsdiv').fadeIn();


  });

});
