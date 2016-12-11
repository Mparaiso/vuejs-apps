// @see https://vuejs.org/v2/guide/installation.html
(function () {
    "use strict";
    // INTRODUCTION
    var app = new Vue({
        el: "#app",
        data: { message: "Hello Vue" }
    });
    var app2 = new Vue({
        el: "#app2",
        data: { message: ['Hover message from Vue app ',new Date()].join('') }
    });
    var app3 = new Vue({
        el: "#app3",
        data: { show: true }
    });
    var todos = [{ text: "Do the laundry." }, { text: "Take out the trash." }];
    var app4 = new Vue({
        el: "#app4",
        data: { todos }
    });
    var app5 = new Vue({
        el: "#app5",
        data: { message: "Hello World" },
        methods: {
            reverseMessage: function () {
                this.message = this.message.split('').reverse().join('');
            }
        }
    });
    // component
    Vue.component('todo-item',{
        template:'<li>This is a todo</li>'
    });
    Vue.component('todo-item2',{
        props:['todo'],
        template:'<li>{{todo.text}}</li>'
    });
    var app6 = new Vue({
        el:'#app6',
        data:{
            list:[{text:"Cheese"},{text:"Butter"},{text:"Salad"}]
        }
    })

    /* The Vue Instance Constructor */

} ());