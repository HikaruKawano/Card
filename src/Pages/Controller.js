var click = 0;
function CardClick(){
  click = click + 1;
  console.log(click);

  if( click == 1 ){
    document.getElementById('card').classList.add('CardClick');
    document.getElementById('card').classList.remove('Card');
  }else if( click == 2){
    document.getElementById('card').classList.remove('CardClick');
    document.getElementById('card').classList.add('Card');
    click = 0;
  }
}


