let treeleft=document.getElementById('leftbranch');
let treeright=document.getElementById('rightbranch');
let rope=document.getElementById('rope');
let ghost=document.getElementById('ghost');
let gostleft=document.getElementById('leftghost');
let gostright=document.getElementById('rightghost');
window.addEventListener('scroll',()=>{
   let value = window.scrollY;
   treeleft.style.left=value * -1.5 +'px'; 
   treeright.style.left=value * 1.5 +'px'; 
   gostleft.style.left=value * -1.5 +'px'; 
   gostright.style.left=value * 1.5 +'px'; 
   rope.style.left=value * -1.5 +'px';
   ghost.style.left=value * -1.5 +'px';
   gostright.style.left=value * -1.5 +'px'; 
   gostleft.style.left=value * 1.5 +'px'; 
})