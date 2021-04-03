const emailRegex = /^(([^<>()\[\]\\.,:\s@"]+(\.[^<>()\[\]\\.,:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const $form=document.getElementById("form");

$form.addEventListener("submit",e=>{
  e.preventDefault()
  
  if(e.target.email.value.trim()==="" || emailRegex.test(e.target.value)){
    $form.classList.add("form--error");
  }
});
$form.email.addEventListener("focus",e=>{
  $form.classList.remove("form--error")
})
