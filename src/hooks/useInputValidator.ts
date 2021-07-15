import { ref, watch } from "vue";

export default function (defaultValue: string | number, onValidate: Function) {
  const input = ref(defaultValue);

  watch(input, (value) => {
    onValidate(value);
  });

  return { input };
}
