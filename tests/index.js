import AmazonProduct from "../Amazon.product.scraper.js";


const url = "./tests/Amazon.com _ Nike Women's Air Zoom Pegasus 36 Running Shoes _ Road Running.html";
// const url = "Amazon.com_ 2020 Apple MacBook Air Laptop_ Apple M1 Chip, 13” Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, FaceTime HD Camera, Touch ID. Works with iPhone_iPad; Gold _ Electronics.html";
// const url = "http://www.amazon.com/Nike-Fleece-Pullover-Hoodie-Anthracite/dp/B071JNJHRS/ref=sr_1_omk_2?keywords=nike&qid=1645490090&sr=8-2";
// const url = "http://amzn.to/3JH6QET";
const product = new AmazonProduct(url, "../");
product.scrape((response) => {
    console.log(response)
})