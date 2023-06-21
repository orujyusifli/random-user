import {domainItem, mailItem} from "./staticData.js";
import {nameList} from "./nameList.js";
import {getMail, getName, getRandom, getSurname, randomDate} from "./function.js";

const genderList = {
    gender: {
        genderName: nameList.country.az.gender
    },
    man: {
        manName: nameList.country.az.manName,
        surnameManEnd: nameList.country.az.surnameManEnd
    },
    woman: {
        womanName: nameList.country.az.womanName,
        surnameWomanEnd: nameList.country.az.surnameWomanEnd
    }
}


const userAdd = () => {

    let name, surname, email, birthday, getGender;

    getGender = genderList.gender.genderName[getRandom(genderList.gender.genderName.length)];
    birthday = randomDate(new Date(1975, 0, 1), new Date());

    /*
        Real adlar üçün istifa etmək üçün
    */

    if (getGender === "man") {
        name = getName(genderList.man.manName)
        surname = getSurname(genderList.man.manName, genderList.man.surnameManEnd);
        email = surname.toLowerCase() + getMail(domainItem, mailItem);
    } else {
        name = getName(genderList.woman.womanName)
        surname = getSurname(genderList.man.manName, genderList.woman.surnameWomanEnd);
        email = surname.toLowerCase() + getMail(domainItem, mailItem);
    }


    let UserCount = parseInt(document.getElementById("UserCount").innerText);
    let id = eval(UserCount + 1);
    const userInfo = {
        name: name,
        surname: surname,
        email: email,
        birthday: birthday
    }

    const table = `<tr>
            <td>${id}</td>
            <td>${userInfo.name}</td>
        <td>${userInfo.surname}</td>
        <td>${userInfo.email}</td>
        <td>${userInfo.birthday}</td>
        </tr>`;

    document.getElementById("userList").innerHTML += table;
    document.getElementById("UserCount").innerText = id;

}

function run() {
    setInterval(userAdd, 1000)
}

run()