const notifyMe = (message: string) => {
  console.log("NOTIFY CALLED");
  // Let's check if the browser supports notifications
  if (!("Notification" in window)) {
    console.log("not there");
    alert("This browser does not support desktop notification");
  }

  // Let's check whether notification permissions have already been granted
  else if (Notification.permission === "granted") {
    // If it's okay let's create a notification
    console.log("Granted");
    new Notification(message);
  }

  // Otherwise, we need to ask the user for permission
  else if (Notification.permission !== "denied") {
    console.log("Not denied");
    Notification.requestPermission().then(function (permission) {
      // If the user accepts, let's create a notification
      if (permission === "granted") {
        console.log("notifying");
        new Notification(message);
      }
    });
  } else {
    console.log("None o the above", Notification.permission);
  }
};
const showNotification = (message: string) => {
  Notification.requestPermission(function (result) {
    if (result !== "granted") {
      console.log("not granted");
    } else {
      navigator.serviceWorker.ready.then(function (registration) {
        console.log("Going to show");
        registration.showNotification("Vibration Sample", {
          body: message + "!!!!!",
          // icon: '../images/touch/chrome-touch-icon-192x192.png',
          vibrate: [200, 100, 200, 100, 200, 100, 200],
          tag: "vibration-sample"
        });
      });
    }
  });
};

/**If web workers are supported, create a new one that utilises background_process.js
 * and store it inside of web_worker. Setup an event listener that is triggered when
 * postMessage() is called from within background_process.js. This event listener will call updateTimer(),
 * passing in the data received from postMessage() which should only contain a type and a value.*/
interface TimerCallback {
  (data: any): void;
}
let web_worker: Worker;

const startBackgroundProcess = (updateTimer: TimerCallback) => {
  if (typeof Worker !== "undefined") {
    if (typeof web_worker === "undefined") {
      // web_worker = new Worker(backgrountProcess);
      web_worker = new Worker("./background_process.js");
    }
    web_worker.onmessage = function (event) {
      updateTimer(event.data);
    };
  } else {
    window.alert("Browser not supported..");
  }
};

const resetTimer = () => {
  web_worker.postMessage(["reset"]);
};

export { showNotification, notifyMe, startBackgroundProcess, resetTimer };
