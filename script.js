// Credenciais de administrador (apenas para fins educacionais)
const ADMIN_CREDENTIALS = {
    email: 'admin@logix.com',
    password: 'admin123'
};

// Elementos do formulário
const loginForm = document.getElementById('loginForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const errorMessage = document.getElementById('errorMessage');
const rememberMeCheckbox = document.getElementById('rememberMe');

// Função para exibir mensagem de erro
function showError(message) {
    errorMessage.textContent = message;
    errorMessage.classList.add('show');
    
    // Remove a mensagem após 5 segundos
    setTimeout(() => {
        errorMessage.classList.remove('show');
    }, 5000);
}

// Função para validar o login
function validateLogin(email, password) {
    // Remove espaços em branco
    email = email.trim().toLowerCase();
    password = password.trim();
    
    // Validação básica
    if (!email || !password) {
        showError('Por favor, preencha todos os campos.');
        return false;
    }
    
    // Validação de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showError('Por favor, insira um email válido.');
        return false;
    }
    
    // Verifica credenciais
    if (email === ADMIN_CREDENTIALS.email && 
        password === ADMIN_CREDENTIALS.password) {
        return true;
    } else {
        showError('Email ou senha incorretos!');
        return false;
    }
}

// Event listener para o formulário
loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = emailInput.value;
    const password = passwordInput.value;
    
    if (validateLogin(email, password)) {
        // Salva o estado de login no sessionStorage
        sessionStorage.setItem('isLoggedIn', 'true');
        sessionStorage.setItem('email', email);
        
        // Se "Lembrar dados" estiver marcado, salva no localStorage
        if (rememberMeCheckbox.checked) {
            localStorage.setItem('rememberEmail', email);
        } else {
            localStorage.removeItem('rememberEmail');
        }
        
        // Redireciona para o dashboard
        window.location.href = 'dashboard.html';
    }
});

// Limpa mensagens de erro quando o usuário começa a digitar
emailInput.addEventListener('input', function() {
    if (errorMessage.classList.contains('show')) {
        errorMessage.classList.remove('show');
    }
});

passwordInput.addEventListener('input', function() {
    if (errorMessage.classList.contains('show')) {
        errorMessage.classList.remove('show');
    }
});

// Verifica se já está logado ao carregar a página
window.addEventListener('DOMContentLoaded', function() {
    if (sessionStorage.getItem('isLoggedIn') === 'true') {
        window.location.href = 'dashboard.html';
    }
    
    // Preenche email se foi salvo anteriormente
    const rememberedEmail = localStorage.getItem('rememberEmail');
    if (rememberedEmail) {
        emailInput.value = rememberedEmail;
        rememberMeCheckbox.checked = true;
    }
});

// Botão Google (apenas visual, sem funcionalidade real)
document.querySelector('.btn-google')?.addEventListener('click', function(e) {
    e.preventDefault();
    alert('Login com Google não implementado. Use as credenciais: admin@logix.com / admin123');
});

