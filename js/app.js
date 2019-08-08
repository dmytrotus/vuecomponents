Vue.component('card',{

	props: ['title', 'content'],

	template: `
	<div class="card">
				<div class="card-body">
					<h3 class="card-title">
						{{title}}
					</h3>
				
					<div class="card-text">
					{{content}}
					</div>
				</div>
			</div>
	`

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
	}





  // options
})