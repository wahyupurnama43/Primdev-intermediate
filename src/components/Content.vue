<template>
	<h1 class="text-center mt-3">Movie Time</h1>
	<div class="d-flex justify-content-center align-center content-center mt-5">
		<div class="container row">
			<div class="col-md-6" v-for="movie in movies" :key="movie.imdb_id">
				<div class="movie-card">
					<div class="container-card shadow-sm">
						<a href="#">
							<img :src="'https://image.tmdb.org/t/p/w500' + movie.poster_path" alt="cover" class="cover" />
						</a>

						<div class="hero" :style="{ '--bg': 'url(https://image.tmdb.org/t/p/w500' + movie.poster_path + ')' }">
							<div class="details">
								<div class="title1">{{ movie.original_title }}</div>
								<div class="title2">The Battle of the Five Armies</div>
								<span class="likes"> {{ movie.popularity }} likes</span>
							</div>
							<!-- end details -->
						</div>
						<!-- end hero -->

						<div class="description">
							<div class="column1">
								<span class="tag">action</span>
								<span class="tag">fantasy</span>
								<span class="tag">adventure</span>
							</div>
							<!-- end column1 -->

							<div class="column2">
								<p>{{ cutText(movie.overview, 300) }}</p>
								<!-- Button trigger modal -->
								<button
									type="button"
									class="btn btn-primary"
									@click="showTrailer(movie.id)"
									data-bs-toggle="modal"
									data-bs-target="#exampleModal"
								>
									play Video
								</button>

								<!-- Modal -->
								<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
									<div class="modal-dialog modal-xl">
										<div class="modal-content">
											<div class="modal-header">
												<h5 class="modal-title" id="exampleModalLabel">Movie Trailer</h5>
												<button
													type="button"
													class="btn-close"
													data-bs-dismiss="modal"
													aria-label="Close"
												></button>
											</div>
											<div class="modal-body">
												<iframe
													class="w-100"
													style="height: 70vh"
													:src="`https://www.youtube.com/embed/` + trailer.key"
													allow="autoplay; encrypted-media"
													allowfullscreen
												></iframe>
											</div>
										</div>
									</div>
								</div>
							</div>
							<!-- end column2 -->
						</div>
						<!-- end description -->
					</div>
					<!-- end container -->
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import axios from "axios";
export default {
	name: "Content",

	data() {
		return {
			movies: [],
			trailer: [],
		};
	},
	methods: {
		showTrailer(id) {
			var Id = id;
			axios.get("https://api.themoviedb.org/3/movie/" + Id + "?api_key=cb3406412d3b78380af04124cf61b535&append_to_response=videos")
				.then((res) => (this.trailer = res.data.videos.results[1]))
				.catch((err) => console.log(err));
		},
		// bisa pakek method
		cutText(text, length) {
			if (text.length > length) {
				return text.substring(0, length) + "...";
			} else {
				return text;
			}
		},
	},
	// bisa pakek computed
	// computed: {
	// 	cutText() {
	// 		return (greeting) => (greeting.length > 300 ? greeting.substring(0, 200) + "..." : `${greeting}`);
	// 	},
	// },
	mounted() {
		axios.get("https://api.themoviedb.org/3/movie/popular?api_key=cb3406412d3b78380af04124cf61b535")
			.then((res) => (this.movies = res.data.results))
			.catch((err) => console.log(err));
	},
};
</script>

<style>
.movie-card {
	font: 14px/22px "Lato", Arial, sans-serif;
	color: #a9a8a3;
	padding: 40px 0;
}

.container-card {
	margin: 0 auto;
	width: auto;
	height: 700px;
	background: #f0f0ed;
	border-radius: 30px;
	position: relative;
}

.hero {
	height: 342px;
	margin: 0;
	position: relative;
	overflow: hidden;
	z-index: 1;
	border-top-left-radius: 5px;
	border-top-right-radius: 5px;
}

