// Когда приходит сообщение из popup.js
chrome.runtime.onMessage.addListener(
    function (data, sender, sendResponse) {
        //сообщение из popup.js
        parseMessage(data)

        // Если нужно отправить ответ в popup.js
        sendResponse({"data": "Content принял"});
    }
);

// Обрабатываем входящии сообщение
function parseMessage(data) {
    console.log(data);
    if (data.data.type) {
        var messageData = data.data;
        console.log(messageData.type);
        // Меняем фон
        if (messageData.type == 'color') {
            var color = messageData.color;
            document.body.style.background = color;
        }
    }
}

// Отправить сообщение в popup.js
function sendPopup(data) {
    chrome.runtime.sendMessage({"data": data}, function (response) {
        console.log(response);
    });
}


// При клике на любой div передаем его html в popup
var ElemArr = document.querySelectorAll('div');
if (ElemArr.length) {
    ElemArr.forEach(function (Elem) {
        Elem.onclick = function onClick(event) {
            //event.preventDefault();
            $this = event.target;


            sendPopup({"type": 'html', 'html': $this.innerHTML});

            //chrome.runtime.sendMessage({color: color});

            //return false;
        };
    });
}
