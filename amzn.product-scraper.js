import Request from "./ReqJS/Request.js";

/**
 * Amazon Scraper is a lightweight framework that allows you to scrape certain date from Amazon Product Result Page
 * @author Olawoore Emmanuel Collins
 */
class AmazonProduct {
    /**
     * 
     * @param {String} url amazon search url.
     * @param {String} moduleDir root folder for the module i.e where it's stored.
     */
    constructor(url, moduleDir) {
        this.url = url;
        this.dir = moduleDir;
        this.request = new Request({ url: this.dir + "scrape.php", method: "POST", res: "blob", type: "application/x-www-urlencoded", data: url });
    }

    /**
     * @param {Function} callback Callback function to handle response 
     */
    scrape(callback) {
        this.request.push((response) => {
            const test = document.createElement("div");
            const data = {
                redir: this.url
            }
            test.hidden = true;
            const reader = new FileReader();
            reader.onload = function() {
                test.innerHTML = reader.result;
                document.body.append(test);
                const img = document.querySelectorAll("#landingImage");
                const name = document.querySelectorAll("#productTitle");
                const price = document.querySelector(".a-offscreen");
                for (let i = 0; i < name.length; i++) {
                    data.product = name[i].innerText;
                    data.price = price.innerText;
                    callback(data);
                }
                for (let i = 0; i < img.length; i++) {
                    data.img = img[i].src;
                    callback(data);
                }
            }
            reader.readAsText(response);
        });
    }
}

export default AmazonProduct;