.hero:before {
	content: "";
	width: 100%;
	height: 100%;
	position: absolute;
	overflow: hidden;
	top: 0;
	left: 0;
	background: linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), var(--bg);
	background-repeat: no-repeat;
	background-size: cover;
	z-index: -1;
	transform: skewY(-2.2deg);
	transform-origin: 0 0;
	-webkit-backface-visibility: hidden;
}

.cover {
	position: absolute;
	top: 70px;
	left: 40px;
	z-index: 2;
	width: 200px;
	height: auto;
}

.details {
	padding: 90px 0 0 280px;
}
.details .title1 {
	color: white;
	line-height: 40px;
	font-size: 34px;
	margin-bottom: 13px;
	position: relative;
}
.details .title1 span {
	position: absolute;
	top: 3px;
	margin-left: 12px;
	border-radius: 5px;
	color: #544c21;
	font-size: 14px;
	padding: 0px 4px;
}
.details .title2 {
	color: #fff;
	font-size: 23px;
	font-weight: 300;
	margin-bottom: 15px;
}

.details .likes:before {
	content: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/icon_like.png");
	position: relative;
	top: 2px;
	padding-right: 7px;
	color: #fff !important;
}

.details .likes {
	color: #fff !important;
}

.description {
	bottom: 0px;
	height: 200px;
	font-size: 16px;
	line-height: 26px;
	color: #333;
}

.column1 {
	padding-left: 50px;
	padding-top: 50px;
	width: 220px;
	float: left;
	text-align: center;
}

.tag {
	background: white;
	border-radius: 10px;
	padding: 3px 8px;
	font-size: 14px;
	margin-right: 4px;
	line-height: 35px;
	cursor: pointer;
}

.tag:hover {
	background: #ddd;
}

.column2 {
	padding-left: 41px;
	padding-top: 30px;
	margin-left: 20px;
	width: 480px;
	float: left;
}

.avatars {
	margin-top: 23px;
}
.avatars img {
	cursor: pointer;
}
.avatars img:hover {
	opacity: 0.6;
}
.avatars a:hover {
	text-decoration: none;
}

fieldset,
label {
	margin: 0;
	padding: 0;
}

/****** Style Star Rating Widget *****/
.rating {
	border: none;
	float: left;
}

.rating > input {
	display: none;
}

.rating > label:before {
	margin: 5px;
	margin-top: 0;
	font-size: 1em;
	font-family: FontAwesome;
	display: inline-block;
	content: "";
}

.rating > .half:before {
	content: "";
	position: absolute;
}

.rating > label {
	color: #ddd;
	float: right;
}

/***** CSS Magic to Highlight Stars on Hover *****/
.rating > input:checked ~ label,
.rating:not(:checked) > label:hover,
.rating:not(:checked) > label:hover ~ label {
	color: #ffd700;
}

/* hover previous stars in list */
.rating > input:checked + label:hover,
.rating > input:checked ~ label:hover,
.rating > label:hover ~ input:checked ~ label,
.rating > input:checked ~ label:hover ~ label {
	color: #ffed85;
}

a[data-tooltip] {
	position: relative;
}

a[data-tooltip]::before,
a[data-tooltip]::after {
	position: absolute;
	display: none;
	opacity: 0.85;
}

a[data-tooltip]::before {
	/*
   * using data-tooltip instead of title so we
   * don't have the real tooltip overlapping
   */
	content: attr(data-tooltip);
	background: #000;
	color: #fff;
	font-size: 13px;
	padding: 5px;
	border-radius: 5px;
	/* we don't want the text to wrap */
	white-space: nowrap;
	text-decoration: none;
}

a[data-tooltip]::after {
	width: 0;
	height: 0;
	border: 6px solid transparent;
	content: "";
}

a[data-tooltip]:hover::before,
a[data-tooltip]:hover::after {
	display: block;
}

/** positioning **/
/* top tooltip */
a[data-tooltip][data-placement="top"]::before {
	bottom: 100%;
	left: 0;
	margin-bottom: 40px;
}

a[data-tooltip][data-placement="top"]::after {
	border-top-color: #000;
	border-bottom: none;
	bottom: 50px;
	left: 20px;
	margin-bottom: 4px;
}
</style>
