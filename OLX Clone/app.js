function signup() {
    var a = document.getElementById('semail').value
    var b = document.getElementById('spass').value
    var c = document.getElementById('sname').value
    localStorage.setItem('email', a)
    localStorage.setItem('pass', b)
    localStorage.setItem('name', c)
    location.href = 'login.html'
}

function login() {
    var a = document.getElementById('lemail').value
    var b = document.getElementById('lpass').value
    var getemail = localStorage.getItem('email')
    var getpass = localStorage.getItem('pass')
    if (a == getemail && b == getpass) {
        alert('user login successfully')
        location.href = 'index.html'
    }
    else {
        alert('data not found')
        location.href = 'signup.html'
    }
}
let a = document.getElementById('sell');

function mainlogo() {
    location.href = 'index.html'
}

function back1() {
    location.href = 'sell.html'
}

function back() {
    location.href = 'index.html';
}
function showseccol() {
    let disp = document.getElementById('secondcol-4');
    disp.style.display = 'block';
}
function showthirdcol() {
    let disp = document.getElementById('thirdcol-4');
    disp.style.display = 'block';
}
function addpost() {
    location.href = 'addpost.html'
}





// addpost
// var apnd=document.getElementById('postnow');
// apnd.addEventListener('click',function(){
//     var apnd=document.getElementById('box')
//     var fdiv= document.createElement('div')
//     //apnd.appendChild(fdiv)
//     fdiv.className='col-lg-3'
//     var sdiv= document.createElement('div')
//     sdiv.setAttribute('class','card')
//     sdiv.setAttribute('style','width:18rem')
//     fdiv.appendChild(sdiv)
//     var img=document.createElement('img')
//     img.setAttribute('src','./images/olxpic.jpg')
//     img.setAttribute('class','card-img-top')
//     sdiv.appendChild(img)
//     var tdiv=document.createElement('div')
//     tdiv.setAttribute('class','card-body')
//     sdiv.appendChild(tdiv)
//     var ptag=document.createElement('p')
//     var pid=document.getElementById('exampleFormControlTextarea1').value
//     var ptagtxt = document.createTextNode(pid)
//     ptag.appendChild(ptagtxt)
//     var h5tag = document.createElement('h5')
//     h5tag.setAttribute('class','card-title')
//     var h5tagtxt = document.createTextNode('Rs')
//     h5tag.appendChild(h5tagtxt)
//     tdiv.appendChild(ptag)
//     tdiv.appendChild(h5tag)
//     var spn= document.createElement('span')
//     var spntxt=document.getElementById('examplePrice').value
//     spnget=document.createTextNode(spntxt)
//     spn.appendChild(spnget)
//     h5tag.appendChild(spn)
//     console.log(apnd)

// });

function descpt(){
    location.href='description.html'
}


var apnd = document.getElementById('postnow');
apnd.addEventListener('click', function () {
    let lst = document.getElementById('lastmien');
    console.log(lst);
});