/**
 * 封装所有的请求函数，返回promise
 * 
*/
import ajax from './ajax'
import base from './base'

/**
 * 获取病毒信息
 *  */ 
export const getCovInfo=()=>ajax.get(base.host+base.convInfo)

