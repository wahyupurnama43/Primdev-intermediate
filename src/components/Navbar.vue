<template>
	<div class="border-bottom shadow-sm">
		<section class="container">
			<nav class="navbar navbar-expand-lg navbar-light">
				<div class="container-fluid">
					<router-link class="navbar-brand" to="/">Movie Time</router-link>
					<button
						class="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNav"
						aria-controls="navbarNav"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span class="navbar-toggler-icon"></span>
					</button>
					<div class="collapse navbar-collapse" id="navbarNav">
						<ul class="navbar-nav ms-md-auto">
							<li class="nav-item">
								<router-link to="" class="nav-link active">Movie</router-link>
							</li>
							<li class="nav-item">
								<router-link to="/tv" class="nav-link active">Tv</router-link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</section>
	</div>
</template>

<script>
export default {
	name: "Navbar",
};
</script>
