
<script lang="ts">
import {h, useSlots, computed} from 'vue'
export default {
  props: {
    size: {
      type: String,
      default: 'tiny'
    },
    color: {
      type: String,
      default: 'success',
    }
  },
  setup (props) {
    const slots = useSlots();

    const classes = computed(() => {
      return [props.size, [props.color ? props.color : '' ]]
    })

    return () => h('div', {
      class: `avatar avatar-${classes.value} ${props.color ? 'avatar-letters-'+props.color : ''}`
      }, slots)

  }
}
</script>

<style lang="scss">

</style>
