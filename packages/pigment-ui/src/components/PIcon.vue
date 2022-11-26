<template>
  <div class="p-icon" v-html="icon"></div>
</template>

<script lang="ts">
import { computed } from "@vue/reactivity";
import { defineComponent } from "vue";
import { pigmentOptions } from "../options";

export default defineComponent({
  props: {
    pack: {
      type: String,
    },
    icon: {
      type: String,
      required: true,
    },
  },
  setup(props, context) {
    const iconOptions = pigmentOptions.icons;

    const pack = computed(() => props.pack ?? iconOptions.defaultPack);
    const icon = computed(() =>
      iconOptions.iconFormat({ pack: pack.value, name: props.icon })
    );

    return { icon };
  },
});
</script>
