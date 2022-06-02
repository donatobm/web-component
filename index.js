class Edit extends HTMLElement {

  constructor() {
    super();
    this.valor;
  }

  static get observedAttributes() {
  return ["valor"];
  }

  attributeChangedCallback(valorAttr, oldValue, newValue) {

     switch(valorAttr){
            case "valor":
                this.valor = newValue;
                $( document ).ready(function compare(oldValue, newValue) {
                if (oldValue === newValue){
                        alert("1");
                     }
                    else{
                        alert("0");
                     }
                });

                $( document ).ready(function clear() {
                    var Myelement = document.getElementById("edit");
                    Myelement.value = " ";
                    console.log(Myelement.value);
                });

                $( document ).ready(function clear() {
                    function range(oldValue, newValue) {
                    if (oldValue.length == newValue.length){
                        alert("0");
                        }
                    if (oldValue.length > newValue.length){
                        alert("1");
                        }
                    if (oldValue.length < newValue.length){
                        alert("-1");
                        }
                    } 
                });
                break;
        }
    }



  // connect component
  connectedCallback() {
    this.innerHTML = `<input type="text" id= "edit" class="editcss form-control form-control-lg" value=${ this.valor }>`;
  }

}

window.customElements.define("x-edit", Edit);