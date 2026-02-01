const noBtn = document.getElementById('No');
const yesBtn = document.getElementById('yes');
const errorText = document.getElementById('errorText');

noBtn.addEventListener('click',()=>{
    noBtn.hidden=true;
    errorText.hidden=false;
    yesBtn.style.width="200px";
    yesBtn.style.height="70px";
    yesBtn.style.fontSize="20px";
    yesBtn.innerText+=" (ulibe choice)😘";
})

yesBtn.addEventListener('click',()=>{
    window.location.href="page2.html"
})

