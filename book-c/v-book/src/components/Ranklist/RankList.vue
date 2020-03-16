<template>
  <div>
    <div>
      <p>男生</p>
      <ul class="rank-type">
        <li v-for="item in ranklist.male" v-if="!item.collapse" :key="item._id">
          <RankMale :rankInfo="item"></RankMale>
        </li>
        <v-touch tag="li" class="other-rank" @tap="showMoreMaleRank">
          <div class="rank-item">
            <img src="../../assets/image/rank_other.svg"> 别人家的排行榜
          </div>
          <span class="angle">
						<img src="../../assets/image/up.svg" v-if="maleOtherRankIsShow">
						<img src="../../assets/image/down.svg" v-else>
					</span>
        </v-touch>
        <ul v-show="maleOtherRankIsShow" class="rank-type">
          <li v-for="item in ranklist.male" v-if="item.collapse" :key="item._id">
            <RankMale :rankInfo="item"></RankMale>
          </li>
        </ul>
      </ul>
      <p>女生</p>
      <ul class="rank-type rank-ty">
        <li v-for="item in ranklist.female" v-if="!item.collapse" :key="item._id">
          <RankMale :rankInfo="item"></RankMale>
        </li>
        <v-touch tag="li" class="other-rank" @tap="showMoreFemaleRank">
          <div class="rank-item">
            <img src="../../assets/image/rank_other.svg"> 别人家的排行榜
          </div>
          <span class="angle">
						<img src="../../assets/image/up.svg" v-if="femaleOtherRankIsShow">
						<img src="../../assets/image/down.svg" v-else>
					</span>
        </v-touch>
        <ul v-show="femaleOtherRankIsShow" class="rank-type">
          <li v-for="item in ranklist.female" v-if="item.collapse" :key="item._id">
            <RankMale :rankInfo="item"></RankMale>
          </li>
        </ul>
      </ul>
    </div>
  </div>
</template>
<script>
  import api from '@/api/api'
  import RankMale from './RankItem'
    export default {
        name: "RankList",
        data : function () {
          return {
            ranklist: {},
            maleOtherRankIsShow: false,
            femaleOtherRankIsShow: false
          }
        },
      components:{
        RankMale
      },
      created() {
        var that = this;
        api.getRankType().then(function (response) {
          that.ranklist = response.data;
        }).catch(function (err) {
          console.log(err);
        });
      },
      methods: {
        //男生别人家的排行榜显示与隐藏效果方法
        showMoreMaleRank () {
          this.maleOtherRankIsShow = !this.maleOtherRankIsShow
        },
        //女生别人家排行榜显示与隐藏效果方法
        showMoreFemaleRank () {
          this.femaleOtherRankIsShow = !this.femaleOtherRankIsShow
        }
      }
    }
</script>

<style scoped>
  li {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    font-size: .8rem;
    line-height: 2.4rem;
    margin-left: 1rem;
    margin-right: 1rem;
    border-bottom: .01rem solid #f3f3f3;
  }
  .fa-icon {
    height: 1rem;
    width: 1rem;
    margin-right: .5rem;
  }
  p {
    background-color: #f9f0f0;
    margin: 0;
    padding: .5rem 0 .5rem 1rem;
  }
  .other-rank {
    justify-content: space-between;
  }
  .rank-ty{
    margin-bottom: 1.5rem;
  }
  .rank-type img {
    width: 1.2rem;
    margin-right: 0.5rem;
    vertical-align: middle;
  }
  .angle img {
    width: 1rem;
  }
</style>
