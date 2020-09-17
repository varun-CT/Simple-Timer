function inputTime(){
    var stopWatch = prompt("Please enter the time")


    function timeLeft(finalTime) {
        var deadline = Date.parse(finalTime)
        var currentTime = Date.parse(new Date())
        var totalTime = deadline - currentTime
        var seconds = Math.floor((totalTime/1000) % 60)
        var minutes = Math.floor((totalTime/1000/60) % 60)
        var hours = Math.floor((totalTime/1000/60/60) % 24)
        var days = Math.floor(totalTime/(1000*60*60*24))

        return {
            totalTime,days,hours,minutes,seconds
        }
    } 

    var interval = setInterval(() => {
        var instantTime = timeLeft(stopWatch)
        document.getElementById("timer").innerHTML = "Days: " + ('0'+instantTime.days).slice(-2) + ", Hours: "+ 
                                            ('0'+instantTime.hours).slice(-2) + ", Minutes: " +   
                                            ('0'+instantTime.minutes).slice(-2) + ", Seconds: " + 
                                            ('0'+instantTime.seconds).slice(-2)
        
        if(instantTime.totalTime <= 0){
            clearInterval(interval)
        }                                              
    },1000)
}
