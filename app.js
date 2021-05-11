'use strict';

function searchByFirstName(people) {
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
        return filteredPeople;
    } else {
        return false;
    }
}

function searchByLastName(people) {
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
        return filteredPeople;
    } else {
        return false;
    }
}

function searchByGender(people) {
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
        return filteredPeople;
    } else {
        return false;
    }
}

function searchByDob(people) {
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
        return filteredPeople;

    } else {
        return false;
    }
}

// function searchByHeight(people){
//     let heightInput = document.forms['nameForm']['height'].value;
//     let filteredPeople = list.filter(function (person) {
//         if(person.height == heightInput){
//             return true;
//         }
//         return false;
//     });

//     if(filteredPeople.length > 0){
//         console.log(filteredPeople);
//         displayTable(filteredPeople);
//         return filteredPeople;
//     }
//     else{
//         return false;
//     }
// }

function searchByHeight(people) {
    let heightInput = document.forms['nameForm']['height'].value;

    let filteredPeople = people.filter(function (person) {
        if (person.height == heightInput) {
            return true;
        }
        return false;
    });
    if (filteredPeople.length > 0) {
        console.log(filteredPeople);
        displayTable(filteredPeople);
        return filteredPeople;
    } else {
        return false;
    }
}

function searchByWeight(people) {
    let weightInput = document.forms['nameForm']['weight'].value;

    let filteredPeople = people.filter(function (person) {
        if (person.weight == weightInput) {
            return true;
        }
        return false;
    });
    if (filteredPeople.length > 0) {
        console.log(filteredPeople);
        displayTable(filteredPeople);
        return filteredPeople;
    } else {
        return false;
    }
}

function searchByEyeColor(people) {
    let eyeColorInput = document.forms['nameForm']['eyeColor'].value;

    let filteredPeople = people.filter(function (person) {
        if (person.eyeColor === eyeColorInput) {
            return true;
        }
        return false;
    });
    if (filteredPeople.length > 0) {
        console.log(filteredPeople);
        displayTable(filteredPeople);
        return filteredPeople;

    } else {
        return false;
    }
}

function searchByOccupation(people) {
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
        return filteredPeople;

    } else {
        return false;
    }
}

function searchByParents(people) {
    let parentsInput = document.forms['nameForm']['parents'].value;
    let list = peoplelist;
    let filteredPeople = list.filter(function (person) {
        if (person.parents == parentsInput) {
            return true;
        }
        return false;
    });

    if (filteredPeople.length > 0) {
        console.log(filteredPeople);
        displayTable(filteredPeople);
        return filteredPeople;
    }
    else {
    }
}

function searchByCurrentSpouse(people) {
    let currentSpouseInput = document.forms['nameForm']['currentSpouse'].value;
    let list = peoplelist;
    let filteredPeople = list.filter(function (person) {
        if (person.currentSpouse == currentSpouseInput) {
            return true;
        }
        return false;
    });

    if (filteredPeople.length > 0) {
        console.log(filteredPeople);
        displayTable(filteredPeople);
        return filteredPeople;
    }
    else {
    }
}


function displayTable(array) {
    array.map(function (el) {
        document.getElementById("data").innerHTML += `<tr>
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
        <td><input type="button" id="button" onclick="displayDescendantInfo(${el.id})" value="Click Here" ></td>`
    })
}


function displayUpdatedTable(array) {
    document.getElementById("data").innerHTML = ``;
    array.map(function (el) {
        document.getElementById("data").innerHTML += `<tr>
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
        <td><input type="button" id="button" onclick="displayDescendantInfo(${el.id})" value="Click Here"></td>`
    })
}



function masterSearch() {
    let masterFilteredPeople = people;
    if (document.forms["nameForm"]["fname"].value != "") {
        masterFilteredPeople = searchByFirstName(masterFilteredPeople);
    }
    if (document.forms["nameForm"]["lname"].value != "") {
        masterFilteredPeople = searchByLastName(masterFilteredPeople);

    }
    if (document.forms["nameForm"]["gender"].value != "") {
        masterFilteredPeople = searchByGender(masterFilteredPeople);
    }
    if (document.forms["nameForm"]["dob"].value != "") {
        masterFilteredPeople = searchByDob(masterFilteredPeople);
    }
    if (document.forms["nameForm"]["height"].value != "") {
        masterFilteredPeople = searchByHeight(masterFilteredPeople);
    }
    if (document.forms["nameForm"]["weight"].value != "") {
        masterFilteredPeople = searchByWeight(masterFilteredPeople);
    }
    if (document.forms["nameForm"]["eyeColor"].value != "") {
        masterFilteredPeople = searchByEyeColor(masterFilteredPeople);
    }
    if (document.forms["nameForm"]["occupation"].value != "") {
        masterFilteredPeople = searchByOccupation(masterFilteredPeople);
    }
    if (document.forms["nameForm"]["parents"].value != "") {
        masterFilteredPeople = searchByParents(masterFilteredPeople);
    }
    if (document.forms["nameForm"]["currentSpouse"].value != "") {
        masterFilteredPeople = searchByCurrentSpouse(masterFilteredPeople);
    }

    if (document.forms["nameForm"]["parents"].value != "") {
        masterSearchFilteredPeople = searchByParents(masterFilteredPeople);
    }
    if (document.forms["nameForm"]["currentSpouse"].value != "") {
        masterSearchFilteredPeople = searchByCurrentSpouse(masterFilteredPeople);
    }

    displayUpdatedTable(masterFilteredPeople);
}

displayTable(people);
