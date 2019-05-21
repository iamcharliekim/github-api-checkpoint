$('.git-form').on('submit', (e)=>{
	e.preventDefault();
	$('.results').empty()
	
	let searchQuery = $('.username').val()
	
	fetch(`https://api.github.com/users/${searchQuery}/repos`)
		.then(response => response.json())
		.then(responseJson => {
			let reposArray = responseJson
			console.log(reposArray)
		
			for (let i = 0 ; i < reposArray.length; i++){
				let name = reposArray[i].name
				let link = reposArray[i].html_url
				
				let toAppend = `<div class="user-repos">
									<h1>${name}</h1>
									<h2>Link: <a href="${link}" target="_blank">${link}</a></h2>
								</div>`
				
				$('.results').append(toAppend)
			}
	})
})