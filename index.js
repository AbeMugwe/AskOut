const text = `Hi YE YE guess who it is?.. It's Abe the one and only obviously, I'm sure you're wondering what this wholeee code is about. But before I tell you the reason let me just talk about you. So who is Sai to Abraham?😁...`;
const second=`Sai is very special to me. I love your smile, it always brightens my day when I see it.
            I love your laugh it always warms my heart when I hear it.
            You are thoughtful, you always ensure that I'm okay and feel bad for the smallest things.
            You are beautiful, like VERRY beautiful even though you deny it😂
            You always try your best to give time for me no matter how hard it is and I always appreciate it.`


    const speed = 35; // milliseconds per letter
    let i = 0;
    let j=0;

    const container = document.getElementById("typewriter");
    const conatiner2=document.getElementById("type2");
    const container3=document.getElementById("text_button")
    const cursor = `<span class="cursor"></span>`;
    

    function typeText() {
      if (i <= text.length) {
        container.innerHTML = text.substring(0, i) + cursor;
        i++;
        setTimeout(typeText, speed);
      }
      if(i>text.length && j<=second.length){
        conatiner2.innerHTML=second.substring(0,j)+ cursor;
        j++;
        setTimeout(typeText,50);
      }
      else if(i>text.length && j>text.length){
        container3.innerHTML=`<p class="three">
            So why am I saying this? Press the button to know.
        </p>
        <a href="question.html">
        <button class="btn-class-name">
        <span class="back"></span>
        <span class="front"></span>
        </button>
         </a>`
      }
      
    }

   

    window.onload = typeText;
