var app = new Vue({
    el: "#app",
    data: {
        products: [
            { id: 1, title: "TAG 1000 (TAG 853)", short_text: 'Early Maturing, Brig. Orange, Stand. Round', image: '../images/tangerine/tangerine-1.png' },
            { id: 2, title: "TAG 1003 (TAG 834)", short_text: 'Early Season, Uniform Peel, Stand. Round', image: '../images/tangerine/tangerine-2.png' },
            { id: 3, title: "TAG 1006 (TAG 898)", short_text: 'Early Maturing, Easy-Peel, Elong. Oval', image: '../images/tangerine/tangerine-3.png' },
            { id: 4, title: "TAG 1001 (TAG 855)", short_text: 'Mid-Season, Deep Orange, Standard Round', image: '../images/tangerine/tangerine-4.png' },
            { id: 5, title: "TAG 1004 (TAG 848)", short_text: 'Mid-Season, Rich Flavor, BOLD Round', image: '../images/tangerine/tangerine-5.png' },
            { id: 6, title: "TAG 1007 (TAG 816)", short_text: 'Late Season, High Brix, Elongated Oval', image: '../images/tangerine/tangerine-6.png' },
            { id: 7, title: "TAG 1002 (TAG 809)", short_text: 'Mid-Season, Balanced Sweet, Stand. Round', image: '../images/tangerine/tangerine-7.png' },
            { id: 8, title: "TAG 1005 (TAG 800)", short_text: 'Late Season, Extended Life, BOLD Round', image: '../images/tangerine/tangerine-8.png' }
        ]
    },
    mounted() {
        console.log(window.localStorage.getItem('prod'));
    },
    methods: {
        addItem(id) {
            window.localStorage.setItem('prod', id);
        }
    }
});
