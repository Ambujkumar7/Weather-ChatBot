function addmessage(message,isbot) {
    const chatWindow = document.getElementById('chatWindow');
    const messageDiv = document.createElement('div');
    // messageDiv.style.paddingTop = '5px';
    // messageDiv.style.paddingBottom = '3px'
    messageDiv.classList.add('message');
    const avtarDiv = document.createElement('div');
    avtarDiv.classList.add('avatar');
    const textDiv = document.createElement('div');
    textDiv.classList.add('text');
    textDiv.innerHTML = message;
    
    if (isbot) {
        // messageDiv.innerText = 'Bot:' + message;
        messageDiv.classList.add('bot')
    } else{
        messageDiv.classList.add('user')
        // messageDiv.innerText = 'You:' + message;
    }
    messageDiv.appendChild(avtarDiv);
    messageDiv.appendChild(textDiv)
    chatWindow.appendChild(messageDiv);
    chatWindow.scrollTop = chatWindow.scrollHeight;
   
}
// add to localstorage
 
 

function getWeather() {
  
    //user ke input ko read karna
    let userMessage = document.getElementById('userInput').value;
   if (userMessage === ""){
    alert('please fill city!')
   } else{

       
       addmessage(userMessage,false) //user ka message chat window me dikhana
       // city ka name find karna
       //  let city = null;
       if (userMessage.includes("in")) {
         //what is weather in [your city name]
         city = userMessage.split("in")[1];
        } else if (userMessage.includes("is")) {
            city = userMessage.split("is")[1];
        }
        else if (userMessage.includes("of")) {
            city = userMessage.split("of")[1]
        }
        
        
        
        // let city = userMessage.split('in')[1]; 
        
        // apikey ka url bnana
        let apikey = '967205d1b899f3dd0905a52d89e106ce';
        let apiUrl =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;
        
        // api ko call karna
        
        fetch(apiUrl).then(response=> response.json())
        .then(data=>{
        // console.log(data);
        // bot ka responce bnana
        if (data.cod === 200) {
            let BotResponse = `The weather in ${data.name} is ${data.main.temp} C with ${data.weather[0].description}.`;
            addmessage(BotResponse, true); //bot ka message dikhana
            
        } else{
            addmessage('City not found!')
        }
        
    })
    .catch(Error=>{
        console.log(Error);
        
    })
}
}
 