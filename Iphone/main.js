const CarouselItem= [
    {
      id: 1,
      img:
        "images/iPhone 2g img.png",
      text:
        "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
        id: 2,
        img:
          "images/iphone 3g img.png",
        text:
          "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
      },
      {
        id: 3,
        img:
          "images/iphone 4 img.png",
        text:
          "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
      },
      {
        id: 4,
        img:
          "images/iphone 5&5c.png",
        text:
          "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
      },
      {
        id: 5,
        img:
          "images/iPhone 6 img.png",
        text:
          "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
      },
      {
        id: 6,
        img:
          "images/iphone 7 img.png",
        text:
          "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
      },
      {
        id: 7,
        img:
          "images/iPhone 8 img.png",
        text:
          "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
      },
      {
        id: 8,
        img:
          "images/iPhonex img.png",
        text:
          "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
      },
      {
        id: 9,
        img:
          "images/iPhone 11 img.png",
        text:
          "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
      },
]


const img = document.getElementById('iphone-img');
const info = document.getElementById('info');

const prevbtn = document.querySelector('.prev-btn')
const nextbtn = document.querySelector('.next-btn')


let currentItem = 0;

//load Initial Item
window.addEventListener('DOMContentLoaded', function(){
    showItem(currentItem);
});

//show item based on iphone

function showItem(iphone){
    const item = CarouselItem[iphone];
    img.src = item.img;
    info.textContent = item.text;
}

nextbtn.addEventListener('click', function(){
    currentItem ++;
    if (currentItem > CarouselItem.length -1){
        currentItem = 0;
    }
    showItem(currentItem);
});

prevbtn.addEventListener('click', function(){
    currentItem --;
    if (currentItem < 0){
      currentItem = reviews.length - 1;
    }
    showItem(currentItem);
  });


  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry)=>{
    console.log(entry)
    if(entry.isIntersecting){
      entry.target.classList.add("show");
    }
    else{
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el)=> observer.observe(el));