<template>
  <div class="recommend">
    <scroll  class="recommend-content" :data="diclists">
      <div>
        <div v-if = "recommends.length"  class="slider-wrapper">
          <slider>
            <div v-for='item in recommends'>
              <!-- <a :href='item.linkUrl'> -->
                <img class="needclick" :src='item.picurl'>
              <!-- </a> -->
            </div>
          </slider>
        </div>
        <div class="recommend-list">
          <h1 class="list-title">热门歌单推荐</h1>
          <ul>
            <li v-for="item in diclists" class="item">
              <div class="icon">
                <img width="60" height="60" :src="item.pic_info.url">
              </div>
              <div class="text">
                <h2 class="name" v-html="item.author[0].name"></h2>
                <p class="desc">锄禾日当午，汗滴禾下土，爱听不听</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </scroll>
  </div>
</template>

<script type="text/ecmascript-6">
  import Scroll from 'base/scroll/scroll'
  import Slider from 'base/slider/slider'
  import {ERR_OK} from 'api/config'
  import {getRecommend} from 'api/recommend'
  import {getDiclist} from 'api/recommend'


  export default{
  data(){
   return {
     recommends:[],
     diclists:[]
 }
},
  created(){
    this._getRecommend()
    this._getDiclist()
},
  methods:{

   _getRecommend(){
    getRecommend().then((res) =>{
    if(res.code === ERR_OK){
     this.recommends = res.focus.data.grids
     console.log( res.focus.data.grids )
  }else{
     console.log("it's so bad")
}
  })

  },
  _getDiclist(){
    getDiclist().then((res) =>{
      if(res.code === ERR_OK){
        this.diclists = res.musiciangroup.data.content
        console.log( res.musiciangroup.data.content)
    }else{
        console.log("图了，图在哪")
  }
  })
}
 },
 components: {
      Slider,
      Scroll
    }
}


</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"

  .recommend
    position: fixed
    width: 100%
    top: 88px
    bottom: 0
    .recommend-content
      height: 100%
      overflow: hidden
      .slider-wrapper
        position: relative
        width: 100%
        overflow: hidden
      .recommend-list
        .list-title
          height: 65px
          line-height: 65px
          text-align: center
          font-size: $font-size-medium
          color: $color-theme
        .item
          display: flex
          box-sizing: border-box
          align-items: center
          padding: 0 20px 20px 20px
          .icon
            flex: 0 0 60px
            width: 60px
            padding-right: 20px
          .text
            display: flex
            flex-direction: column
            justify-content: center
            flex: 1
            line-height: 20px
            overflow: hidden
            font-size: $font-size-medium
            .name
              margin-bottom: 10px
              color: $color-text
            .desc
              color: $color-text-d
      .loading-container
        position: absolute
        width: 100%
        top: 50%
        transform: translateY(-50%)
</style>