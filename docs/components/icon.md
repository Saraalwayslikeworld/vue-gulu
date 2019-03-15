
# Button

## 基础用法
```
<g-button icon="edit" type="round"></g-button>
<g-button icon="edit" disabled>编辑</g-button>
<g-button :loading="loading1" @click="loading1=!loading1" :disabled="false">按钮</g-button>
<g-button :loading="loading2" @click="loading2=!loading2" icon="edit">按钮</g-button>
<g-button :loading="loading3" @click="loading3=!loading3" icon="setting" icon-position="right">按钮</g-button>
```
## 图标按钮
```
```
## 加载中
```
```
## 禁用状态
```
```
## 按钮组
```
```
## 参数
| 参数  | 说明 | 类型 | 可选值 | 默认值 |
|--|--|--|--|--|
|icon |按钮中icon类型| string| edit/success/warning/search/calander/close |--|
|iconPosition| 设置icon的位置 | string |left/right| left |
|loading|按钮icon变为loading样式| boolean| true/false| false |
|type| 只带icon的圆形按钮 | string | round| -- |
|disable|禁用该按钮| boolean| true/false| false |