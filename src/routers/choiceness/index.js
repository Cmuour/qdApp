export default {
  path: '/choiceness', 
  component: () => import('@/views/choiceness'), 
  children:[
    { 
      path: 'man', 
      component: () => import('@/views/choiceness/content.vue') 
    },
    { 
      path: 'woman', 
      component: () => import('@/views/choiceness/woman/Woman.vue')
    },
    { 
      path: 'cartoon', 
      component: () => import('@/views/choiceness/cartoon/Cartoon.vue') 
    },
    { 
      path: 'hearbook', 
      component: () => import('@/views/choiceness/hearbook/Hearbook.vue') 
    },
    { 
      path: 'dialogue', 
      component: () => import('@/views/choiceness/dialogue/Dialogue.vue') 
    },
  ]
}