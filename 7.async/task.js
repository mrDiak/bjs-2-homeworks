class AlarmClock {
    constructor(timerId) {
        this.alarmCollection = [];
        this.timerId = null;
    }

    addClock(time, callback, id) {
        if (!id) {
            throw new Error('Параметр не передан');
        } else if (this.alarmCollection.some(item => item.id === id)) {
            console.error(`Будильник с таким id ${id} уже существует!`);
            return;
        };

        return this.alarmCollection.push({ id, time, callback });

    }

    removeClock(id) {
        let inpArrLen = this.alarmCollection.length;
        this.alarmCollection = this.alarmCollection.filter(clock => clock.id !== id);
        let outArrLen = this.alarmCollection.length;
        return outArrLen < inpArrLen;
    }
    
    getCurrentFormattedTime() {
        const currentDate = new Date();
        const hours = currentDate.getHours() < 10 ? `0${currentDate.getHours()}` : `${currentDate.getHours()}`;
        const minutes = currentDate.getMinutes() < 10 ? `0${currentDate.getMinutes()}` : `${currentDate.getMinutes()}`;
        return hours + ":" + minutes;
    }

    start (){
        let checkClock = (clock) => {
            let alarm = this.getCurrentFormattedTime();
            if (clock.time === alarm) {
              return clock.callback();
            }
          }
      
          if (this.timerId === null) {
            this.timerId = setInterval(() => {
              this.alarmCollection.forEach(clock => checkClock(clock));
            }, 1000);
        }
          return;
    }

    stop() {
        if (this.timerId !== null) {
          clearInterval(this.timerId);
          return (this.timerId = null);
        }
      }

      printAlarms() {
        return this.alarmCollection.forEach(item => console.log("id: " + item.id + " time: " + item.time));
      }

      clearAlarms() {
        this.stop();
        return this.alarmCollection = [];
      }
}