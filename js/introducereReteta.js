$( "#adaugareMedicamentNou" ).click(function() {
    var tblRow = '<tr>' +
        '<td><input type="text" class="form-control" value="" /></td>' +
        '<td><input type="text" class="form-control" value="" /></td>' +
        '<td><input type="text" class="form-control" value="" /></td>' +
        '</tr>';
    $(tblRow).appendTo("#introducereReteta tbody");
});