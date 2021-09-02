addEventListener('DOMContentLoaded', ()=>{
	document.querySelector('.app-container').style.height = `${outerHeight - 165}px`
})

const color_used = document.getElementById('color-used')
const color_button = document.getElementById('color-button')

const hsl_button_menu = document.getElementById('hsl')
const hex_button_menu = document.getElementById('hex');
const simple_button_menu = document.getElementById('simple');
const rgb_button_menu = document.getElementById('rgb');

const hexadecimal_components = ['0','1','2','3','4','5','6','7','8','9',
			'A','B','C','D','E','F'];
const simple_colors = ['blue', 'grey','lightgrey',
					'lightblue','darkblue','red',
					'darkred','orange','pink',
					'hotpink','magenta','cyan','aqua',
					'green','darkgreen','lightgreen',
					'purple','violet','gold','silver']

const random_number = (max)=>{
	return Math.round(Math.random()*max)
}
const random_hex_color = ()=>{
	let hexadecima_color = '#'
	for (let i = 0; i < 6; i++) {
		hexadecima_color += hexadecimal_components[random_number(15)]
	}
	return hexadecima_color
}

const random_simple_color = ()=>{
	return	simple_colors[random_number(simple_colors.length-1)]
}
const random_rgb_color= ()=>{
	return `rgb(${random_number(255)},${random_number(255)},${random_number(255)})`
}
const random_hsl_color = ()=>{
	return `hsl(${random_number(359)},${random_number(100)}%,${random_number(100)}%)`
}

color_button.addEventListener('click',()=>{
	if (color_used.classList[1] == 'hex') {
		color_used.textContent= random_hex_color()
		document.body.style.backgroundColor = color_used.textContent
	}
	else if(color_used.classList[1] == 'simple'){
		color_used.textContent= random_simple_color()
		document.body.style.backgroundColor = color_used.textContent
	}else if(color_used.classList[1] == 'rgb'){
		color_used.textContent= random_rgb_color()
		document.body.style.backgroundColor = color_used.textContent
	}else if(color_used.classList[1] == 'hsl'){
		color_used.textContent= random_hsl_color()
		document.body.style.backgroundColor = color_used.textContent
	}
})

hex_button_menu.addEventListener('click',()=>{
	if (color_used.classList[1] != 'hex') {
		color_used.classList.replace(color_used.classList[1],'hex')
		color_used.textContent= random_hex_color()
		document.body.style.backgroundColor = color_used.textContent
	}
})

simple_button_menu.addEventListener('click',()=>{
		if (color_used.classList[1] != 'simple') {
			color_used.classList.replace(color_used.classList[1],'simple')
			color_used.textContent= random_simple_color()
			document.body.style.backgroundColor = color_used.textContent
		}
})

rgb_button_menu.addEventListener('click',()=>{
		if (color_used.classList[1] != 'rgb') {
			color_used.classList.replace(color_used.classList[1],'rgb')
			color_used.textContent= random_rgb_color()
			document.body.style.backgroundColor = color_used.textContent
		}
})

hsl_button_menu.addEventListener('click',()=>{
		if (color_used.classList[1] != 'hsl') {
			color_used.classList.replace(color_used.classList[1],'hsl')
			color_used.textContent= random_hsl_color()
			document.body.style.backgroundColor = color_used.textContent
		}
})