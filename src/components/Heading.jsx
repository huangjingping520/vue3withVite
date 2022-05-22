export default defineComponent({
  props: {
    level: {
      type: Number,
      required: true
    }
  },
  // 手写 h 函数
  // setup(props, { slots }) {
  //   return () => h(
  //     `h${props.level}`,
  //     {},
  //     slots.default()
  //   )
  // }

  // jsx
  setup(props, { slots }) {
    const tag = `h${props.level}`
    // eslint-disable-next-line react/display-name
    return () => <tag>{slots.default()}</tag>
  }
})
