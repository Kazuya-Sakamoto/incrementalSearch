new Vue({
  el: "#app",
  data:{
    search: '',
    sort: '',
    list: [
        { id: 1, text: 'Python' },
        { id:2, text: 'Ruby'},
        { id:3, text: 'PHP'},
        { id:4, text: 'JavaScript'},
        { id:5, text: 'Java'},
        { id:6, text: 'Go'},
        { id:7, text: 'C'},
        { id:8, text: 'C#'},
        { id: 9, text: 'Rails' },
        { id:10, text: 'Django'},
        { id:11, text: 'MySQL'},
        { id:12, text: 'Vue.jst'},
        { id:13, text: 'react'},
        { id:14, text: 'Docker'},
        { id:15, text: 'unity'},
        { id:16, text: 'jQuery'}
    ]
  },
  computed: {
    filteredList: function(){
        return this.list.filter(function(item){
            return item.text.indexOf(this.search) > -1
        }, this)
    },

    sortedList: function(){
        var copy = this.filteredList.slice()

        if(this.sort === 'asc' ){
            return copy.sort(this.comparatorAsc)
        } else if(this.sort === 'desc') {
            return copy.sort(this.comparatorDesc)
        } else{
            return copy
        }
    }
  },
  methods:{
    comparatorAsc: function(itemA, itemB){
        if(itemA.text < itemB.text){
            return -1
        } else if(itemA > itemB.text){
            return 1
        } else{
            return 0
        }
    },

    comparatorDesc: function(){
        if(itemA.text > itemB.text){
            return -1
        } else if(itemA < itemB.text){
            return 1
        } else{
            return 0
        }
    },
  }
});