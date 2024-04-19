class CopyrightYear extends HTMLElement{
    connectedCallback(){
        this.innerHTML = new Date().getFullYear();
    }
}

customElements.define("x-year", CopyrightYear);

class CustomURL extends HTMLElement{
    connectedCallback(){
        this.innerHTML = '<a href = "products">Products</a>''<a href = "registration">Registration</a>'
    }
}

customElements.define("x-customurl", CustomURL);