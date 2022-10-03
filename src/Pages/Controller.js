var click = 0;
function CardClick(card){
  click = click + 1;
  console.log(click);
  console.log(card);
  if( card == "card1"){
    if( click == 1 ){
      document.getElementById('card1').classList.add('CardClick');
      document.getElementById('card1').classList.remove('Card');
    }else if( click == 2){
      document.getElementById('card1').classList.remove('CardClick');
      document.getElementById('card1').classList.add('Card');
      click = 0;
    }
  }
  
}


