<template>
  <el-container>
    <el-header>
      <el-menu class="el-menu-demo" mode="horizontal">
        <el-menu-item index="1">Home</el-menu-item>
        <el-submenu index="2">
          <template slot="title">Categories</template>
          <el-menu-item index="2-1">Category One</el-menu-item>
          <el-menu-item index="2-2">Category Two</el-menu-item>
          <el-menu-item index="2-3">Category Three</el-menu-item>
        </el-submenu>
        <el-menu-item index="3">About</el-menu-item>
        <el-menu-item index="4">Administrator</el-menu-item>
      </el-menu>
    </el-header>
    <el-main>
      <el-row>
        <el-col :span="12" :offset="6">
          <nuxt/>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>
