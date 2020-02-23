export class Util {

    public static generateRandomLetters = (size, except) => {
        let result = '';
        const characters = 'abcdefghijklmnopqrstuvwxyz';
        const charactersLength = characters.length;
        for (let i = 0; i < size; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }

        if (except != null) {
            if (result === except) {
                result = Util.generateRandomLetters(size, except);
            }
        }

        return result;
    }

}
