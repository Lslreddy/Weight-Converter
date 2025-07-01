
    let input = document.getElementById('pounds-input');
    let result = document.getElementById('result-weight');
    let errorMsg = document.getElementById('error-message');
    let toggleBtn = document.getElementById('toggle-mode');
    let resetBtn = document.getElementById('reset-btn');
    
    let timeoutId;
    let errorTimeoutId;
    let darkMode = false;

    input.addEventListener('input', function() {
        clearTimeout(timeoutId);
        clearTimeout(errorTimeoutId);
        
        let value = parseFloat(input.value);
        
        if (isNaN(value)) {
            result.textContent = '';
            errorMsg.style.display = 'none';
            return;
        }
        
        if (value < 0) {
            errorMsg.textContent = 'Please enter a valid number';
            errorMsg.style.display = 'block';
            result.textContent = '';
            
            errorTimeoutId = setTimeout(() => {
                errorMsg.style.display = 'none';
            }, 2000);
            return;
        }
        
        let kg = value * 0.453592;
        result.textContent = kg.toFixed(2) + ' kg';
        
        timeoutId = setTimeout(() => {
            input.value = '';
            result.textContent = '';
        }, 10000);
    });

    resetBtn.addEventListener('click', function() {
        clearTimeout(timeoutId);
        clearTimeout(errorTimeoutId);
        input.value = '';
        result.textContent = '';
        errorMsg.style.display = 'none';
    });

    toggleBtn.addEventListener('click', function() {
        darkMode = !darkMode;
        document.body.classList.toggle('dark-mode');
        toggleBtn.textContent = darkMode ? 'Light Mode' : 'Dark Mode';
    });
