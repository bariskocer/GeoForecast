const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const getDayOfWeek = (dateString) => {
    const date = new Date(dateString);
    const day = days[date.getDay()]; 
    return day;
}

export const groupDataByDate = (data) => {
    const groupedData = data.reduce((acc, item) => {
        const dateStr = item.dt_dxt.split(" ")[0];
        const day = getDayOfWeek(dateStr);
        if (!acc[dateStr]) {
            acc[dateStr] = {
                day: day,
                min: item.main.temp_min,
                max: item.main.temp_max,
                weather: item.weather[0].description,
                icon: item.weather[0].icon
            };
        } else {
            if (acc[dateStr].min > item.main.temp_min) {
                acc[dateStr].min = item.main.temp_min;
            }
            if (acc[dateStr].max < item.main.temp_max) {
                acc[dateStr].max = item.main.temp_max;
                acc[dateStr].weather = item.weather[0].description;
                acc[dateStr].icon = item.weather[0].icon;
            }
        }
        return acc;
    }, {});
    console.log("function");
    return groupedData;
}
