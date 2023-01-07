import './main.css';
import './test.css';

console.log('ff');
import { test } from "./test.js";
test();
import products from './products.json'
console.log(products);
const mainTopic = document.querySelector('.main-topic');
function createCards(productsArr) {
    mainTopic.innerHTML = "";
    productsArr.forEach(el => {
        mainTopic.innerHTML += 
        `<div class="market-section">
            <div class="goods-section">
                <div class="goods-section__image">
                    <img src="${el.images[0]}" alt="image-goods" class="goods__image">
                </div>
                <div class="goods-section__title">
                    <div class="goods-information">
                        <p class="goods__title">${el.title}</p>
                        <p class="goods__brand">${el.brand}</p>
                    </div>
                    <div class="goods-icon__basket">
                        <img src="#" alt="basket">
                    </div>
                </div>
            </div>
        </div>`;
    });
}
createCards(products);