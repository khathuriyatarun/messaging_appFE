import { GetTime } from "../getTime"

export const CheckDay = (date) => {
    const dt = new Date(date).toLocaleDateString()
    if (dt == new Date().toLocaleDateString()) {
        return GetTime(new Date(date))
    } else if (dt == new Date(Date.now() - 86400000).toLocaleDateString()) {
        return "Yesterday"
    } else if (isDateInThisWeek(date)) {
        return "sunday"
    } else {
        return new Date(date).toLocaleDateString()
    }
}

function isDateInThisWeek(date) {
    const todayObj = new Date();
    const todayDate = todayObj.getDate();
    const todayDay = todayObj.getDay();

    // get first date of week
    const firstDayOfWeek = new Date(todayObj.setDate(todayDate - todayDay));

    // get last date of week
    const lastDayOfWeek = new Date(firstDayOfWeek);
    lastDayOfWeek.setDate(lastDayOfWeek.getDate() + 6);

    // if date is equal or within the first and last dates of the week
    return date >= firstDayOfWeek && date <= lastDayOfWeek;
}