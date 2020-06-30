/**
 * Created by jsama on 2020/2/20.
 */

export default class CommonUtil {
    static copy(object) {
        return JSON.parse(JSON.stringify(object))
    }

    static uuid() {
        return (
            this.s4() +
            this.s4() +
            this.s4() +
            this.s4() +
            this.s4() +
            this.s4() +
            this.s4() +
            this.s4()
        )
    }

    static s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1)
    }
}
