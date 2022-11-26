<template>
  <div class="p-icon" v-html="iconElement"></div>
</template>

<script lang="ts">
import { computed } from "@vue/reactivity";
import { defineComponent, type PropType } from "vue";
import { pigmentOptions, type Icon } from "../options";

export default defineComponent({
  props: {
    icon: {
      type: [String, Object] as PropType<Icon | String>,
      required: true,
    },
  },
  setup(props, context) {
    const options = pigmentOptions.icons;
    const icon: Icon =
      typeof props.icon == "string"
        ? { name: props.icon, pack: options.defaultPack }
        : ({
            name: (props.icon as Icon).name,
            pack: (props.icon as Icon).pack ?? options.defaultPack,
          } as Icon);

    const iconElement = computed(() => options.iconTemplate(icon));

    return { iconElement };
  },
});
</script>
