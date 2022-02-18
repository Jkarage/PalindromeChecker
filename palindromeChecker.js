const btn = document.querySelector(".btn");
btn.addEventListener("click", isPalindrome);

function countDiffrences(newString, testString, n) {
    let differences = 0;
    for (let i = 0; i < n / 2; i++) {
        if (newString[i] !== testString[i])
            differences += 1;
    }
    return differences;
}

function isPalindrome() {
    const string = document.querySelector(".text-line").value.toString();
    let k = document.querySelector(".k-line").value;
    let nine = '9';
    const reversedString = string.split('').reverse().join('');
    const result = document.querySelector(".output");

    let initialIndex = 0;
    let finalIndex = string.length - 1;
    let differences = countDiffrences(string, reversedString, string.length);
    let obtainedArray = string.split('');
    let regex = /^[0-9]+$/;

    if (string === '') {
        result.innerHTML = `I don't deal with empty strings &#128512`;
        return
    }

    // console.log(typeof(k), k);
    if (!k.match(regex)) {
        result.innerHTML = `Please input a number in changes &#128512`;
        return
    }

    if (differences > k) {
        result.innerHTML = `Sorry The Changes available are not enough &#128512`;
        return;
    }

    while (finalIndex >= initialIndex) {
        if (k <= 0) break;

        else if (obtainedArray[initialIndex] == obtainedArray[finalIndex]) {
            if (k > 1 && (k - 2) >= differences && obtainedArray[initialIndex] != nine) {
                obtainedArray[initialIndex] = nine;
                obtainedArray[finalIndex] = nine;
                k -= 2;
            }
        } else {
            if (k > 1 && (k - 2) >= differences - 1) {
                if (obtainedArray[initialIndex] != nine) {
                    obtainedArray[initialIndex] = nine;
                    k--;
                }
                if (obtainedArray[finalIndex] != nine) {
                    obtainedArray[finalIndex] = nine;
                    k--;
                }
            } else {
                if (obtainedArray[initialIndex] > obtainedArray[finalIndex]) {
                    obtainedArray[finalIndex] = obtainedArray[initialIndex];
                } else {
                    obtainedArray[initialIndex] = obtainedArray[finalIndex];
                }
                k--;
            }
            differences--;
        }
        if (initialIndex == finalIndex && k > 0) {
            obtainedArray[initialIndex] = nine;
            k--;
        }
        initialIndex++;
        finalIndex--;
    }

    // return obtainedArray.join('');
    const highestValue = obtainedArray.join('');
    result.innerHTML = `${highestValue} is the obtained palindrome &#128512`;

}