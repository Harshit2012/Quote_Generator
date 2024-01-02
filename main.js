async function fetchQuote() {
    try {
        const response = await fetch('https://api.quotable.io/random');
        const data = await response.json();
        return data.content;
    } catch (error) {
        console.error('Error fetching quote:', error);
        return 'An error occurred while fetching the quote.';
    }
}

async function generateQuote() {
    const quoteInput = document.getElementById('quote-input');
    quoteInput.value = 'Loading...';
    
    const quote = await fetchQuote();
    quoteInput.value = quote;
}

function copyQuote() {
    const quoteInput = document.getElementById('quote-input');
    quoteInput.select();
    document.execCommand('copy');
}

generateQuote();