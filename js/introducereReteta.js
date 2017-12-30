$( "#adaugareMedicamentNou" ).click(function() {
    var tblRow = '<tr>' +
        '<td><input type="text" class="form-control" value="" /></td>' +
        '<td><input type="text" class="form-control" value="" /></td>' +
        '<td><input type="text" class="form-control" value="" /></td>' +
        '<td><button type="button" onclick="deleteRowFunction(this)" class="btn btn-lg btn-danger">Șterge</button></td>' +
        '</tr>';
    $(tblRow).appendTo("#introducereReteta tbody");
});

function deleteRowFunction(o) {
    var p=o.parentNode.parentNode;
    p.parentNode.removeChild(p);
}