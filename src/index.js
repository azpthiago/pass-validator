import { question } from 'readline-sync';
import PasswordValidator from './passwordValidator.js';

function main() {
    console.clear();
    const password = question('Digite a senha para ser validada: ', { hideEchoBack: true });
    const validator = new PasswordValidator(password);

    if (validator.validate()) {
        console.log('Senha forte.');
    } else {
        console.log('Senha fraca. Erros:');
        validator.getErrors().forEach((error) => console.log(`- ${error}`));
    }
}

main();
