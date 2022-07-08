//closure

function greeting() {
    let userName = 'Matias';

    function displayUserName() {
        return `Hello ${userName}`;
    }
    return displayUserName();
}

const g = greeting();
console.log(g());