import './main.css';

import { test } from "./test";
console.log(test);

import products from './products.json'

let newProductsArr = [...products];
let checkedBrand = [];
let checkedCategory ='';

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
        <label for="label-brand" class="label-brand">
        <input type="checkbox" name="label-brand" class="brand-input">
            <span>${el}</span>
        </label>`
    });
}
generateBrandList()

////////////////////////////////////
const categoryList = document.querySelector('.nav-list');
categoryList.addEventListener('click', function(e){
    let target = e.target;
    if (target.className === 'nav-list__item') {
        checkedCategory = target.lastElementChild.textContent;

    } else if (target.parentElement.className === 'nav-list__item') {
        checkedCategory = target.parentElement.lastElementChild.textContent;
    }
    allFilterFunc()
})
function checkCategory(arr) {
    return checkedCategory ? arr.filter(el => el.category === checkedCategory) : arr;
}

// ЭТО ДЛЯ INPUT RANGE В ФИЛЬТРАХ

// window.onload = function(){
//     slideOne();
//     slideTwo();
// }
// let sliderOne = document.getElementById("slider-1");
// let sliderTwo = document.getElementById("slider-2");
// let displayValOne = document.getElementById("range-1");
// let displayValTwo = document.getElementById("range-2");
// let minGap = 0;
// let sliderTrack = document.querySelector(".slider-track");
// let sliderMaxValue = document.getElementById("slider-1").max;
// function slideOne(){
//     if(parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap){
//         sliderOne.value = parseInt(sliderTwo.value) - minGap;
//     }
//     displayValOne.textContent = sliderOne.value;
//     fillColor();
// }
// function slideTwo(){
//     if(parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap){
//         sliderTwo.value = parseInt(sliderOne.value) + minGap;
//     }
//     displayValTwo.textContent = sliderTwo.value;
//     fillColor();
// }
// function fillColor(){
//     percent1 = (sliderOne.value / sliderMaxValue) * 100;
//     percent2 = (sliderTwo.value / sliderMaxValue) * 100;
//     sliderTrack.style.background = `linear-gradient(to right, #dadae5 ${percent1}% , #3264fe ${percent1}% , #3264fe ${percent2}%, #dadae5 ${percent2}%)`;
// }
/////////////////////////////////////////////////
const brandInputs = document.querySelectorAll('.brand-input');

for (let i = 0; i < brandInputs.length; i++) {
   
    const brandInput = brandInputs[i];
    brandInput.addEventListener('change',function(){
        if (brandInput.checked) {
            checkedBrand.push(brandInput.parentElement.lastElementChild.textContent);

        } else {
            checkedBrand = checkedBrand.filter(el => el != brandInput.parentElement.lastElementChild.textContent)
        }
        allFilterFunc()
    })
    
}
function productsArrSortBrand() {
    let productsArrSortBrand = newProductsArr.filter(el => checkedBrand.includes(el.brand));
        // console.log(productsArrSortBrand);
        // console.log(checkedBrand.length ? productsArrSortBrand : newProductsArr);
    return checkedBrand.length ? productsArrSortBrand : newProductsArr;
}
function allFilterFunc() {
    let arr = productsArrSortBrand();
    console.log(arr);
    let arr1 = checkCategory(arr);
    console.log(arr1);
    createCards(arr1);
}