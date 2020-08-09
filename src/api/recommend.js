import jsonp from 'common/js/jsonp'
import {commonParams,options} from './config'
import axios from 'axios'
import {qqMusicConfigParam} from './config'

export function getRecommend(){
	const sliderUrl = './getRecomSlider'
	// const sliderUrl = './getRecommend'
	const data = {
		...qqMusicConfigParam,
		'-':'recom030954476498489703',
		data:{
			comm:{
				ct:24
			},
			focus:{
				module:'music.mb_musichall_svr',
				method:'get_group_focus',
				param:{}
			}
		}
	}
	return axios.get(sliderUrl,{
    params: data
    }).then((res) => {
    return Promise.resolve(res.data)
    })
}
    
export function getDiclist(){
	const sliderUrl = './getRecomSlider'
	// const sliderUrl = './getRecommend'
	const data = {
		...qqMusicConfigParam,
		'-':'recom030954476498489703',
		data:{
			comm:{
				ct:24
			},
			musiciangroup:{
				module:'QQMusic.MusichallServer',
				method:'GetMusicianGroup',
				param:{"async":1}
			}
		}
	}
	return axios.get(sliderUrl,{
    params: data
    }).then((res) => {
    return Promise.resolve(res.data)
    })
}
   
