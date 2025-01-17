const validatePassword = require('../passwordChecker');

describe('Validation de mot de passe', () => {
    it('doit valider un mot de passe correct', () => {
        expect(validatePassword('Passw0rd!')).toBe(true);
    });

    it('doit invalider un mot de passe trop court', () => {
        expect(validatePassword('P@ss1')).toBe(false);
    });
    
    
});
