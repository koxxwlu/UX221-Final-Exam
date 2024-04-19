class CopyrightYear extends HTMLElement{
    connectedCallback(){
        this.innerHTML = new Date().getFullYear();
    }
}

customElements.define("x-year", CopyrightYear);

class CustomURL extends HTMLElement{
    connectedCallback(){
        this.innerHTML = '<a href = "products">Go to Products page.</a>   <a href = "registration">Go to Registration page.</a>'
    }
}

customElements.define("x-customurl", CustomURL);