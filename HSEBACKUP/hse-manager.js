//List of words to display
        const words = ["Hello!", "Bonjour!", "Hola!", "Ciao!", "こんにちは!", "مرحبًا!"];

        // Get the element where the text will be typed
        const typingText = document.getElementById("typing-text");

        // Initialize index and typing speed
        let wordIndex = 0;
        let charIndex = 0;
        const typingSpeed = 100; // Adjust typing speed in milliseconds

        // Function to start typing animation
        function startTyping() {
            if (wordIndex < words.length) {
                if (charIndex < words[wordIndex].length) {
                    typingText.textContent += words[wordIndex].charAt(charIndex);
                    charIndex++;
                    setTimeout(startTyping, typingSpeed);
                } else {
                    // Word complete, move to the next word
                    wordIndex++;
                    charIndex = 0;
                    setTimeout(startTyping, 1000); // Delay before typing the next word
                }
            } else {
                // Animation is done, you can perform any additional actions here
            }
        }

        // Start the typing animation when the page loads
        window.onload = startTyping;
