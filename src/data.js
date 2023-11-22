import tourImg1 from './images/tour-1.jpeg'
import tourImg2 from './images/tour-2.jpeg'
import tourImg3 from './images/tour-3.jpeg'
import tourImg4 from './images/tour-4.jpeg'

export const pageLinks = [
	{
		id: 1,
		href: '#home',
		text: 'Home',
	},
	{
		id: 2,
		href: '#about',
		text: 'About',
	},
	{
		id: 3,
		href: '#services',
		text: 'Services',
	},
	{
		id: 4,
		href: '#tours',
		text: 'Tours',
	},
]

export const socialLinks = [
	{ id: 1, href: 'https://www.facebook.com/', icon: 'fab fa-facebook' },
	{ id: 2, href: 'https://www.twitter.com/', icon: 'fab fa-twitter' },
	{ id: 3, href: 'https://www.squarespace.com/', icon: 'fab fa-squarespace' },
]

export const services = [
	{
		id: 1,
		icon: 'fas fa-wallet fa-fw',
		title: 'Saving Money',
		text: "My dad once told me, laugh and the world laughs with you, Cry, and I'll give you something to cry about you little bastard!",
	},
	{
		id: 2,
		icon: 'fas fa-tree fa-fw',
		title: 'Endless Hiking',
		text: 'Is this my espresso machine? Wh-what is-h-how did you get my espresso machine?',
	},
	{
		id: 3,
		icon: 'fas fa-socks fa-fw',
		title: 'Amazing Comfort',
		text: "Yeah, but your scientists were so preoccupied with whether or not they could, they didn't stop to think if they should.",
	},
]

export const tours = [
	{
		id: 1,
		img: tourImg1,
		date: 'august 26th, 2020',
		title: 'Tibet Adventure',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
		location: 'china',
		duration: 6,
		price: 2100,
	},
	{
		id: 2,
		img: tourImg2,
		date: 'october 1th, 2020',
		title: 'best of java',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
		location: 'indonesia',
		duration: 11,
		price: 1400,
	},
	{
		id: 3,
		img: tourImg3,
		date: 'september 15th, 2020',
		title: 'explore hong kong',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
		location: 'hong kong',
		duration: 8,
		price: 5000,
	},
	{
		id: 4,
		img: tourImg4,
		date: 'december 5th, 2019',
		title: 'kenya highlights',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
		location: 'Kenya',
		duration: 20,
		price: 3300,
	},
]
