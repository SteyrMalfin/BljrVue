Vue.component('showform', {
    template: '#show-form',
    data() {
        return { 
            data: { judul: '', nama: '', kelas: '', durasi: '', email: ''}
        }
    },
    methods: {
        simpan: function() {
            this.$emit('send-data', this.data);
            this.data.judul = "";
            this.data.nama = "";
            this.data.kelas = "";
            this.data.durasi = "";
            this.data.email = "";
        }
    }
})

Vue.component('showdata', {
    template: '#show-data',
    props: ['data']
})

new Vue({
    el: '#app',
    data: {
        peminjaman: {}
    },
    methods: {
        getData: function(value) {
            this.peminjaman = {
                judul: value.judul,
                nama: value.nama,
                kelas: value.kelas,
                durasi: value.durasi,
                email: value.email
            }
        }
    }
})
