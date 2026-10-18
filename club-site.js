const join = document.getElementById("jjjoin");

join.addEventListener("click",function afunc(){
    document.getElementById("join").classList.toggle('hovered');
    await(1000);
    document.getElementById("join").classList.toggle('unhover');
});