// Dynamic Welcome Message
const welcomeMessage = document.getElementById('welcome-message');
if (welcomeMessage) {
  const hours = new Date().getHours();
  const greetings = [
    'Magandang Umaga! Welcome sa EcoSphere', // Morning
    'Magandang Hapon! Welcome sa EcoSphere', // Afternoon
    'Magandang Gabi! Welcome sa Ecosphere',  // Evening
  ];
  const greetingIndex = (hours < 12) ? 0 : (hours < 18) ? 1 : 2;
  welcomeMessage.textContent = greetings[greetingIndex];
}

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
    });
  });
});

// Form Validation
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Salamat sa iyong mensahe! Makikipag-ugnayan kami sa lalong madaling panahon.');
  contactForm.reset();
});

// Quiz functionality
const questions = [
  {
    question: "Ilang litro ng tubig ang maaaring matipid sa pag-aayos ng sirang gripo?",
    correctAnswer: "200 liters per day",
    explanation: "Ang pag-aayos ng sirang gripo ay maaaring makatipid ng 200 liters ng tubig bawat araw."
  },
  {
    question: "Anong materyal ang pinakamadalas gamitin sa single-use plastics?",
    correctAnswer: "Polyethylene",
    explanation: "Ang polyethylene ang pinaka-karaniwang materyal para sa single-use plastics tulad ng plastic bags at bottles."
  },
  {
    question: "Ilang taon bago mabulok ang isang aluminum can?",
    correctAnswer: "200-500 years",
    explanation: "Ang aluminum cans ay tumatagal ng 200-500 taon bago tuluyang mabulok."
  },
  {
    question: "Ano ang pangunahing dahilan ng deforestation?",
    correctAnswer: "Pagkaingin",
    explanation: "Ang pagkaingin o slash-and-burn farming ay isa sa mga pangunahing dahilan ng deforestation sa maraming lugar."
  },
  {
    question: "Ilang porsyento ng basura sa mundo ang hindi nare-recycle?",
    correctAnswer: "91%",
    explanation: "Ayon sa mga pag-aaral, 91% ng mga basura ay hindi nare-recycle at napupunta sa landfill o karagatan."
  },
  {
    question: "Anong renewable energy source ang nangunguna sa mundo?",
    correctAnswer: "Solar energy",
    explanation: "Ang solar energy ang nangungunang renewable energy source dahil sa dami ng potensyal na makukuha mula sa araw."
  },
  {
    question: "Ano ang pangunahing layunin ng 3Rs sa waste management?",
    correctAnswer: "Reduce, Reuse, Recycle",
    explanation: "Ang 3Rs ay Reduce, Reuse, Recycle na naglalayong bawasan ang basura at gamitin muli ang mga materyales."
  },
  {
    question: "Ilang taon bago mabulok ang plastic bottle?",
    correctAnswer: "450 years",
    explanation: "Ang plastic bottles ay tumatagal ng halos 450 taon bago tuluyang mabulok."
  },
  {
    question: "Anong kemikal ang madalas nagdudulot ng acid rain?",
    correctAnswer: "Sulfur dioxide",
    explanation: "Ang sulfur dioxide ay nagdudulot ng acid rain kapag ito ay humahalo sa tubig-ulan sa atmospera."
  },
  {
    question: "Ilang kilowat-oras ang maaaring makuha mula sa isang wind turbine kada taon?",
    correctAnswer: "6 million kWh",
    explanation: "Ang isang wind turbine ay maaaring makagawa ng humigit-kumulang 6 million kilowat-oras ng enerhiya bawat taon."
  }
];

let currentQuestionIndex = 0;
let score = 0;

// Display the current question
function displayQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  document.getElementById("quizQuestion").textContent = currentQuestion.question;
  document.getElementById("quizInput").value = ""; // Clear the input field
  document.getElementById("quizResult").textContent = ""; // Clear the result display
}

// Check the user's answer
function checkAnswer() {
  const userAnswer = document.getElementById("quizInput").value.trim();
  const currentQuestion = questions[currentQuestionIndex];

  if (userAnswer.toLowerCase() === currentQuestion.correctAnswer.toLowerCase()) {
    score++;
    document.getElementById("quizResult").textContent = `Tama! ${currentQuestion.explanation}`;
  } else if (userAnswer !== '') {
    document.getElementById("quizResult").textContent = `Mali. Ang tamang sagot ay "${currentQuestion.correctAnswer}". ${currentQuestion.explanation}`;
  } else {
    document.getElementById("quizResult").textContent = 'Mangyaring magbigay ng sagot.';
  }

  currentQuestionIndex++;

  // Check if there are more questions
  if (currentQuestionIndex < questions.length) {
    setTimeout(displayQuestion, 2000); // Wait 2 seconds before showing the next question
  } else {
    // Display the final score
    setTimeout(() => {
      document.getElementById("quizQuestion").textContent = `Tapos na ang quiz! Nakuha mo ang ${score}/${questions.length} na tama.`;
      document.getElementById("quizInput").style.display = "none";
      document.getElementById("quizButton").style.display = "none";
    }, 2000);
  }
}

// Initialize the quiz
document.getElementById("quizButton").addEventListener("click", checkAnswer);
displayQuestion();

// Tab Functionality
function openTab(event, tabId) {
  // Remove active class from all tabs
  const tabs = document.querySelectorAll(".tab-btn");
  tabs.forEach(tab => tab.classList.remove("active"));

  // Hide all sections
  const sections = document.querySelectorAll(".tab-section");
  sections.forEach(section => section.classList.remove("active"));

  // Add active class to the clicked tab
  event.currentTarget.classList.add("active");

  // Show the corresponding section
  const targetSection = document.getElementById(tabId);
  if (targetSection) {
    targetSection.classList.add("active");
  } else {
    console.error(`Section with ID "${tabId}" not found.`);
  }
}
// JavaScript for FAQ Section Interactivity
document.addEventListener('DOMContentLoaded', () => {
  // Select all FAQ items
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const question = item.querySelector('h3');

    // Add click event to toggle the active state
    question.addEventListener('click', () => {
      // Toggle active class on the clicked item
      const isExpanded = item.classList.toggle('active');
      question.setAttribute('aria-expanded', isExpanded);

      // Close other FAQ items if needed
      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
          otherItem.querySelector('h3').setAttribute('aria-expanded', false);
        }
      });
    });
  });
});
// Add hover effect to social icons dynamically
document.querySelectorAll('.icon').forEach(icon => {
  icon.addEventListener('mouseover', () => {
      icon.style.filter = 'brightness(1.2)';
  });

  icon.addEventListener('mouseout', () => {
      icon.style.filter = 'brightness(1)';
  });
});

