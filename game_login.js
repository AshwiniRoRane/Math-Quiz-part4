
function addUser() {
  player1_name = document.getElementById("player1_name_input").value;
  player2_name = document.getElementById("player2_name_input").value;

    //Set "player1_name" using localStorage.setItem() function
	  //Set "player2_name" using localStorage.setItem() function
    localstorage.setItem("player1_name",player1_name);
    localstorage.setItem("player2_name",player2_name);

    window.location = "game_page.html";
}

