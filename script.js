

let carsindex=0;
let colorindex=0;



const cars = [
  {
    name: "Porche 911",
    description:
      "The Porsche 911 is a legendary sports car known for its iconic design, powerful performance, and agile handling. It combines luxury with speed, featuring a sleek body, turbocharged engine, and a high-quality interior for an exceptional driving experience.",
    color: [
      "cars/porche-black.webp",
      "cars/porche-white.webp",
      "cars/porche-yellow.jpg",
      "cars/porche-red.jpg",
    ],
  },
  {
    name: "Audi RS6 ABT ",
    description:
      "The Audi RS6 ABT is a high-performance sports wagon that combines luxury with extreme power. Enhanced by ABT tuning, it features a more aggressive design, upgraded aerodynamics, and a boosted engine delivering exceptional speed and handling. Perfect for those who seek performance without compromising on practicality",
    color: [
      "cars/audi-black.jpg",
      "cars/audi-white.jpeg",
      "cars/audi-yellow.webp",
      "cars/audi-red.jpg",
     
    ],
  },
 
  {
    name: "BMW M5 ",
    description:
      "The BMW M5 Competition is a high-performance luxury sedan that offers thrilling speed and precision. Equipped with a powerful twin-turbo V8 engine, it delivers exceptional acceleration and dynamic handling. The M5 Competition combines sporty design with advanced technology, making it perfect for those who seek both luxury and adrenaline on the road.",
    color: [
      "cars/bmw-black.jpg",
      "cars/bmw-white.jpg",
      "cars/bmw-yellow.jpg",
      "cars/bmw-red.jpeg",
    ],
  },
  
];



function changeColor(n) {
    document.getElementById("imgSlider").src=cars[carsindex].color[n];
    document.querySelector('.title').textContent=cars[carsindex].name;
    document.querySelector('.description').textContent=cars[carsindex].description;

}



function next() {
    if(carsindex != cars.length-1){
        carsindex+=1;

    }
    else{
        carsindex=0;
    }
changeColor(0);
}

function previous() {
    if(carsindex ==0){
        carsindex=cars.length-1

    }
    else{
        carsindex-=1;
    }
    changeColor(0);

}



