> 官网: [https://haomo-tech.com](https://haomo-tech.com)

> 作者: 毫末科技

> 邮箱: hxg@haomo-studio.com

## 预览

![预览图片](http://downloads.haomo-tech.com/taro/hm-profit-card.png)

[在线效果预览](http://template.taro.haomo-tech.com/#/pages/test-component/hm-profit-card)

更多毫末科技的Taro跨端模板，请见[毫末科技Taro跨端模板](https://haomo-tech.com/sale.html)

## 技术支持

我们公司提供超低价的切图服务哈。移动端平均50元每个页面，PC Web端平均80元每个页面。目前支持出vue、react、uniapp、taro、flutter、小程序代码代码，代码支持自适应。其中uniapp、taro一份代码支持多端。app原生会在五月份开始支持。示例demo: [http://edu.uniapp.haomo-tech.com](http://edu.uniapp.haomo-tech.com)。部分样例代码：[http://downloads.haomo-tech.com/uniapp-demo.zip](http://downloads.haomo-tech.com/uniapp-demo.zip)

* [Taro物料市场](https://taro-ext.jd.com/plugin/view/)

* [npm包](https://www.npmjs.com/package/hm-taro-profit-card)

* [github地址](https://github.com/haomo-studio/hm-taro-profit-card)

* [gitee地址](https://gitee.com/haomo/hm-taro-profit-card)

毫末科技将长期迭代本组件。需要技术支持，请进钉钉群：

<img width="250" src="http://downloads.haomo-tech.com/毫末Taro组件技术支持.jpg">

## 概述

毫末Taro毫末收益趋势卡片组件。支持H5/小程序(微信、支付宝、头条、百度、QQ)/App；组件可自适应各种屏幕大小的手机。

## 使用

```jsx
import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'

import HmProfitCard from '../src/components/hm/hm-profit-card/index.jsx'

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  config = {
    navigationBarTitleText: '毫末Taro毫末收益趋势卡片组件'
  }

  render () {
    return (
      <View className='index'>
        <HmProfitCard/>
      </View>
    )
  }
}
```

## 属性说明

| 属性名        | 类型     | 默认值 | 说明                                                                       |
|-----------   |---------|--------|----------------------------------------------------------------------------|
| options        | Object  | -      | 卡片属性                                                                   |

options对象各个属性说明如下：

| 属性名        | 类型     | 默认值 | 说明                                                                       |
|-----------   |---------|--------|----------------------------------------------------------------------------|
| text        | String  | -      | 标题文字                                                                   |
| titleimg          | String  | -  | 标题图片                                                     |
| iconofflineleft          | String  | -  | 左侧箭头图标                                                     |
| num          | String  | -  | 趋势百分比                                                     |
| price          | String  | -  | 收益                                                     |
| actionBg          | String  | -  | 收益图片                                                     |

## 事件说明

| 事件称名   | 事件说明           | 返回参数 |
|----------|--------------------|----------|
| @click   | 点击 Card 触发事件 | -        |

## 更新日志

### 0.0.1(2020-03-07)

* 完成第一个版本
