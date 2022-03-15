export const getMonthName = (num, flag = 'long') => {
    const date = new Date();
    date.setMonth(num-1);
    const name = date.toLocaleString("default", {month: flag});
    return name;
}

