function validatePassword(password) {
    if (password.length < 8) return false;
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) return false;
    return true;
}

module.exports = validatePassword;
