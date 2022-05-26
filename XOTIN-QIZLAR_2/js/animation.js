// ----------------------------------------------------------

$(window).on('load',function(){
    $(".loader").fadeOut();
    $("#preloder").delay(200).fadeOut("slow");
});

//-----------------------------------------------------------


// --------\/--ACTIVE--\/---------

$(function(){
  let Statistics__max__link = document.querySelectorAll('.Statistics__max__link');

  for(let i = 0; i<Statistics__max__link.length; i++){
      Statistics__max__link[i].addEventListener('click',function(){
          for(let j = 0; j<Statistics__max__link.length;j++){
              Statistics__max__link[j].classList.remove('active');
          }
          this.classList.add('active');

      })
  }
});


$(function(){
  let Statistics__max__link = document.querySelectorAll('.cursor-pointer');

  for(let i = 0; i<Statistics__max__link.length; i++){
      Statistics__max__link[i].addEventListener('click',function(){
          for(let j = 0; j<Statistics__max__link.length;j++){
              Statistics__max__link[j].classList.remove('active');
          }
          this.classList.add('active');

      })
  }
});


$(function(){
  let Statistics__max__link = document.querySelectorAll('.news__page__link');

  for(let i = 0; i<Statistics__max__link.length; i++){
      Statistics__max__link[i].addEventListener('click',function(){
          for(let j = 0; j<Statistics__max__link.length;j++){
              Statistics__max__link[j].classList.remove('active');
          }
          this.classList.add('active');

      })
  }
});
// --------/\--ACTIVE--/\---------