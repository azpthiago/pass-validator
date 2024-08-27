import PasswordValidator from '../src/passwordValidator.js';

describe('PasswordValidator', () => {
    test('Senha válida deve passar em todas as validações', () => {
        const validator = new PasswordValidator('Aa!123456');
        expect(validator.validate()).toBe(true);
        expect(validator.getErrors()).toHaveLength(0);
    });

    test('Senha sem caractere especial deve falhar', () => {
        const validator = new PasswordValidator('Aa1234567');
        expect(validator.validate()).toBe(false);
        expect(validator.getErrors()).toContain('A senha deve conter pelo menos um caractere especial (!,@,#,$,% ou .).');
    });

    test('Senha sem letra maiúscula deve falhar', () => {
        const validator = new PasswordValidator('aa!123456');
        expect(validator.validate()).toBe(false);
        expect(validator.getErrors()).toContain('A senha deve conter pelo menos uma letra maiúscula.');
    });

    test('Senha sem letra minúscula deve falhar', () => {
        const validator = new PasswordValidator('AA!123456');
        expect(validator.validate()).toBe(false);
        expect(validator.getErrors()).toContain('A senha deve conter pelo menos uma letra minúscula.');
    });

    test('Senha com menos de 9 caracteres deve falhar', () => {
        const validator = new PasswordValidator('Aa!12345');
        expect(validator.validate()).toBe(false);
        expect(validator.getErrors()).toContain('A senha deve ter mais de 8 caracteres.');
    });
});
