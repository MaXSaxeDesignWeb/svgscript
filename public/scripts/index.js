'use strict'

const shaven = require('shaven')

const toggleGrid = require('./toggleGrid')

const gridVisibility = false
const socket = io()
const iconsContainer = window.document.querySelector('#icons')


document
	.querySelector('#toggleGrid')
	.addEventListener('click', () => toggleGrid())

socket.on('icon', (data) => {
	let iconContainer = window.document.querySelector('#' + data.basename)

	if (!iconContainer) {
		iconContainer = window.document.createElement('div')
		iconContainer.id = data.basename
		iconContainer.classList.add('icon')
		iconsContainer.appendChild(iconContainer)
	}

	iconContainer.innerHTML = data.content
})
