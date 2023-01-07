import './main.css';
import './media.css';


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
                                <p class="goods__cost">${el.price}</p>
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
        <input type="checkbox" name="label-apple" id="label-apple">
            ${el}
        </label>`
    });
}
generateBrandList()
// console.log(createBrandList(products));