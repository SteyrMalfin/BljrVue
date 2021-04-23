var app = new Vue({
	el: "#app",
	data() {
		return {
			todos: [],
			todo: ""
		}
	},
	methods: {
        loadLocalStorage() {
            const ls = JSON.parse(localStorage.getItem("todos"));
            console.log(ls);
            if(ls == null) { return; }
            this.todos = ls;
            console.log(this.todos);
        },
		addTodo: function() {
			this.todos.push(this.todo);
			this.todo = "";
		},
		deleteTodo: function(index) {
			this.todos.splice(index, 1);
		}
	},
})