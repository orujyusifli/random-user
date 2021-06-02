import {domainItem, mailItem} from "./staticData.js";
import {nameList} from "./nameList.js";
import {getMail, getName, getRandom, getSurname} from "./function.js";

// console.log(nameList.country.az.gender.length)

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

    var name, surname, email, birthday, getGender;

    getGender = genderList.gender.genderName[getRandom(genderList.gender.genderName.length)];
    birthday = "15.12.1999";

    /*
        Real adlar üçün istifa etmək üçün
    */

    if (getGender==="man") {
        name = getName(genderList.man.manName)
        surname = getSurname(genderList.man.manName, genderList.man.surnameManEnd);
        email = surname.toLowerCase() + getMail(domainItem, mailItem);
    } else {
        name = getName(genderList.woman.womanName)
        surname = getSurname(genderList.man.manName, genderList.woman.surnameWomanEnd);
        email = surname.toLowerCase() + getMail(domainItem, mailItem);
    }


    /*
        Təsadüfü random adlardan istifa etmək üçün
        */

        // name      = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        // surname   = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15); 
        // email     = Math.random().toString(36).substring(2, 15) + getMail(domainItem, mailItem);

    

    const userInfo = {
        name: name,
        surname: surname,
        email: email,
        birthday: birthday
    }

    const table = "<tr><td>"+userInfo.name+"</td><td>"+userInfo.surname+"</td><td>"+userInfo.email+"</td><td>"+userInfo.birthday+"</td></tr>";
    // console.table(table)

    document.getElementById("userList").innerHTML += table;
    console.log(userInfo);

}

setInterval(userAdd, 1000)