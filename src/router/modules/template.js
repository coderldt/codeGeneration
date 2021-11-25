/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const templatesRouter = {
  path: '/template',
  component: Layout,
  redirect: 'noredirect',
  name: 'ComponentDemo',
  meta: {
    title: '模板',
    icon: 'component'
  },
  children: [
    {
      path: 'basicData',
      component: () => import('@/views/template/basicData'),
      name: 'basicDataTemplate',
      meta: { title: '搜索表格' }
    },
    {
      path: 'dialog',
      component: () => import('@/views/template/dialog'),
      name: 'dialogTemplate',
      meta: { title: '弹窗' }
    },
  ]
}

export default templatesRouter
