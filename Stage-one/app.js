const day = document.getElementById('currentDayOfTheWeek')

const date = new Date()
const getDay = date.getUTCDay()




const updateTime = () => {
    const date = new Date()
    const time = document.getElementById('currentUTCTime')
    const utcHours = date.getUTCHours().toString().padStart(2, '0')
    const utcMins = date.getUTCMinutes().toString().padStart(2, '0')
    const utcSecs = date.getUTCSeconds().toString().padStart(2, '0')

    const getTime = `${utcHours} : ${utcMins} : ${utcSecs}`
    time.textContent = getTime
}
setInterval(updateTime, 1000)
updateTime()

const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

day.textContent = weekDays[getDay]
