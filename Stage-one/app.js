const day = document.getElementById('currentDayOfTheWeek')

const date = new Date()
const getDay = date.getUTCDay()




const updateTime = () => {
    const date = Date.now()
    const time = document.getElementById('currentUTCTime')
    time.textContent = date
}
setInterval(updateTime, 1)
updateTime()

const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

day.textContent = weekDays[getDay]
