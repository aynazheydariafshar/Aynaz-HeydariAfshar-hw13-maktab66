$(document).ready(function(){
    $("#btn-add").click(function(e){
        e.preventDefault();
        let count = $(".item").length + 1;
        $(".first").before(''+
        '<div class="item">'+
            '<tr class="first-' + count + '">'+
                '<td scope="row">'+
                    '<button type="button" class="btn btn-danger"><i class="bi bi-trash-fill mx-1"></i>Delete</button>'+
                    '<button type="button" class="btn btn-primary"><i class="bi bi-sticky-fill mx-1"></i>clone</button>'+
                '</td>'+
                '<td>'+
                    '<input type="number" class="form-control" id="inputNumber" name="number">'+
                '</td>'+
                '<td>'+
                    '<input type="text" class="form-control" id="inputText" name="text">'+
                '</td>'+
                '<td>'+
                    '<input class="form-check-input" type="radio" name="status" id="typeNew">'+
                    '<label class="form-check-label me-4" for="typeNew">New</label>'+
                    '<input class="form-check-input" type="radio" name="status" id="typeInprogess">'+
                    '<label class="form-check-label me-4" for="typeInprogess">In progess</label>'+
                    '<input class="form-check-input" type="radio" name="status" id="typeConfirmed">'+
                    '<label class="form-check-label me-4" for="typeConfirmed">Confirmed</label>'+
                '</td>'+
            '</tr>'+
        '</div>')
    });
});