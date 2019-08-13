Vue.component('card',{

	props: ['title', 'content'],

	data() {

		return{

		claps: 0
		}
	},

	template: `
	<div class="card">
				<div class="card-body">
					<h3 class="card-title">
						{{title}}
					</h3>
				
					<div class="card-text">
					{{content}}
					</div>
					<button @click="deleteArticle" class="btn btn-danger mt-3">Delete Me</button>

					<div class="text-center">
					<div class=" text-muted display-4">{{ claps }}</div>
					<button @click="clapForArticle" class="btn btn-info btn-sm">Clap for me</button>
					</div>

				</div>
			</div>
	`,

	methods: {

	deleteArticle() {
		this.$emit('delete-articleeee', this.title);
	},

	clapForArticle() {
		this.claps = this.claps + 1;
		//this.claps++
	}
	}

});


new Vue({

	el: '#app',

	data: {
		articles: [{

			title: 'Title 1',
			content: 'content1',
		},
		{

			title: 'Title 2',
			content: 'content2',
		},
		{

			title: 'Title 3',
			content: 'content3',
		}]
	},

	methods: {
		removeArticle(event){
			this.articles = this.articles.filter(article => article.title !== event)
			//console.log('deleteArticle ' + event);
		}
	}





  // options
})