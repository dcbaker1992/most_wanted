'use strict';

function searchByFirstName() {
    // Grabbing the values from our nameForm form and inputs.
    let firstNameInput = document.forms['nameForm']['fname'].value;


    // "people" is coming from the data.js file. We have access to it within this JavaScript file.
    let filteredPeople = people.filter(function (person) {
        if (person.firstName === firstNameInput) {
            return true;
        }
        return false;  
    });

    // Rather than console logging, you need to append the filteredPeople to a table.
    if (filteredPeople.length > 0) {
        console.log(filteredPeople);
        displayTable(filteredPeople);
    } else {
        return false;
    }
}
// this is for a test
function searchByLastName() {
    let lastNameInput = document.forms['nameForm']['lname'].value;

    let filteredPeople = people.filter(function (person) {
        if (person.lastName === lastNameInput) {
            return true;
        }
        return false;
    });
    
    if (filteredPeople.length > 0) {
        console.log(filteredPeople);
        displayTable(filteredPeople);
    } else {
        return false;
    }
}

function searchByGender() {
    let genderInput = document.forms['nameForm']['gender'].value;

    let filteredPeople = people.filter(function (person) {
        if (person.gender === genderInput) {
            return true;
        }
        return false;
    });
    if (filteredPeople.length > 0) {
        console.log(filteredPeople);
        displayTable(filteredPeople);
    } else {
        return false;
    }
}

function searchByDob() {
    let dobInput = document.forms['nameForm']['dob'].value;

    let filteredPeople = people.filter(function (person) {
        if (person.dob === dobInput) {
            return true;
        }
        return false;
    });
    if (filteredPeople.length > 0) {
        console.log(filteredPeople);
        displayTable(filteredPeople);

    } else {
        return false;
    }
}

function searchByHeight() {
    let heightInput = document.forms['nameForm']['height'].value;
    let list = peoplelist;

    let filteredPeople = people.filter(function (person) {
        if (person.height == (heightInput)) {
            return true;
        }
        return false;
    });
    if (filteredPeople.length > 0) {
        console.log(filteredPeople);
        displayTable(filteredPeople);
        return filteredPeople;
    
    } else {
        
    }
}

function searchByWeight() {
    let weightInput = document.forms['nameForm']['weight'].value; 
    let list = peoplelist;

    let filteredPeople = people.filter(function (person) {
        if (person.weight == weightInput) {
            return true;
        }
        return false;
    });
    if (filteredPeople.length > 0) {
        console.log(filteredPeople);
        displayTable(filteredPeople);
    } else {
        return false;
    }
}

function searchByEyeColor() {
    let eyeColorInput = document.forms['nameForm']['eyeColor'].value;

    let filteredPeople = people.filter(function (person) {
        if (person.eyeColor === eyeColorInput) {
            return true;
        }
        // return false;
    });
    if (filteredPeople.length > 0) {
        console.log(filteredPeople);
        displayTable(filteredPeople);

    } else {
        // return false;
    }
}

function searchByOccupation() {
    let occupationInput = document.forms['nameForm']['occupation'].value;

    let filteredPeople = people.filter(function (person) {
        if (person.occupation === occupationInput) {
            return true;
        }
        return false;
    });
    if (filteredPeople.length > 0) {
        console.log(filteredPeople);
        displayTable(filteredPeople);

    } else {
        return false;
    }
}


people.map(function(el){
    document.getElementById("data").innerHTML += <tr>
    <td>${el.id}</td>
    <td>${el.firstName}</td>
    <td>${el.lastName}</td>
    <td>${el.gender}</td>
    <td>${el.dob}</td>
    <td>${el.height}</td>
    <td>${el.weight}</td>
    <td>${el.eyeColor}</td>
    <td>${el.occupation}</td>
    <td>${el.parents}</td>
    <td>${el.currentSpouse}</td>
    </tr>
})


function displayTable(arr){
    arr.map(function(el){
        document.getElementById("dataUpdated").innerHTML += `<tr>
        <td>${el.id}</td>
        <td>${el.firstName}</td>
        <td>${el.lastName}</td>
        <td>${el.gender}</td>
        <td>${el.dob}</td>
        <td>${el.height}</td>
        <td>${el.weight}</td>
        <td>${el.eyeColor}</td>
        <td>${el.occupation}</td>
        <td>${el.parents}</td>
        <td>${el.currentSpouse}</td>
        </tr>`
    })

}

function masterSearch(){
    // searchByName();
    searchByFirstName();
    searchByLastName();
    searchByGender();
    searchByDob();
    searchByHeight();
    searchByWeight();
    searchByEyeColor();
    searchByOccupation();

}

