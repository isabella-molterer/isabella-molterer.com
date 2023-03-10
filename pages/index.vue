<template>
	<div>
		<div id="page-wrapper">
			<div class="container">
			</div>
		</div>
	</div>
</template>

<script>

var title = '{{ title }}'
var desc = '{{ description }}'

export default {
	name: 'index',
	auth: false,
	scrollToTop: true,
	data () {
		return {
			title: title,
			description: desc
		}
	},
	head () {
		return {
			title: this.title,
			meta: [
				{ name: 'robots', content: 'index,follow' },
				{ hid: 'description', name: 'description', content: this.description },

				{ hid: 'og:url', property: 'og:url', content: this.$store.state.baseUrl + this.$route.fullPath },
				{ hid: 'og:title', property: 'og:title', content: title },
				{ hid: 'og:description', property: 'og:description', content: this.description },

				{ hid: 'twitter:title', property: 'twitter:title', content: title },
				{ hid: 'twitter:description', property: 'twitter:description', content: this.description }
			]
		}
	}
}
</script>

<style lang="scss">
</style>