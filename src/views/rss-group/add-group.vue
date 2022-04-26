<template>
  <div class="group-setting">
    <el-card class="group-form">
      <el-form ref="group" label-width="100px" :model="group">
        <!-- ID -->
        <el-form-item label="ID">
          <el-input
            v-model="group.id"
            readonly
          ></el-input>
        </el-form-item>
        <!-- 数据源 -->
        <el-form-item
          label="数据源"
          prop="remote"
          :rules="[
            {required: true, message: '请输入数据源链接', trigger: 'blur'}
          ]"
        >
          <el-select
            v-model="group.remote"
            class="long-select"
            placeholder="数据源选择"
          >
            <el-option
              v-for="remoteOption in remoteOptions"
              :key="remoteOption.value"
              :label="remoteOption.label"
              :value="remoteOption.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <!-- 匹配规则 -->
        <el-form-item
          v-for="(regex, regexIndex) in group.regex"
          :key="regexIndex"
          :prop="'regex.' + regexIndex + '.reg'"
          :label="'匹配规则' + (regexIndex + 1)"
          :rules="[
            {required: true, message: '请输入匹配规则', trigger: 'blur'}
          ]"
        >
          <div class="pattern-input-box">
            <!-- 匹配正则 -->
            <div class="pattern-reg">
              <el-input
                v-model="regex.reg"
                type="textarea"
              ></el-input>
            </div>
            <div class="pattern-options">
              <!-- 季度编号 -->
              <el-form-item
                label="季度编号"
                :prop="'regex.' + regexIndex + '.season'"
                class="season"
                :rules="[
                  {required: true, message: '请选择季度', trigger: 'blur'}
                ]"
              >
                <el-select
                  v-model="regex.season"
                  placeholder="季度编号"
                  size="small"
                >
                  <el-option
                    v-for="(seasonOption, seasonOptionIndex) in seasonOptions"
                    :key="seasonOptionIndex"
                    :label="seasonOption.label"
                    :value="seasonOption.value"
                  ></el-option>
                </el-select>
              </el-form-item>
              <!-- 剧集偏移量 -->
              <el-form-item label="剧集偏移量" prop="offset" class="offset">
                <el-input
                  v-model="regex.offset"
                  placeholder="剧集偏移量"
                  type="number"
                  size="small"
                ></el-input>
              </el-form-item>
            </div>
            <div class="pattern-input-btns">
              <el-button type="text">ESCAPE</el-button>
              <el-button type="text" @click="copyPattern(regex.reg)">EPISODE</el-button>
              <el-button
                v-if="regexIndex !== 0"
                type="danger"
                plain
                round
                size="mini"
                @click="removePattern(regex)"
              >DELETE</el-button>
            </div>
          </div>
        </el-form-item>
        <el-form-item>
          <el-button
            type="info"
            size="small"
            plain
            @click="newPattern"
          >添加新规则</el-button>
        </el-form-item>
        <!-- 剧集名称 -->
        <el-form-item
          label="剧集名称"
          prop="series"
          :rules="[
            {required: true, message: '请输入剧集名称', trigger: 'blur'}
          ]"
        >
          <el-select
            v-model="group.series"
            class="long-select"
            placeholder="请选择系列"
          >
            <el-option
              v-for="(seriesOption, index) in seriesOptions"
              :key="index"
              :label="seriesOption.label"
              :value="seriesOption.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <!-- 语言 -->
        <el-form-item label="语言设置">
          <el-input
            v-model="group.language"
          ></el-input>
        </el-form-item>
        <!-- 质量 -->
        <el-form-item label="质量设置">
          <el-input
            v-model="group.quality"
          ></el-input>
        </el-form-item>
        <!-- save or delete -->
        <el-form-item>
          <div class="group-confirm">
            <el-button
              type="primary"
              @click="bindSaveGroup"
            >SAVE</el-button>
            <el-button
              type="danger"
            >DELETE</el-button>
          </div>
        </el-form-item>
      </el-form>
    </el-card>
    <!-- 侧边栏动画列表 -->
    <el-card class="anime-sidebar">
      <ul class="anime-list">
        <li
          v-for="(animeItem, index) in animeData"
          :key="index"
          class="anime-item"
          @click="handleAnimeName(animeItem)"
        >{{ animeItem.name }}</li>
      </ul>
    </el-card>
  </div>
