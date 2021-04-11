let search_input = document.querySelector("#search_input");

search_input.addEventListener("keyup", function(e){
  let search_item = e.target.value.toLowerCase();
  let target_item = document.querySelectorAll(".table_body .item");
  
  target_item.forEach(function(item){
    if(item.textContent.toLocaleLowerCase().indexOf(search_item) != -1){
      item.closest(".item").style.display ="block";
    } else {
      item.closest(".item").style.display ="none";
    }
  })
})