function formatDate(dateString) {
    const date = new Date(dateString);

    const day = date.getDate();
    const month = date.getMonth() + 1; 
    const year = date.getFullYear();

    const Day = day < 10 ? `0${day}` : day;
    const Month = month < 10 ? `0${month}` : month;
    
    return `${Day}/${Month}/${year}`;
}


export { formatDate };