</template>

<script>
import { escapeRegExp } from 'lodash'
export default {
  name: 'AddGroup',
  data() {
    return {
      group: {
        id: '56',
        remote: 'input',
        regex: [{
          reg: '123',
          offset: 0,
          season: '01'
        }, {
          reg: '456',
          offset: 1,
          season: '02'
        }],
        series: '',
        language: 'Chinese',
        quality: 'WEBDL-1080p'
      },
      remoteOptions: [{
        label: 'https://element.eleme.cn/#/zh-CN/component/select',
        value: 'select'
      }, {
        label: 'https://element.eleme.cn/#/zh-CN/component/input',
        value: 'input'
      }],
      seriesOptions: [{
        label: '哆啦A梦',
        value: '哆啦'
      }],
      seasonOptions: [{
        label: '01',
        value: '01'
      }, {
        label: '02',
        value: '02'
      }],
      animeData: [{
        name: '[MingY] 街角魔族 2丁目 / Machikado Mazoku S2 [03][WEBrip 1080p HEVC 8bit AAC][简体内封] [142.75 MB]'
      }, {
        name: '[MingY] 街角魔族 2丁目 / Machikado Mazoku S2 [03][WEBrip 1080p HEVC 8bit AAC][简体内封] [142.75 MB]'
      }, {
        name: '[MingY] 街角魔族 2丁目 / Machikado Mazoku S2 [03][WEBrip 1080p HEVC 8bit AAC][简体内封] [142.75 MB]'
      }, {
        name: '[MingY] 街角魔族 2丁目 / Machikado Mazoku S2 [03][WEBrip 1080p HEVC 8bit AAC][简体内封] [142.75 MB]'
      }]
    }
  },
  methods: {
    removePattern(pattern) {
      const index = this.group.regex.indexOf(pattern)
      if (index !== -1) {
        this.group.regex.splice(index, 1)
      }
    },
    newPattern() {
      this.group.regex.push({
        reg: '',
        season: '',
        offset: 0
      })
    },
    copyPattern(reg) {
      const text = reg
      const copyPromise = navigator.clipboard.writeText(text)
      copyPromise.then(() => {
        this.$message({
          message: '已复制到剪切板',
          type: 'success'
        })
      }).catch(() => {
        this.$message({
          message: '复制失败',
          type: 'danger'
        })
      })
    },
    bindSaveGroup() {
      this.$refs['group'].validate((valid) => {
        if (valid) {
          console.log(this.group, 'submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    handleAnimeName(anime) {
      const name = escapeRegExp(anime.name)
      // this.group.regex[0].reg = name
      for (const regex of this.group.regex) {
        if (regex.reg === '') {
          regex.reg = name
          return
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.group-setting{
  padding: 30px;
  display: flex;
  justify-content: space-between;
  .group-form{
    width: 70%;
    .long-select{
      width: 100%;
    }
    .pattern-input-box{
      .pattern-reg{

      }
      .pattern-options{
        margin-top: 10px;
        display: flex;
        .season, .offset{
          flex: 1;
          .pattern-label{
            color: #666;
            margin-right: 1em;
          }
          .el-input, .el-select{
            width: 200px;
          }
        }
      }
    }
    .group-confirm{
      display: flex;
      justify-content: space-between;
    }
  }
  .anime-sidebar{
    flex: 1;
    margin-left: 20px;
    max-height: 700px;
    overflow: auto;
    .anime-list{
      padding-left: 0;
      .anime-item{
        font-size: 16px;
        line-height: 1.5;
        border-bottom: 1px solid #ddd;
        list-style: none;
        padding: 10px 0;
        cursor: pointer;
        &:last-child{
          border-bottom: none;
        }
      }
    }
  }
}
</style>