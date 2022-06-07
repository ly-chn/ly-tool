<template>
  <v-tabs density="compact">
    <v-tab v-for="i in 3" :key="i" :value="i">Item {{ i }}</v-tab>
  </v-tabs>
</template>

<script>
export default {
  name: "tool-bar"
}
</script>

<style lang="scss" scoped>

.v-tabs {
  --bg-color: #f3f4f4;
  --link-color: #7c7f8e;
  --link-hover-color: #242a37;
  --link-active-1: #ff4350;
  --wrapper-bg: #fff;
  --box-shadow: 0px 0px 10px 6px rgba(235,235,235,.6);
  transition: background .3s ease-in;
}


.wrapper {
  background-color: var(--wrapper-bg);
  flex-shrink: 0;
  border-radius: 6px;
  box-shadow: var(--box-shadow);
  height: 60px;
  display: flex;
  align-items: center;
  transition: all .3s ease-in;
}

.v-btn {
  abc: 123;
  position: relative;
  display: flex;
  align-items: center;
  color: #7c7f8e;
  text-decoration: none;
  letter-spacing: .5px;

  &:before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    height: 2px;
    background-color: var(--link-hover-color);
    z-index: 2;
    width: 0;
    border-radius: 2px;
    transition: width 0.4s cubic-bezier(0.22, 0.61, 0.36, 1);
  }

  &:not(.active):hover:before {
    width: 100%;
    opacity: 1;
  }

  &:not(.active):hover {
    color: var(--link-hover-color);
  }

  &.active:before { width: 100%; }
}

.v-slide-group-item--active {
  color: var(--link-active-1);

  &:before { background-color: var(--link-active-1); }

  svg {
    transition: all .2s ease-in;
    transform: scale(0.1);
  }
}


@media screen and (max-width: 520px) {
  .wrapper {
    transform: scale(0.6);
  }
}
.v-tab__slider{
  height: 4px !important;
}
</style>
