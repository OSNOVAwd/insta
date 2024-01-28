/*const en = document.querySelector('item-1')
const uz = document.querySelector('item-2')
const ru = document.querySelector('item-3')
const main = document.querySelector('main')



en.addEventListener('click', () => {
    en.classList.add('active')
    uz.classList.remove('active')
    ru.classList.remove('active')




    main.innerHTML = `
    <div class="card">
      <img src="https://menshaircuts.com/wp-content/uploads/2023/01/tp-simple-hair-style-men.jpg" alt="">
      <h2>My Name is Tor</h2>
      <h2>I'm Web Developer</h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque doloremque vel rem eveniet quae nostrum, id laudantium distinctio eligendi nisi doloribus, laboriosam minima maiores ab nobis optio earum dolor praesentium? Dolor alias officiis, suscipit sequi minus voluptate commodi nulla recusandae?
      </p>
    </div> 
  `
})


uz.addEventListener('click', () => {
    uz.classList.add('active')
    en.classList.remove('active')
    ru.classList.remove('active')


    main.innerHTML = `
    <div class="card">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA77V8S58zT4biESDjg3Atwq9vKwUqcV4DUA&usqp=CAU" alt="">
        <h2>Ozodbek Nazarbekov</h2>
        <h2>San'at va Madaniyat Vaziri</h2> 
        <p>
        2002-yildan 2008-yilgacha „Oʻzbeknavo“ estrada birlashmasida yakkaxon xonanda sifatida faoliyat yuritgan. Marhum xonanda Muhriddin Xoliqovning taniqli shogirdlaridan biri. 2006-yildan Respublika miqyosidagi davlat tadbirlarida: Oʻzbekiston Respublikasi Konstitutsiyasi, Navroʻz umumxalq bayrami va Mustaqillik tantanalarida faol ishtirok etib kelmoqda. Oʻzbekistonning barcha viloyatlarida oʻzining yakkaxon konsert dasturlarini namoyish etgan.
        </p>
        </div>
        `
})


uz.addEventListener('click', () => {
    ru.classList.add('active')
    uz.classList.remove('active')
    en.classList.remove('active')


    main.innerHTML = `
    <div class = "card">
    <img src="https://static2.tgstat.ru/channels/_0/11/118bf3b9e1313a71d7d1d97c10f9eea7.jpg" alt="">
    <h2>Юрий Шатунов</h2>
    <h2>Текст песни Юра Шатунов - Не бойся</h2>
    <p>
    В этом доме вдвоём, тишина ты и я
    Ветер песню поёт под оркестр сентября
    А по окнам стучит, обижается дождь
    Он ревнует тебя, злится он - ну и что ж
    Злится он - ну и что ж
    Злится он - ну и что ж
    
    Не бойся, не бойся, не бойся!
    Ведь я не отдам тебя никому
    И пусть не надеется осень
    В холодную ночь мне не быть одному
    Не бойся, не бойся, не бойся!
    Пусть ветер задул свечу на окне
    За окнами прячется осень,  
    </p>
    </div>
    `
})


*/

const en = document.querySelector('.item-1')
const uz = document.querySelector('.item-2')
const ru = document.querySelector('.item-3')
const main = document.querySelector('main')


en.addEventListener('click', () => {
  en.classList.add('active')
  uz.classList.remove('active')
  ru.classList.remove('active')

  main.innerHTML = `
    <div class="card">
      <img src="https://menshaircuts.com/wp-content/uploads/2023/01/tp-simple-hair-style-men.jpg" alt="">
      <h2>My Name is Tor</h2>
      <h2>I'm Web Developer</h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque doloremque vel rem eveniet quae nostrum, id laudantium distinctio eligendi nisi doloribus, laboriosam minima maiores ab nobis optio earum dolor praesentium? Dolor alias officiis, suscipit sequi minus voluptate commodi nulla recusandae?
      </p>
    </div> 
  `
})

uz.addEventListener('click', () => {
  uz.classList.add('active')
  en.classList.remove('active')
  ru.classList.remove('active')
  
  main.innerHTML = `
    <div class="card">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA77V8S58zT4biESDjg3Atwq9vKwUqcV4DUA&usqp=CAU" alt="">
      <h2>Ozodbek Nazarbekov</h2>
      <h2>San'at va Madaniyat Vaziri</h2>
      <p>
      2002-yildan 2008-yilgacha „Oʻzbeknavo“ estrada birlashmasida yakkaxon xonanda sifatida faoliyat yuritgan. Marhum xonanda Muhriddin Xoliqovning taniqli shogirdlaridan biri. 2006-yildan Respublika miqyosidagi davlat tadbirlarida: Oʻzbekiston Respublikasi Konstitutsiyasi, Navroʻz umumxalq bayrami va Mustaqillik tantanalarida faol ishtirok etib kelmoqda. Oʻzbekistonning barcha viloyatlarida oʻzining yakkaxon konsert dasturlarini namoyish etgan.
      </p> 
    </div> 
  `
})

ru.addEventListener('click', () => {
  ru.classList.add('active')
  uz.classList.remove('active')
  en.classList.remove('active')
  
  main.innerHTML = `
    <div class="card">
      <img src="https://static2.tgstat.ru/channels/_0/11/118bf3b9e1313a71d7d1d97c10f9eea7.jpg" alt="">
      <h2>Юрий Шатунов</h2>
      <h2>Текст песни Юра Шатунов - Не бойся</h2>
      <p>
      В этом доме вдвоём, тишина ты и я
      Ветер песню поёт под оркестр сентября
      А по окнам стучит, обижается дождь
      Он ревнует тебя, злится он - ну и что ж
      Злится он - ну и что ж
      Злится он - ну и что ж
      
      Не бойся, не бойся, не бойся!
      Ведь я не отдам тебя никому
      И пусть не надеется осень
      В холодную ночь мне не быть одному
      Не бойся, не бойся, не бойся!
      Пусть ветер задул свечу на окне
      За окнами прячется осень,  
      </p>
    </div> 
  `
})


const username = document.querySelector('span');
const button = document.querySelector('button');
const text = document.querySelector('.text')

button.addEventListener('click', () => {
  username.push(text.value)
})



const href = document.getElementsByClassName(".a")


function login(){
  document.getElementById("container0").style.display = "block";
  document.getElementById("container1").style.display = "none";
}



