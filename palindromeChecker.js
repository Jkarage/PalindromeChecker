const btn = document.querySelector(".btn");
btn.addEventListener("click", isPalindrome);

function isPalindrome() {
    const string = document.querySelector(".text-line").value.toString();
    const reversedString = string.split('').reverse().join('');
    const result = document.querySelector(".output");
    if (string.length > 0) {
        if (string === reversedString)
            result.innerHTML = `${string} is a palindrome &#128512`;
        else
            result.innerHTML = `${string} is NOT a palindrome &#128524`;
    } else
        result.innerHTML = `&#128512 I do not check for an Empty String...`;
}