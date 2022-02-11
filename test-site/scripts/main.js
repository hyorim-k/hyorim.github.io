let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/bubblesort.png'){
        myImage.setAttribute('src', 'images/bubble_sort2.png');
    } else {
        myImage.setAttribute ('src', 'images/bubblesort.png');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h3');

function setUserName(){
    let myName = prompt('Please enter your name.');
    if(!myName || myName === null)
    {
        setUserName();
    } else {
        localStorage.setItem('name', myName);   //localStorage라는 API를 사용해 'name'이라는 데이터 항목을 만들고, 거기에 이름을 저장하기 위해 setItem()함수 사용
        myHeading.textContent = 'Welcome, ' + myName;
    }
}

if(!localStorage.getItem('name'))   //name 데이터 아이템이 존재하지 않는다면
{
    setUserName();  //이름 값 받아온다.
} else //nmae 데이터 받았으면
{
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Welcome, ' + storedName;
}
 
myButton.onclick = function() {
    setUserName();
}
