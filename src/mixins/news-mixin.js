export default {
    methods: {
        getThreeItems(array) {
            if (!Array.isArray(array)) return false;
            return array.slice(0, 3);
        }
    }
}