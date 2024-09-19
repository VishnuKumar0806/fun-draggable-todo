const convertTimestampToDate = (seconds, nanoseconds) => {
    const milliseconds = (seconds * 1000) + (nanoseconds / 1000000);
    const date = new Date(milliseconds);
    return date.toISOString();
}

export default convertTimestampToDate;