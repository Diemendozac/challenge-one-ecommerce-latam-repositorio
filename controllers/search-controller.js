const rangeInput = document.querySelectorAll(".range-input input"),
priceInput = document.querySelectorAll(".price-input input"),
range = document.querySelector(".slider .progress"),
loginBtn = document.querySelector(".login__button"),
filterSearchCategory = document.querySelector(".filtersearch__category"),
filterSearchFormat = document.querySelector(".filtersearch__format"),
filterSearchAuthor = document.querySelector(".filtersearch__author"),
filterCheck = document.querySelectorAll(".dropdown__filter"),
appliedSearchFilters = document.querySelector(".applied__search");

setFilterChecks();


let priceGap = 1000;

loginBtn.addEventListener("click", () => {
    window.location.href = "/screens/login.html";
})

filterSearchCategory.addEventListener("keyup", filterUserSelection);
filterSearchFormat.addEventListener("keyup", filterUserSelection);
filterSearchAuthor.addEventListener("keyup", filterUserSelection);


function setFilterChecks(){
    filterCheck.forEach((element) => {
        element.addEventListener('click', filterBarManager);
    })
}

function filterBarManager(e) {
    const check = e.srcElement;
    const tagValue = check.id;
    if(check.checked){
        const tagName = check.parentElement.querySelector(".dropdown__anchor").innerHTML;
        createFilterTag(tagName, tagValue)
        console.log("Hola mundo");
    } else {
        deleteFilterTag(tagValue);
    }
}

function createFilterTag(tagName, tagValue) {
    const tagLi = document.createElement("li");
    const tagDiv = document.createElement("div");
    const tagParagraph = document.createElement("p");
    const tagIcon = document.createElement("i");
    tagLi.classList.add("applied__filter");
    tagLi.value = tagValue;
    tagDiv.classList.add("applied__condition");
    tagParagraph.classList.add("applied__argument");
    tagParagraph.innerHTML = tagName;
    tagIcon.classList.add("bx", "bx-x", "cancel__icon");
    tagIcon.addEventListener("click", deleteTagFromIcon)
    
    tagDiv.appendChild(tagParagraph);
    tagDiv.appendChild(tagIcon);
    tagLi.appendChild(tagDiv);

    appliedSearchFilters.appendChild(tagLi);

}

function deleteTagFromIcon(e) {
    const targetTag = e.srcElement.parentElement.parentElement.value;
    const tempCheck = document.getElementById(`${targetTag}`);
    tempCheck.click();
}

function deleteFilterTag(tagId) {
    const liAppliedFilters = appliedSearchFilters.children;
    for(var i = 0; i < liAppliedFilters.length; i++) {
        if(liAppliedFilters[i].value.toString() === tagId) {
            liAppliedFilters[i].remove();
        }
    }
}


function filterUserSelection(event) {
    const filterQueryString = event.srcElement.value.toLowerCase();
    const filterQuery = event.srcElement;
    const filterContainer = filterQuery.parentElement.parentElement.parentElement.parentElement;
    const elements = filterContainer.querySelectorAll(".dropdown__li");
    if(filterQueryString !== '') {
        for(var i = 1; i < elements.length; i++) {
            const filteredSearch = elements[i].querySelector(".dropdown__anchor").innerHTML.toLowerCase();
            if(filteredSearch.startsWith(filterQueryString)){
                elements[i].classList.remove("filtered");
            } else {
                elements[i].classList.add("filtered");

            }
        }
    } else {
        elements.forEach((element) => {
            element.classList.remove("filtered");
        })
    }
}

priceInput.forEach(input =>{
    input.addEventListener("input", e =>{
        let minPrice = parseInt(priceInput[0].value),
        maxPrice = parseInt(priceInput[1].value);
        
        if((maxPrice - minPrice >= priceGap) && maxPrice <= rangeInput[1].max){
            if(e.target.className === "input-min"){
                rangeInput[0].value = minPrice;
                range.style.left = ((minPrice / rangeInput[0].max) * 100) + "%";
            }else{
                rangeInput[1].value = maxPrice;
                range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
            }
        }
    });
});

rangeInput.forEach(input =>{
    input.addEventListener("input", e =>{
        let minVal = parseInt(rangeInput[0].value),
        maxVal = parseInt(rangeInput[1].value);

        if((maxVal - minVal) < priceGap){
            if(e.target.className === "range-min"){
                rangeInput[0].value = maxVal - priceGap
            }else{
                rangeInput[1].value = minVal + priceGap;
            }
        }else{
            priceInput[0].value = minVal;
            priceInput[1].value = maxVal;
            range.style.left = ((minVal / rangeInput[0].max) * 100) + "%";
            range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
        }
    });
});