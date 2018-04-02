<script>
export default {
  name: 'NotificationTest',
  mouted () {
    this.$notify({
      group: 'foo',
      title: 'Important message',
      text: 'Hello user! This is a notification!'
    })
  }
}
</script>
