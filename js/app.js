var vm = new Vue({
    el: '#app',
    data: {
        nilai: 0
    },
    methods: {
        key: function (e) {
            if (Number.isInteger(this.nilai))
                this.nilai = '';
            this.nilai += e;
        },
        clear: function () {
            this.nilai = 0;
        },
        percent: function(){
            this.nilai = parseFloat(this.nilai / 100);
        },
        del: function () {
            this.nilai = this.nilai.slice(0, -1);
        },
        equal: function () {
            let equal = this.nilai;
            this.nilai = eval(equal);
            this.nilai = `${this.nilai}`;
        }
    },
})