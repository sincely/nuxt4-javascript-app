<!--
 * @Author: 白雾茫茫丶<baiwumm.com>
 * @Date: 2024-05-30 13:54:54
 * @LastEditors: 白雾茫茫丶<baiwumm.com>
 * @LastEditTime: 2024-05-30 17:01:07
 * @Description: 社交图标
-->
<script setup>
defineProps({
  icon: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  tip: {
    type: String,
    required: true
  }
})
</script>

<template>
  <el-tooltip :content="tip">
    <el-button
      circle
      text
      :href="url"
      target="_blank"
      tag="a"
    >
      <Icon
        :name="icon"
        class="h-5 w-5"
      />
    </el-button>
  </el-tooltip>
</template>
