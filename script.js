function checkNews() {
    const headline = document.getElementById('newsHeadline').value;
    const loading = document.getElementById('loading');
    const resultSection = document.getElementById('result');
    const resultText = document.getElementById('resultText');

    if (headline.trim() === "") {
        alert("Please enter a valid news headline.");
        return;
    }

    // Show loading spinner
    loading.classList.remove('hidden');
    resultSection.classList.add('hidden');

    // Simulate API request (2 seconds delay)
    setTimeout(() => {
        loading.classList.add('hidden');

        // Replace this random logic with a consistent test or real API call
        const fakeKeywords = ['fake', 'hoax', 'rumor'];
        const isFake = fakeKeywords.some(keyword => headline.toLowerCase().includes(keyword));

        if (isFake) {
            resultText.textContent = "🚨 This news is likely FAKE!";
            resultText.className = "fake";
        } else {
            resultText.textContent = "✅ This news appears to be REAL.";
            resultText.className = "real";
        }

        resultSection.classList.remove('hidden');
    }, 2000);
}
