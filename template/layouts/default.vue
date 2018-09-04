<template>
  <section>
    <b-navbar toggleable type="light" variant="light">
      <b-navbar-toggle target="nav_text_collapse"></b-navbar-toggle>
      <b-container>
        <b-navbar-brand>{{ name }}</b-navbar-brand>
        <b-collapse is-nav id="nav_text_collapse">
          <b-navbar-nav>
            <b-nav-item to="/">Home</b-nav-item>
            <b-nav-item to="/">About</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
    <b-container>
      <nuxt />
    </b-container>
  </section>
</template>
