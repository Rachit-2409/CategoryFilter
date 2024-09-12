let container =  document.getElementById('container')

let getData = async ()=>{
               let data =  await  fetch('https://fakestoreapi.com/products');
               let result = await data.json();
               return result
            }

let displayItems = (value)=>{
    getData().then((element)=>{
            let newArr =  (value === "all") ? element : element.filter(val => val.category === value)
            container.innerHTML = "";
        newArr.forEach((val)=>{
           //Element Creation
        let box = document.createElement('div');
        let image =  document.createElement('img');
        let title = document.createElement('h3');
        let desc =  document.createElement('p');
        let rate =  document.createElement('p');
        let rating =  document.createElement('p');
        let Button = document.createElement('button');

        //Setting  Attribute
        image.setAttribute('src', val.image)
        box.setAttribute('class', 'box');
        title.setAttribute('class', 'title');
        desc.setAttribute('class', 'desc');
        rate.setAttribute('class', 'price');
        rating.setAttribute('class', 'Rating');
        Button.setAttribute('class', "Button");

        //Puting Value
        title.innerText = val.title;
        rate.innerText = val.price;
        rating.innerText = val.rating.rate;
        desc.innerText = val.description.length > 100 ? val.description.substring(0, 100) + '...' : val.description;
        Button.innerText = "Add to Cart"

       box.append(image,title,desc, rate, rating, Button)     
        container.append(box)
           })
        })
        

}

displayItems("all")

//category
//description
//id
//image
//price
//rating
//title