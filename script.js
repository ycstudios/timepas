const quotes = [
    "Believe in yourself and all that you are.",
    "Every expert was once a beginner.",
    "Success is the sum of small efforts, repeated daily.",
    "You don’t have to be great to start, but you have to start to be great.",
    "Your only limit is your mind.",
    "Push yourself, because no one else is going to do it for you.",
    "Dream big, work hard, stay focused, and surround yourself with good people.",
    "Don't stop when you're tired. Stop when you're done.",
    "Doubt kills more dreams than failure ever will.",
    "Hardships often prepare ordinary people for an extraordinary destiny.",
    "If you are not willing to risk the usual, you will have to settle for the ordinary.",
    "The secret of getting ahead is getting started.",
    "Do what you can, with what you have, where you are.",
    "Great things never come from comfort zones.",
    "Your attitude, not your aptitude, will determine your altitude.",
    "The future depends on what you do today.",
    "Success is not in what you have, but who you are.",
    "Don't wait. The time will never be just right.",
    "Success is how high you bounce when you hit bottom.",
    "Winners never quit, and quitters never win.",
    "The way to get started is to quit talking and begin doing.",
    "Start where you are. Use what you have. Do what you can.",
    "Do something today that your future self will thank you for.",
    "Difficult roads often lead to beautiful destinations.",
    "Work hard in silence, let success make the noise.",
    "You can’t have a million-dollar dream with a minimum-wage work ethic.",
    "It does not matter how slowly you go, as long as you do not stop.",
    "Your limitation—it's only your imagination.",
    "Make today so awesome that yesterday gets jealous.",
    "The harder you work for something, the greater you'll feel when you achieve it.",
    "If it doesn’t challenge you, it won’t change you.",
    "Do what they think you can’t do.",
    "Don't let yesterday take up too much of today.",
    "Life begins at the end of your comfort zone.",
    "It's not about how bad you want it, it's about how hard you're willing to work for it.",
    "Sometimes later becomes never. Do it now.",
    "Success usually comes to those who are too busy to be looking for it.",
    "You are never too old to set another goal or to dream a new dream.",
    "Only I can change my life. No one can do it for me.",
    "Opportunities don't happen. You create them.",
    "Doubt is only removed by action. If you’re not working, then that’s where doubt comes in.",
    "Keep going. Everything you need will come to you at the perfect time.",
    "Be somebody nobody thought you could be.",
    "Small daily improvements are the key to staggering long-term results.",
    "You don’t get what you wish for. You get what you work for.",
    "Discipline is choosing between what you want now and what you want most.",
    "Don’t be afraid to fail. Be afraid not to try.",
    "What comes easy won’t last. What lasts won’t come easy.",
    "Stay focused and never give up.",
    "A year from now, you’ll wish you had started today.",
    "It always seems impossible until it’s done.",
    "Successful people do what unsuccessful people are not willing to do.",
    "You can do anything you set your mind to.",
    "Your passion is waiting for your courage to catch up.",
    "Whatever you do, do it well.",
    "Dream bigger. Do bigger.",
    "Don’t let what you cannot do interfere with what you can do.",
    "I am not a product of my circumstances. I am a product of my decisions.",
    "Stop doubting yourself. Work hard and make it happen.",
    "Go the extra mile. It’s never crowded there.",
    "Strength doesn’t come from what you can do. It comes from overcoming the things you once thought you couldn’t.",
    "You don’t find willpower. You create it.",
    "Learn as if you will live forever, live like you will die tomorrow.",
    "Success doesn’t just find you. You have to go out and get it.",
    "Don't tell people your plans. Show them your results.",
    "A goal properly set is halfway reached.",
    "One day or day one. You decide.",
    "If the plan doesn’t work, change the plan, not the goal.",
    "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.",
    "Everything you’ve ever wanted is on the other side of fear.",
    "No pressure, no diamonds.",
    "When you feel like quitting, think about why you started.",
    "Great things take time. Be patient.",
    "It's not whether you get knocked down, it's whether you get up.",
    "Challenges are what make life interesting, and overcoming them is what makes life meaningful.",
    "It’s okay to be a glowstick. Sometimes we have to break before we shine.",
    "Nothing is impossible. The word itself says 'I'm possible!'",
    "Hustle until your haters ask if you're hiring.",
    "Turn your obstacles into opportunities and your problems into possibilities.",
    "The best way to predict the future is to create it.",
    "Don’t compare yourself with others. Compare yourself with who you were yesterday.",
    "Losers quit when they fail. Winners fail until they succeed.",
    "Take the risk or lose the chance.",
    "Energy and persistence conquer all things.",
    "Never let success get to your head, and never let failure get to your heart.",
    "Success is a journey, not a destination.",
    "If you're going through hell, keep going.",
    "Never regret a day in your life: good days give happiness, bad days give experience.",
    "To be the best, you must be able to handle the worst.",
    "You can’t go back and change the beginning, but you can start where you are and change the ending.",
    "Consistency is what transforms average into excellence.",
    "Think like a millionaire, hustle like you're broke.",
    "Don't just exist. Live.",
    "Fear is temporary. Regret is forever.",
    "Act as if what you do makes a difference. It does.",
    "Excuses will always be there for you. Opportunity won’t.",
    "When you focus on the good, the good gets better.",
    "The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it."
];

function updateQutoe(){
    let radomIndex=Math.floor(Math.random()*quotes.length)
    document.getElementById('quote-text').innerHTML=quotes[radomIndex]
}
updateQutoe()
setInterval(updateQutoe, 60000);

let focusBtn = document.getElementById("focus-btn");
let overlay = document.getElementById("focus-overlay");
let audio = document.getElementById("motivation-audio");

