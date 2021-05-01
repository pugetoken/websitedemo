<template>
    <header class="header-global">
        <base-nav class="navbar-main" transparent type="" effect="light" expand>
            <router-link slot="brand" class="navbar-brand mr-lg-5" to="/">
                <img src="img/brand/white.png" alt="logo">
            </router-link>

            <div class="row" slot="content-header" slot-scope="{closeMenu}">
                <div class="col-6 collapse-brand">
                    <a href="https://demos.creative-tim.com/vue-argon-design-system/documentation/">
                        <img src="img/brand/blue.png">
                    </a>
                </div>
                <div class="col-6 collapse-close">
                    <close-button @click="closeMenu"></close-button>
                </div>
            </div>

            <ul class="navbar-nav navbar-nav-hover align-items-lg-center">
                <base-dropdown tag="li" class="nav-item">
                    <a slot="title" href="#" class="nav-link" data-toggle="dropdown" role="button">
                        <i class="ni ni-collection d-lg-none"></i>
                        <span class="nav-link-inner--text">Navigate</span>
                    </a>
                    <router-link to="/" class="dropdown-item">About Us</router-link>
                </base-dropdown>
            </ul>
            <ul class="navbar-nav align-items-lg-center ml-lg-auto">
                <li class="nav-item">
                    <a class="nav-link nav-link-icon" href="https://t.me/pugetoken" target="_blank" rel="noopener"
                       data-toggle="tooltip" title="Join our telegram!">
                        <i class="fa fa-telegram"></i>
                        <span class="nav-link-inner--text d-lg-none">Telegram</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link nav-link-icon" href="https://pugetoken.medium.com/"
                       target="_blank" rel="noopener" data-toggle="tooltip" title="Read our Medium articles">
                        <i class="fa fa-medium"></i>
                        <span class="nav-link-inner--text d-lg-none">Medium</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link nav-link-icon" href="https://twitter.com/PugeToken" target="_blank" rel="noopener"
                       data-toggle="tooltip" title="Follow us on Twitter">
                        <i class="fa fa-twitter-square"></i>
                        <span class="nav-link-inner--text d-lg-none">Twitter</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link nav-link-icon" href="https://github.com/pugetoken"
                       target="_blank" rel="noopener" data-toggle="tooltip" title="Check out on Github">
                        <i class="fa fa-github"></i>
                        <span class="nav-link-inner--text d-lg-none">Github</span>
                    </a>
                </li>
            </ul>
        </base-nav>
    </header>
</template>
<script>
import BaseNav from "@/components/BaseNav";
import BaseDropdown from "@/components/BaseDropdown";
import CloseButton from "@/components/CloseButton";

export default {
  components: {
    BaseNav,
    CloseButton,
    BaseDropdown
  }
};
</script>
<style>
</style>
