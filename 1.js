$(document).ready(function () {
  
$("#field").on("keydown", function(event){
  
    var item;
    var field = document.querySelector( '#field' );
    var text = field.value;
    if(event.which == 13){
      if ( text !== '' ) {
    item = $("<li></li>");
      item.addClass("list-group-item todo-item")
      item.html($(this).val());
      $(this).val("");
      item.click(function() { 
        
        $(this).toggleClass("list-group-item-info");
      });
    field.value = '';
    field.focus();
  }
      $("#list").append(item);     
    }  
  });
  
$(document).on("keydown", function() {
    
    if(event.which == 46){
      
      $("#remove-dialog").modal("show");
      
    }
    
  });
  
var removeItems = function(event){
    
    $(".list-group-item-info").remove();
    $("#remove-dialog").modal("hide");
    
  };
  
$("#remove-dialog").on("keydown",function(event){
    
    if(event.which == 13){
      
      removeItems();
      
    }
    
  });
  
$("#remove-dialog__ok").on("click", removeItems);
  
 });