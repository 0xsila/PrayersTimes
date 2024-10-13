let cities=[
    "Alger","Annaba","Oran"
]
function addCities(cities){
for(city of cities){
document.getElementById("select").innerHTML+=`

<option value="${city}">${city}</option>
`
}
}
addCities(cities);

function getTimes(city){
    return new Promise((resolve,reject)=>{
        
        axios.get(`http://api.aladhan.com/v1/timingsByCity?country="algeria"&city="${city}"`)
    .then((response)=>{
        document.getElementById("date").innerHTML=`${response.data.data.date.readable}`
        document.getElementsByClassName("time")[0].innerHTML=`${response.data.data.timings.Fajr}`
        document.getElementsByClassName("time")[1].innerHTML=`${response.data.data.timings.Sunrise}`
        document.getElementsByClassName("time")[2].innerHTML=`${response.data.data.timings.Dhuhr}`
        document.getElementsByClassName("time")[3].innerHTML=`${response.data.data.timings.Asr}`
        document.getElementsByClassName("time")[4].innerHTML=`${response.data.data.timings.Maghrib}`
        document.getElementsByClassName("time")[5].innerHTML=`${response.data.data.timings.Isha}`
    resolve();
    })
    .catch(error => {
        alert(error)
        reject(error);
    })

    })
}
getTimes("alger");
document.getElementById("select").addEventListener("change",function(){
    getTimes(this.value);
    document.getElementById("city").innerHTML=this.value;
})