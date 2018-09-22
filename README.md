# 基于 vue.js的UI组件库-轱辘

1. 设置CSS样式
在使用此框架前请在CSS中开启border-box
```
*,*::before,*::after{ box-sizing: border-box;}
```
你还需要设置一些自定义变量如默认颜色等
```
html {
    --font-size: 14px;
    --border-radius: .3rem;
    --border-color: #ccc;
    --border-color-hover: #666;
    --button-bg: #fff;
    --botton-active-bg: #ccc;
}
```
2. 安装gulu

3. 引入gulu

4. 文档介绍
-  g-icon

    name属性选择icon样式
    ```
    <g-icon name="seccess"></g-icon>
    ```
- g-button

    | 可选属性 | 参数| 作用 |
    |--|--|--|
    |icon |icon名|设置按钮内icon样式|
    |iconPosition| left/right| 设置icon的位置|
    |loading|false| 按钮icon变为loading样式|
    |type|round|只带icon的圆形按钮|
    |disable|false| 禁用该按钮 |

- g-button-group

    按钮组合
    ```
    <g-button-group>
        <g-button icon="left">上一页<g-button>
        <g-button icon="right">下一页<g-button>
    </g-button-group>
    ```
- g-input