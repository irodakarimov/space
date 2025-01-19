document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('login-form');
    const usernameInput = document.getElementById('input');
    const passwordInput = document.getElementById('password');
    const submitButton = document.getElementById('submit-btn');
    const togglePassword = document.getElementById('togglePassword');
    const errorMessage = document.getElementById('errorMessage');

    function setDefaultCredentials() {
        const defaultCredentials = {
            username: 'Ayub',
            password: '12345'
        };
        localStorage.setItem('credentials', JSON.stringify(defaultCredentials));
        console.log(localStorage.getItem('credentials'));
    }

    setDefaultCredentials();

    function checkFields() {
        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();
        submitButton.disabled = !(username && password);
    }

    usernameInput.addEventListener('input', checkFields);
    passwordInput.addEventListener('input', checkFields);

    togglePassword.addEventListener('click', () => {
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            togglePassword.textContent = '🙈';
        } else {
            passwordInput.type = 'password';
            togglePassword.textContent = '👁';
        }
    });

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        const storedCredentials = JSON.parse(localStorage.getItem('credentials'));

        if (storedCredentials && username === storedCredentials.username && password === storedCredentials.password) {
            window.location.href = 'nextpage.html';
        } else {
            alert('Siz notug\'ri login yoki parol kiritdingiz');
            errorMessage.textContent = 'Login yoki parol noto\'g\'ri!';
            errorMessage.style.color = 'red';
        }
    });
});