import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hash from '@/components/hash/Hash'
import HashMd5 from '@/components/hash/HashMd5'
import HashSha1 from '@/components/hash/HashSha1'
import HashSha256 from '@/components/hash/HashSha256'

Vue.use(Router)

export default new Router({
  mode: 'history', // with that we get a nice URL (without '#')
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/hash',
      name: 'Hash',
      component: Hash,
      children: [{
        path: 'md5',
        component: HashMd5,
        name: 'Hash.Md5'
      },
      {
        path: 'sha1',
        component: HashSha1,
        name: 'Hash.Sha1'
      },
      {
        path: 'sha256',
        component: HashSha256,
        name: 'Hash.Sha256'
      }]
    }
  ]
})
