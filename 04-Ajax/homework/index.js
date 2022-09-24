$('#boton').click( function() {
    $('#lista').empty();
    $.get('http://localhost:5000/amigos', function(response){
        response.forEach( amigo => $(`<li>${amigo.name} ${amigo.id}</li>`).appendTo('#lista'))
    })
})

$('#search').click( function() {
    $.get(`http://localhost:5000/amigos/${$('#input').val()}`, function(response){
        $('#amigo').text(response.name);
        $('#input').val('');
    })
})

$('#delete').click( function() {
    $.ajax({
        url: `http://localhost:5000/amigos/${$('#inputDelete').val()}`,
        type: 'DELETE',
        success: function() {
            $('#success').text('Tu amigo fue borrado con exito')
            $('#inputDelete').val('');
        }
    })
})
