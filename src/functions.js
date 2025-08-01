function Create(element, container, className="", elementId=""){
    const Element_value = document.createElement(element);
    const Container_value = document.querySelector(container);
    if (className !== ""){Element_value.className = className;}
     if (elementId !== ""){Element_value.id = elementId;}
    Container_value.appendChild(Element_value);
}

function Write(container, text) {
    document.querySelectorAll(container).forEach(el => {
        el.innerText = text;
    });
}

function Writebyid(container, text) {
    document.querySelectorAll(container).forEach(el => {
        el.innerText = text;
    });
}

function Create_img(path ,container, className="", elementId=""){
    const img = document.createElement("img");
    img.src = path;
    const Container_value = document.querySelector(container);
    if (className !== ""){img.className = className;}
    if (elementId !== ""){img.id = elementId;}
    Container_value.appendChild(img);
}


export {
    Create,
    Write,
    Writebyid,
    Create_img,
}