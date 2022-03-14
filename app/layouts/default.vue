<template>
  <div>
    <nav class="uk-navbar-container" uk-navbar>
      <div class="uk-navbar-left">
        <ul class="uk-navbar-nav">
          <li>
            <a href="#modal-full" uk-toggle><span uk-icon="icon: table" /></a>
          </li>
          <li>
            <nuxt-link to="/" tag="a"><span uk-icon="icon: home" /></nuxt-link>
          </li>
        </ul>
      </div>
    </nav>

    <div id="modal-full" class="uk-modal-full" uk-modal>
      <div class="uk-modal-dialog">
        <button class="uk-modal-close-full uk-close-large" type="button" uk-close />
        <div class="uk-grid-collapse uk-flex-middle uk-child-width-1-2@s" uk-grid>
          <div class="uk-background-cover sidebar-background-cover" uk-height-viewport />
          <div class="uk-padding-large">
            <h1 style="font-family: Staatliches">IniZio</h1>
            <!-- <p class="uk-text-light">Built with strapi</p> -->
          </div>
        </div>
      </div>
    </div>

    <slot />
  </div>
</template>

<style scoped>
.sidebar-background-cover {
  background-image: url("https://images.unsplash.com/photo-1632982913170-2ab25109d343?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80");
}
</style>
