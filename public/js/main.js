const cityname = document.getElementById("cityname")
const city_name = document.getElementById("city_name")
const submitbtn = document.getElementById("submitbtn")
const temp = document.getElementById('temp')
const temp_status = document.getElementById('temp_status')
const datahide = document.querySelector('.middle_layer')
const day = document.getElementById('day')
const today_date = document.getElementById("today_date")
const getinfo = async (event) => {
    event.preventDefault()
    let cityVal = cityname.value
    if (cityVal === "") {
        city_name.innerText = "please write something ";
        datahide.classList.add('data_hide')

    }
    else {
        try {
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&lang={en/es}&appid={put_your_api_key}`
            const response = await fetch(url)
            const data = await response.json()
            const arraydata = [data]
            temp.innerText = arraydata[0].main.temp
            temp_mood = arraydata[0].weather[0].main
            city_name.innerText = `${arraydata[0].name} , ${arraydata[0].sys.country}`
            if (temp_mood == "Clear") {
                temp_status.innerHTML =
                    '<i class="fas fa-sun" aria-hidden="true" style="color: #eccc68"></i>'
            } else if (temp_mood == "Clouds") {
                temp_status.innerHTML =
                    '<i class="fas fa-cloud" aria-hidden="true" style="color: #f1f2f6"></i>'

            }
            else if (temp_mood == "Rain") {
                temp_status.innerHTML =
                    '<i class="fas fa-cloud-rain" aria-hidden="true" style="color: #a4b0be"></i>'

            }
            else {
                temp_status.innerHTML =
                    '<i class="fas fa-cloud" aria-hidden="true" style="color: #f1f2f6"></i>'

            }
            datahide.classList.remove('data_hide')

        }
        catch {
            city_name.innerText = "please write correct cityname "
            datahide.classList.add('data_hide')
        }

    }
}
submitbtn.addEventListener('click', getinfo)

const getcurrentday = () => {
    const d = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "staurday"]
    currenttime = new Date()
    return d[currenttime.getDay()]
}
day.innerText = getcurrentday()
const getcurrentmonth = () => {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var now = new Date();
    var month = months[now.getMonth()] ;
    var date = now.getDate();
    return `${date} ${month}`
}
today_date.innerText = getcurrentmonth()