/**
 * İlk hərifi böyük etmək üçün funksiya
 * @returns
 * @param s
 */

const getCapitalize = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
}

const randomDate = (start, end)=>{
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

/**
 * Bu funksiya random dəyər yaratmaq üçün istifadə edilir
 * @param {*} max
 * @returns 0 - max dəyərinə kimi random rəqəmlər geri
 */

const getRandom = (max) => {
    return Math.floor(Math.random() * max);
}

/**
 * @getMail fuksiyas e-mail sonluğu yaratmaq üçün istifadə edilir funksiya iki dəyər alır
 * @param  domainItem
 * @param  mailItem
 * Dəyərlərə nameList.js fayldan çata bilərsiz
 * @returns Təsadüfü
 */

const getMail = (domainItem, mailItem) => {
    return mailItem[getRandom(mailItem.length)] + domainItem[getRandom(domainItem.length)];
}

/**
 * @param nameItem
 * @returns Təsadüfü ad
 */

const getName = (nameItem) => {
    return nameItem[getRandom(nameItem.length)];
}

/**
 * Funksiya soyad yaratmaq üçün istifadə edilir
 * @param {*} nameItem
 * @param {*} surnameEnd
 * @returns Təsadüfü soyad təyin edir
 */

const getSurname = (nameItem, surnameEnd) => {
    return nameItem[getRandom(nameItem.length)] + surnameEnd[getRandom(surnameEnd.length)];
}

export {getCapitalize, getRandom, getMail, getName, getSurname,randomDate}