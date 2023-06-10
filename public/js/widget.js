let open = false;
let  screenHeight = window.screen.height;
let  screenWidth = window.screen.width;
var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
let w = 0;
let h = 0;
let ele = '';



function openSP(){
    ele = document.querySelector('.js__support__chat');

    document.querySelector('.js__support__chat').addEventListener('click', (e)=>{
        let target = e.target;
        let main  =target.closest('.js__support__chat__main');
        let header  =target.closest('.js__support__chat__header');

        if(target.closest('.js__support__chat__close')){
            main.classList.remove('support__chat__main__show');
            header.style.cursor = 'pointer';
            open = false;
        }else if(target.closest('.js__support__chat__header')){
            main.classList.add('support__chat__main__show');
            header.style.cursor = 'move';
            open = true;
        };


    })
}



function contentEditable(){
    const content = document.getElementById('message');
    const place_text = content.getAttribute('data-placeholder');
    console.log(place_text,content.innerHTML);
    content.innerHTML = place_text
    // content.innerHTML === '' && (content.innerHTML = place_text);
    content.addEventListener('focus', function (e) {
        const value = e.target.innerHTML;
        value === place_text && (e.target.innerHTML = '');
    });

    content.addEventListener('blur', function (e) {
        const value = e.target.innerHTML;
        value === '' && (e.target.innerHTML = place_text);
    });
}


function mouseDown(){
    document.querySelector('.js__support__chat').addEventListener('mousedown',(e)=>{
        e = e || window.event;
        e.preventDefault();

        if(open == true){
            pos3 = e.clientX;
            pos4 = e.clientY;

            const styles = window.getComputedStyle(ele);
            w = parseInt(styles.width, 10);
            h = parseInt(styles.height, 10);


            document.onmousemove = elementDrag;
            document.onmouseup = closeDragElement
        }
    });
}

function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    let dy = e.clientY-pos4
    if((((-1*dy) + h)<screenHeight-130) && (((-1*dy) + h)>400)){
        ele.style.height = ((-1*dy) + h) + "px";
    }

    pos1 = pos3 - e.clientX;
    pos3 = e.clientX;
    if((ele.offsetLeft - pos1)>10 && (ele.offsetLeft - pos1)<screenWidth-380){
        ele.style.left = (ele.offsetLeft - pos1) + "px";
    }
}



function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
}


function supportTemplate(){
    let link = ` <link rel="stylesheet" href="https://wagt.space/static/css/widget.css">`
    let template = `<div class="support__chat js__support__chat">
  
    <div class="support__chat__main js__support__chat__main">
        <div class="support__chat__header js__support__chat__header">
            <div class="support__chat__title">
                kimayBu
            </div>
            <div class="support__chat__close js__support__chat__close">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12ZM7.29289 16.7071C6.90237 16.3166 6.90237 15.6834 7.29289 15.2929L10.5858 12L7.29289 8.70711C6.90237 8.31658 6.90237 7.68342 7.29289 7.29289C7.68342 6.90237 8.31658 6.90237 8.70711 7.29289L12 10.5858L15.2929 7.29289C15.6834 6.90237 16.3166 6.90237 16.7071 7.29289C17.0976 7.68342 17.0976 8.31658 16.7071 8.70711L13.4142 12L16.7071 15.2929C17.0976 15.6834 17.0976 16.3166 16.7071 16.7071C16.3166 17.0976 15.6834 17.0976 15.2929 16.7071L12 13.4142L8.70711 16.7071C8.31658 17.0976 7.68342 17.0976 7.29289 16.7071Z" fill="#E66D84"/>
                    </svg>
            </div>
         </div>

         <div class="support__chat__msg">
            <ul class="support__chat__msg__ul">
                <li class="support__chat__msg__li__right">
                    <p class="support__chat__text__right">
                        Hello
                    </p>
                </li>
                <li class="support__chat__msg__li__left">
                    <p class="support__chat__text__right">
                        Hi! How are you? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                    </p>
                </li>
                <li class="support__chat__msg__li__right">
                    <p class="support__chat__text__left">
                        Hi! How are you? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                    </p>
                </li>
                <li class="support__chat__msg__li__left">
                    <p class="support__chat__text__right">
                        Hi! How are you? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                    </p>
                </li>
            </ul>

         </div>

      

         <div class="support__chat__form">
            <div contenteditable="true"
            id="message" class="div__textarea js__msg__textarea" data-placeholder="Type ...">
            </div>

          <div class="support__chat__btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.93935 12.6464L7.69211 11.8973L7.69211 11.8973L7.6921 11.8973C5.3389 11.1129 4.16229 10.7207 4.16229 9.99997C4.16229 9.27921 5.3389 8.88701 7.69212 8.10261L16.2053 5.26488C17.8611 4.71295 18.689 4.43699 19.126 4.87401C19.563 5.31102 19.287 6.13892 18.7351 7.79471L15.8974 16.3079L15.8974 16.3079L15.8974 16.3079C15.113 18.6611 14.7208 19.8377 14 19.8377C13.2793 19.8377 12.8871 18.6611 12.1026 16.3079L11.3536 14.0606L15.7071 9.70708C16.0976 9.31656 16.0976 8.68339 15.7071 8.29287C15.3166 7.90234 14.6834 7.90234 14.2929 8.29287L9.93935 12.6464Z" fill="#6A0EB0"/>
                </svg>
          </div>
         </div>
  
    </div>
</div>`

    let head = document.querySelector("head");
    let body = document.getElementsByTagName('body')[0];

    // head.innerHTML = link;
    // body.innerHTML = template;
    head.insertAdjacentHTML("afterend", link)
    body.insertAdjacentHTML("afterend", template)
}



document.addEventListener("DOMContentLoaded", ()=>{
    supportTemplate()
    contentEditable()
    mouseDown()
    openSP()
})
