function checkNews() {
    const headlineElement = document.getElementById('newsHeadline');
    const loadingElement = document.getElementById('loading');
    const resultSectionElement = document.getElementById('result');
    const resultTextElement = document.getElementById('resultText');

    // More robust input handling
    const headline = headlineElement ? headlineElement.value.trim() : "";
    console.log("Headline input:", headline);

    if (!headline) {
        alert("Please enter a valid news headline.");
        return;
    }

    // Check if elements exist before manipulating them
    if (loadingElement) {
        loadingElement.classList.remove('hidden');
    }
    if (resultSectionElement) {
        resultSectionElement.classList.add('hidden');
    }
    console.log("Loading spinner shown.");

    setTimeout(() => {
        if (loadingElement) {
            loadingElement.classList.add('hidden');
        }

        let resultText = "";
        let resultClass = "";

        // More robust result handling
        try {
            const fakeKeywords = ['fake', 'hoax', 'rumor', 'scam', 'false'];
            const normalizedHeadline = headline.toLowerCase().replace(/[^a-z\s]/g, '');
            console.log("Normalized Headline:", normalizedHeadline);

            const isFake = fakeKeywords.some(keyword => normalizedHeadline.includes(keyword));
            console.log("Fake News Detection Result:", isFake);

            if (isFake) {
                resultText = "🚨 This news is likely FAKE!";
                resultClass = "fake";
            } else {
                resultText = "✅ This news appears to be REAL.";
                resultClass = "real";
            }
        } catch (error) {
            console.error("Error during news check:", error);
            resultText = "An error occurred."; // Provide user feedback
            resultClass = "error"; // Optional: Style the error message
        }

         if (resultTextElement) {
             resultTextElement.textContent = resultText;
             resultTextElement.className = resultClass;
             console.log("Result Text Updated:", resultTextElement.textContent);
         } else {
             console.error("resultText element not found!");
         }

        if (resultSectionElement) {
            resultSectionElement.classList.remove('hidden');
            console.log("Result section shown.");
        }

    }, 2000);
}
