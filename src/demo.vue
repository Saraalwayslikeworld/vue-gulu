<template>
  <div>
    <h1>popover</h1>
    <div style="padding: 100px;">
      <lu-popover placement="left" trigger="hover">
        <template slot="content">
          <span>这是一段内容,这是一段内容,这是一段内容,这是一段内容。</span>
        </template>
        <lu-button>点击我 激活</lu-button>
      </lu-popover>
      <lu-popover placement="right" trigger="hover">
          <template slot="content">
            <span>这是一段内容,这是一段内容,这是一段内容,这是一段内容。</span>
          </template>
          <lu-button>点击我 激活</lu-button>
        </lu-popover>
      <lu-popover placement="top">
        <template slot="content" slot-scope="{close}">
          <span>
            我是点击内容。
            <lu-button @click="close">关闭</lu-button>
          </span>
        </template>
        <lu-button>点击我 激活</lu-button>
      </lu-popover>
      <lu-popover placement="bottom">
          <template slot="content">
            <span>我是点击内容。</span>
          </template>
          <lu-button>点击我 激活</lu-button>
        </lu-popover>
    </div>
    <h1>collapse</h1>
    <div class="box">
      <lu-collapse :actived.sync="activeName" single>
        <lu-collapse-item title="aaaaa" name="1">
          <div class="box">aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</div>
          <div class="box">aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</div>
        </lu-collapse-item>
        <lu-collapse-item title="bbbbb" name="2">
          bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        </lu-collapse-item>
        <lu-collapse-item title="ccccc" name="3">
            <div class="box">ccccccccccccccccccccccccccccccccccccccccc</div>

        </lu-collapse-item>
      </lu-collapse>
    </div>
    <h1>input</h1>
    <div class="box">
      <lu-input type="search"></lu-input>
      <lu-input value="hello" v-model="msg"></lu-input>
      <p>{{ msg }}</p>
      <lu-input value="hello" readonly></lu-input>
      <lu-input value="hello" disabled></lu-input>
    </div>
    <div class="box"><lu-input value="hello" error="error"></lu-input></div>
    <h1>icon</h1>
    <div class="box">
      <lu-icon name="success"></lu-icon>
      <lu-icon name="warning"></lu-icon>
      <lu-icon name="search"></lu-icon>
      <lu-icon name="calander"></lu-icon>
      <lu-icon name="close"></lu-icon>
    </div>
    <h1>button</h1>
    <div class="box">
      <lu-button icon="edit" type="round"></lu-button>
      <lu-button icon="edit" disabled>编辑</lu-button>
      <lu-button :loading="loading1" @click="loading1=!loading1" :disabled="false">按钮</lu-button>
      <lu-button :loading="loading2" @click="loading2=!loading2" icon="edit">按钮</lu-button>
      <lu-button :loading="loading3" @click="loading3=!loading3" icon="setting" icon-position="right">按钮</lu-button>
    </div>
    <div class="box">
      <lu-button-group>
        <lu-button icon="left">上一页</lu-button>
        <lu-button>更多</lu-button>
        <lu-button icon="right" icon-position="right">下一页</lu-button>
      </lu-button-group>
    </div>
    <h1>layout</h1>
    <div class="box" style="border: 1px solid red">
      <lu-row gutter="10">
        <lu-col span="12" :ipad="{span:8}" :narrow-pc="{span:6}"> 1 </lu-col>
        <lu-col span="12" :ipad="{span:16}" :narrow-pc="{span:18}"> 2 </lu-col>
      </lu-row>
      <lu-row gutter="20">
        <lu-col span="9" offset="1"> 1 </lu-col>
        <lu-col span="14"> 2 </lu-col>
      </lu-row>
      <lu-row gutter="20">
        <lu-col span="9" offset="1">
          <lu-row align="right">
            <div>1</div>
            <div>2</div>
            <div>3</div>
          </lu-row>
        </lu-col>
        <lu-col span="4"> 2 </lu-col>
        <lu-col span="10"> 3 </lu-col>
      </lu-row>
    </div>
    <h1>container</h1>
    <div class="box">
      <lu-layout class="bdr" style="height: 500px">
        <lu-header class="bdr">header</lu-header>
        <lu-layout class="bdr">
          <lu-aside class="bdr">aside</lu-aside>
          <lu-layout class="bdr">
            <lu-content class="bdr">content</lu-content>
            <lu-footer class="bdr">footer</lu-footer>
          </lu-layout>
        </lu-layout>
      </lu-layout>
    </div>
    <h1>tabs</h1>
    <lu-tabs :selected.sync="selected" direction="vertical">
      <lu-tabs-head>
        <lu-tabs-item name="index">
          首页
        </lu-tabs-item>
        <lu-tabs-item name="cook">烹饪</lu-tabs-item>
        <lu-tabs-item name="music">音乐</lu-tabs-item>
        <template slot="actions">
          <button>设置</button>
        </template>
      </lu-tabs-head>
      <lu-tabs-content style="height: 200px;">
        <lu-tabs-pane name="index">首页内容</lu-tabs-pane>
        <lu-tabs-pane name="cook">烹饪内容</lu-tabs-pane>
        <lu-tabs-pane name="music">音乐内容</lu-tabs-pane>
      </lu-tabs-content>
    </lu-tabs>
  </div>
</template>

<script>
import './static/iconfont.js';
import Vue from 'vue';
import Button from './button/button';
import Icon from './icon/icon';
import ButtonGroup from './button/button-group';
import Input from './input/input';
import Row from './layout/row';
import Col from './layout/col';
import Layout from './container/layout';
import Aside from './container/aside';
import Content from './container/content';
import Header from './container/header';
import Footer from './container/footer';
import Toast from './toast/toast';
import Plugin from './toast/plugin';
import Tabs from './tabs/tabs';
import TabsHead from './tabs/tabs-head';
import TabsItem from './tabs/tabs-item';
import TabsContent from './tabs/tabs-content';
import TabsPane from './tabs/tabs-pane';
import Popover from './popover/popover';
import Collapse from './collapse/collapse';
import CollapseItem from './collapse/collapseItem';
export default {
  data(){
    return {
      loading1: false,
      loading2: false,
      loading3: false,
      msg: 'hi',
      selected: 'music',
      activeName: '2'
    };
  },
  components:{
    'lu-icon':Icon,
    'lu-button':Button,
    'lu-button-group':ButtonGroup,
    'lu-input':Input,
    'lu-row':Row,
    'lu-col':Col,
    'lu-layout':Layout,
    'lu-aside':Aside,
    'lu-content':Content,
    'lu-header':Header,
    'lu-footer':Footer,
    'lu-toast':Toast,
    'lu-tabs':Tabs,
    'lu-tabs-head':TabsHead,
    'lu-tabs-item':TabsItem,
    'lu-tabs-content':TabsContent,
    'lu-tabs-pane':TabsPane,
    'lu-popover':Popover,
    'lu-collapse':Collapse,
    'lu-collapse-item':CollapseItem,
  }
}
</script>

<style scoped>
 * {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
    }

    :root {
      --font-size: 14px;
      --border-radius: 0.3rem;
      --border-color: #ccc;
      --border-color-hover: #666;
      --button-bg: #fff;
      --botton-active-bg: #ccc;
      --disabled-bg: #ddd;
      --disabled-color: #999;
    }

    html {
      margin: 30px;
    }

    .box {
      margin: 20px;
    }

    .bdr {
      border: 1px solid red;
      min-height: 100px;
    }
</style>