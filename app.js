
let ulMenuList = document.getElementById("ulMenuList")
let butFilterMenu = document.getElementById("btnFilterMenu")
let optCourse = document.getElementById("optCourse")
let courseFilteredBy = ""
let itemInfoTemplate = ""


optCourse.addEventListener('change', function(){

    courseFilteredBy = optCourse.value;

    if (courseFilteredBy === "All"){
        console.log("All")
        displayAll()
    }
    else {

        let courseListIds = []

        for (let i = 0; i < dishes.length; i++) {

            let description = dishes[i].description;
            let imageURL = dishes[i].imageURL;
            let title = dishes[i].title;
            let course = dishes[i].course;
            let id = dishes[i].id;
            let price = dishes[i].price;
            
            if (course === courseFilteredBy) {
                courseListIds.push(id)
            }

        } 
        displayItemsByCourse(courseListIds)
    }
});


function displayItemsByCourse(courseListIds){

    while (ulMenuList.firstChild) {
        ulMenuList.removeChild(ulMenuList.firstChild);
    }

    for (let i = 0; i < courseListIds.length; i++) {
        console.log(courseListIds[i])

        for (let j = 0; j < dishes.length; j++) {

            if(dishes[j].id === courseListIds[i]) {
                let description = dishes[j].description;
                let imageURL = dishes[j].imageURL;
                let title = dishes[j].title;
                let course = dishes[j].course;
                let id = dishes[j].id;
                let price = dishes[j].price;

                itemInfoTemplate = `<li><p><img src="${imageURL}">
                <p>${title} (${price})</p><p>${description}</p></li>`

                ulMenuList.insertAdjacentHTML('beforeend',itemInfoTemplate)
            }
        }
    }
}


function displayAll() {

    while (ulMenuList.firstChild) {
        ulMenuList.removeChild(ulMenuList.firstChild);
    }

    for (let i = 0; i < dishes.length; i++) {
  
        let description = dishes[i].description;
        let imageURL = dishes[i].imageURL;
        let title = dishes[i].title;
        let course = dishes[i].course;
        let id = dishes[i].id;
        let price = dishes[i].price;

        itemInfoTemplate = `<li><p><img src="${imageURL}">
        <p>${title} (${price})</p><p>${description}</p></li>`

        ulMenuList.insertAdjacentHTML('beforeend',itemInfoTemplate)
    }
}

// Load full menu
displayAll()

