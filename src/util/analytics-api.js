export const fetchMeterData = (city_id, start_time, end_time, meter_zone, plate) => {

    let queryString = `?city_id=${city_id}&start_time=${start_time}&end_time=${end_time}`;
    if (meter_zone !== "") queryString = queryString.concat(`&external_meter_id=${meter_zone}`)
    if (plate !== "") queryString = queryString.concat(`&license_plate=${plate}`)

    return $.ajax({
        url: ` https://angels-api-staging.spotangels.com/api/v3/meters/analytics${queryString}`,
        method: "GET"
    });
};

// fetchMeterData(56, "2020-1-28 18:53:31", "2020-1-28 19:18:11", 2119, "Test1");