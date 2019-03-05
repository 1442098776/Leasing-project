import Apipath from '@/api/api'
const Mock =require('mockjs')

Mock.mock(Apipath.home,'get',{
    'code':0,
    
})