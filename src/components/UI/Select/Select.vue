<script>
import "./Select.scss";

export default {
  name: "Select",
  props: {
    modelValue: {
      type: String,
      required: true,
    },
    options: {
      type: Array,
      required: true,
    },
    title: {
      type: String,
    },
  },
};
</script>

<template>
  <div class="custom-select">
    <h5 v-if="title" class="custom-select__title">{{ title }}</h5>

    <select
      class="custom-select__select"
      :value="modelValue"
      @change="$emit('update:modelValue', $event.target.value)"
    >
      <slot></slot>
      <option
        :value="option"
        v-for="option in options"
        class="custom-select__option"
      >
        {{ option }}
      </option>
    </select>
  </div>
</template>
