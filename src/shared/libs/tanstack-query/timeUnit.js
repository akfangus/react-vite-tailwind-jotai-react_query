export class TimeUnit {
    static Seconds(sec) {
        return sec * 1000;
    }

    static Minutes(min) {
        return min * 1000 * 60;
    }

    static Hours(hour) {
        return hour * 1000 * 60 * 60;
    }
}
