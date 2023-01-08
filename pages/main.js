import { getDefaultFormatCodeSettings } from 'typescript';
import './main.css';



import products from './products.json'

const mainTopic = document.querySelector('.main-topic');
function createCards(productsArr) {
    mainTopic.innerHTML = "";
    productsArr.forEach(el => {
        mainTopic.innerHTML += 
        `
        <div class="market-section">
                    <div class="goods-section">
                        <div class="goods-section__image">
                            <img src="${el.images[0]}" alt="image-goods" class="goods__image">
                        </div>
                        <div class="goods-section__title">
                            <div class="goods-information">
                                <p class="goods__title">${el.title}</p>
                                <p class="goods__brand">${el.brand}</p>
                                <p class="goods__cost">${el.price} б.р.</p>
                            </div>
                            <div class="goods-icon__basket">
                                <img src="../assets/icons/wbask.png" alt="basket" class="goods__basket">
                            </div>
                        </div>
                    </div>
                </div>`;
    });
}
createCards(products);
function createBrandList(productsArr) {
    let brandArr = [];
    products.forEach(el => {
        brandArr.push(el.brand);
    });
    return brandArr = [...new Set(brandArr)];
}

function generateBrandList() {
    const filterBrand = document.querySelector('.filter-brand');
    filterBrand.innerHTML = `<p class="filter-brand__title filter__titles">Бренд</p>`
    createBrandList(products).forEach(el => {
        filterBrand.innerHTML += `
        <label for="apple" class="label-apple">
        <input type="checkbox" name="label-apple" id="label-apple" class="checkbox">
            ${el}
        </label>`
    });
}
generateBrandList()
// console.log(createBrandList(products));

////////////////////////////////////
const navList = document.querySelector('.nav-list');
navList.addEventListener('click', function(e){
    let target = e.target;
    if (target.className === 'nav-list__item') {
        let newArr = products.filter(el => el.category == target.lastElementChild.textContent);
        createCards(newArr)

    } else if (target.parentElement.className === 'nav-list__item') {
        let newArr = products.filter(el => el.category == target.parentElement.lastElementChild.textContent);
        createCards(newArr)
    }
})

// модальное окно

function generateModalWindow() {
    
}

// ЭТО ДЛЯ INPUT RANGE В ФИЛЬТРАХ

window.onload = function(){
    slideOne();
    slideTwo();
}
let sliderOne = document.getElementById("slider-1");
let sliderTwo = document.getElementById("slider-2");
let displayValOne = document.getElementById("range-1");
let displayValTwo = document.getElementById("range-2");
let minGap = 0;
let sliderTrack = document.querySelector(".slider-track");
let sliderMaxValue = document.getElementById("slider-1").max;
function slideOne(){
    if(parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap){
        sliderOne.value = parseInt(sliderTwo.value) - minGap;
    }
    displayValOne.textContent = sliderOne.value;
    fillColor();
}
function slideTwo(){
    if(parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap){
        sliderTwo.value = parseInt(sliderOne.value) + minGap;
    }
    displayValTwo.textContent = sliderTwo.value;
    fillColor();
}
function fillColor(){
    percent1 = (sliderOne.value / sliderMaxValue) * 100;
    percent2 = (sliderTwo.value / sliderMaxValue) * 100;
    sliderTrack.style.background = `linear-gradient(to right, #dadae5 ${percent1}% , #3264fe ${percent1}% , #3264fe ${percent2}%, #dadae5 ${percent2}%)`;
}