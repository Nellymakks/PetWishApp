$(function(){
    $('button').click(function(event){
        $('ul').append(
            "<li>" + ['MONKEY', 'HORSE', 'PARROT'][Math.floor(Math.random() *3)] +
            "</li>"
        )
    });
// To remove a pet from the list
    $('ul').on('click', 'li', function(event){
        this.remove();
    });
});

// $('li').click(function(event) {
//     this.remove();
//   });