/**
	Vue 
	MVVM框架
	数据驱动试图
*/
;(function (Vue) {
	const todos = [
		{
			id: 1,
			title: '吃饭',
			completed: false
		},
		{
			id: 2,
			title: '睡觉',
			completed: true
		},
		{
			id: 3,
			title: '打豆豆',
			completed: true
		}
	];

	// 注册一个全局自定义指令 `v-focus`
	Vue.directive('focus', {
		// 当被绑定的元素插入到 DOM 中时……
		inserted: function (el) {
			console.log(el);
			// 聚焦元素
			el.focus()
		}
	})


	window.app = new Vue({
		el: '#todoapp',
		data: {
			//ES6同名属性可以简写 todos: todos => todos
			todos,
			filterStat: 'all',
			currentEditing: null,
			toggelALlstat: false
			
		},
		// 计算属性
		computed: {
			// 该属性比较特殊，从代码来看是一个方法，但是只能当作属性来使用
			// 也就是说，在模板中不能调用它，只能当作属性来使用
			leftCount () {
				//console.log('计算属性');
				return this.todos.filter( item => {
					
					return !item.completed
				}).length; 
			},
			filterTodos: function () {
				switch (this.filterStat) {
					case 'all':
						return this.todos;
						break;
					case 'active':
						return this.todos.filter(item => !item.completed);	
						break;
					case 'completed':
						return this.todos.filter(item => item.completed);	
						break;
					default:
						break;
				}
			},

			toggleStat: {
				get: function () {
					return this.todos.every(item => item.completed);
				},
				set: function () {}
			}
		},
		methods: {
			// ES6 对象属性函数的简写方式
			// addTodo: function () {

			// }
			// =》
			addTodo (event) {
				//console.log('addTodo', event);
				// 1、获取文本框中用户输入的数据
				// 2、判断数据是否为空
				//	  如果为空，则什么都不做
				// 	  如果不为空，则添加到数组
				// 3、添加到数组
				// 4、清空文本框
				// console.log(event.target.value);
				var todoText = event.target.value.trim();
				
				if(!todoText.length) {
					return;
				}else{
					var lastTodo = this.todos[this.todos.length - 1]
					var id = lastTodo ?  lastTodo.id + 1 : 1;
					
					this.todos.push({
						id,
						title: todoText,
						completed: false
					});

					// 清空文本框
					event.target.value = '';
				}
			},
			toggleAll (event) {
				// console.log('toggleAll', event.target.checked);
				// 获取点击的checkbox的选中状态
				var checked = event.target.checked;

				//遍历数组中的所有数据，把每个元素的completed值改变
				// 由于我们使用v-model 使用的是双向绑定
				this.todos.forEach(todo => todo.completed = checked);
			},

			// 删除任务选项
			removeTodo (index, event) {
				// console.log(index, event);
				this.todos.splice(index, 1);
			},

			// 删除所有已完成
			removeAllDone () {
				// 找到所有已完成的任务项，删除
				// 使用数组过滤的方法
				this.todos = this.todos.filter((item, index) => {
					return !item.completed;
				});
			},

			// 方法也可以用于模板绑定
			getLeftCount () {
				
				return this.todos.filter( item => {
					
					return !item.completed
				}).length;
			},

			// 双击 label 获取 editing 编辑样式
			getEditing () {

			},

			// 保存编辑项
			saveEdit (item, index, event) {
				// 1、拿到文本框中的数据
				// 非空校验
				// 2、把数据设置到任务项中
				// 3、去除editing样式
				console.log(event);
				var editText = event.target.value.trim();
				if(!editText.length) {
					return this.todos.splice(index, 1);
				}

				item.title = editText;

				this.currentEditing = null;
			},

			// 状态切换
			linkToggleAll (item, event) {
				// every
				// some
				//console.log(item.completed);
				//this.toggelALlstat = this.todos.every(item => item.completed);
				// 在下次 DOM 更新循环结束之后执行延迟回调。在修改数据之后立即使用这个方法，获取更新后的 DOM。
				Vue.nextTick(() => {
					this.toggelALlstat = this.todos.every(item => item.completed);
				});
			}
		},
		// 配置指令
		directives: {
			editingFocus : function(argument) {
				console.log(argument  );
				console.log(123);
			}
		}
	});	



	window.onhashchange = function () {
		//console.log(window.location.hash.substr(2));
		var hash = window.location.hash.substr(2) || 'all';
		window.app.filterStat = hash;
	}

	// 第一次执行一次
	window.onhashchange();
})(Vue);