focusBtn.addEventListener("click", function () {
    if (overlay.style.display === "flex") {
        overlay.style.display = "none"; 
        focusBtn.innerText = "Focus Mode";
        audio.pause();
        audio.currentTime = 0; 
    } else {
        overlay.style.display = "flex"; 
        focusBtn.innerText = "Exit Focus Mode";
        audio.play(); 
        
       
    }
});


overlay.addEventListener("click", function () {
    overlay.style.display = "none"; 
    focusBtn.innerText = "Focus Mode";
    audio.pause(); 
    audio.currentTime = 0;
});

let studyGoal = 6;
let currentHours = localStorage.getItem("studyHours") ? parseInt(localStorage.getItem("studyHours")) : 0;
updateUI();

function updateProgress(value) {
    currentHours = Math.max(0, Math.min(studyGoal, currentHours + value));
    localStorage.setItem("studyHours", currentHours);
    updateUI();
}

function resetProgress() {
    currentHours = 0;
    localStorage.setItem("studyHours", currentHours);
    updateUI();
}

function updateUI() {
    let progressPercent = (currentHours / studyGoal) * 100;
    document.getElementById("progress-bar").style.width = progressPercent + "%";
    document.getElementById("progress-bar").textContent = Math.round(progressPercent) + "%";
    document.getElementById("hours-studied").textContent = currentHours;
    updateMotivationMessage(progressPercent);
}

function updateMotivationMessage(progress) {
    let message = "";
    if (progress === 0) message = "Start your study session! 💪";
    else if (progress < 50) message = "Keep going, you're making progress! 🚀";
    else if (progress < 100) message = "Almost there! Stay focused! 🔥";
    else message = "Goal achieved! Great job! 🎉";
    document.getElementById("motivation-message").textContent = message;
}

document.addEventListener("DOMContentLoaded", function () {
    let savedName = localStorage.getItem("userName");
    if (savedName) {
        showFutureMessage(savedName);
    }
});

function saveName() {
    let userName = document.getElementById("name-input").value;
    if (userName.trim() !== "") {
        localStorage.setItem("userName", userName);
        showFutureMessage(userName);
    }
}

function showFutureMessage(name) {
    let messages = [
        `${name}, your hard work today will change your future! 🚀`,
        `Keep pushing forward, ${name}! Your future self will thank you. 💪`,
        `${name}, every hour you study brings you closer to success! 🎯`,
        `Stay strong, ${name}! The struggle today is the strength tomorrow. 🔥`
    ];

    let randomMessage = messages[Math.floor(Math.random() * messages.length)];
    document.getElementById("future-message").innerText = randomMessage;
}
document.addEventListener("DOMContentLoaded", function () {
    loadFeed();
    simulateLiveUpdates();
});

function addUpdate() {
    let input = document.getElementById("study-update").value.trim();
    if (input !== "") {
        let userName = localStorage.getItem("userName") || "Someone";
        let message = `${userName} just ${input}! 🎯`;
        saveUpdate(message);
        document.getElementById("study-update").value = ""; 
    }
}

function saveUpdate(message) {
    let updates = JSON.parse(localStorage.getItem("studyFeed")) || [];
    updates.unshift(message); 
    localStorage.setItem("studyFeed", JSON.stringify(updates));
    loadFeed();
}

function loadFeed() {
    let feedContainer = document.getElementById("live-feed");
    let updates = JSON.parse(localStorage.getItem("studyFeed")) || [];
    feedContainer.innerHTML = updates.map(update => `<div class="feed-item">${update}</div>`).join('');
}

function simulateLiveUpdates() {
    let randomUsers = ["Aryan","KDM","Yash", "Neha", "Rohan", "Priya", "Aditya", "Sakshi"];
    let randomMessages = [
        "completed a React module! 🚀",
        "studied for 2 hours! 📚",
        "solved 10 coding problems! 💻",
        "revised DSA concepts! 🔥",
        "completed a JavaScript project! 🎯",
        "mastered Redux today! 🏆"
    ];

    setInterval(() => {
        let randomUser = randomUsers[Math.floor(Math.random() * randomUsers.length)];
        let randomMessage = randomMessages[Math.floor(Math.random() * randomMessages.length)];
        let fullMessage = `${randomUser} just ${randomMessage}`;
        saveUpdate(fullMessage);
    }, 10000); // Add a new random update every 10 seconds
}
function startBreak() {
    let breakOverlay = document.getElementById("break-overlay");
    let countdown = document.getElementById("countdown");
    let relaxAudio = document.getElementById("relax-audio");

    breakOverlay.style.display = "flex"; // Show break screen
    relaxAudio.play(); // Play relaxing audio
    let timeLeft = 60;

    let interval = setInterval(() => {
        timeLeft--;
        countdown.innerText = `${timeLeft}s`;

        if (timeLeft <= 0) {
            clearInterval(interval);
            breakOverlay.style.display = "none"; // Hide break screen
            relaxAudio.pause();
            relaxAudio.currentTime = 0; // Reset audio
            alert("Break over! Now, back to study! 🚀");
        }
    }, 1000);
}
// Show popup after 1 minute (60,000ms)
setTimeout(() => {
    document.getElementById("popup").style.display = "block";
}, 1000);

// Function to close the popup
function closePopup() {
    document.getElementById("popup").style.display = "none";
}
const cursorEffect = document.createElement("div");
cursorEffect.classList.add("cursor-effect");
document.body.appendChild(cursorEffect);

function x(){
    for(var i=0; i<=5; i++){
        setTimeout(() => {
                    console.log(i);
                },i*1000);
    }
    console.log("js classes is on");
}
x();