const validatePassword = require('../passwordChecker');

describe('Validation de mot de passe', () => {
    it('doit valider un mot de passe correct', () => {
        expect(validatePassword('Passw0rd!')).toBe(true);
    });

    it('doit invalider un mot de passe trop court', () => {
        expect(validatePassword('P@ss1')).toBe(false);
    });
    
    it('doit invalider un mot de passe sans caractère spécial', () => {
        expect(validatePassword('Password1')).toBe(false);
    });
    
    it('doit invalider un mot de passe sans chiffre', () => {
        expect(validatePassword('Password!')).toBe(false);
    });
    
    it('doit invalider un mot de passe contenant "IPL"', () => {
        expect(validatePassword('Ipl123!')).toBe(false);
    });
    
    
});
