'use strict';

import Taro, { Component } from '@tarojs/taro';
import { View, Text, Image } from '@tarojs/components';

import styles from './style.js';

import titleimg from './images/img_24270_0_0.png'
import iconofflineleft from './images/img_24270_0_1.png'
import actionBg from './images/img_24270_0_2.png'

class HmProfitCard extends Component {
  constructor(props) {
    super(props);
    let defaultState = {
      text: '总收益',
      titleimg,
      iconofflineleft,
      num: '- 0.42%',
      price: '¥ 239.94',
      actionBg
    };
    this.state = Object.assign(defaultState, JSON.parse(JSON.stringify(props)));
  }

  render() {
    return (
      <View style={styles.hmProfitCard}>
        <View style={styles.cardClass}>
          <View style={styles.title}>
            <Text style={styles.text}>{this.state.text}</Text>
            <Image style={styles.titleimg} src={this.state.titleimg} />
          </View>
          <View style={styles.body}>
            <View style={styles.priceWrap}>
              <View style={styles.tipsClass}>
                <Image style={styles.iconofflineleft} src={this.state.iconofflineleft} />
                <Text style={styles.num}>{this.state.num}</Text>
              </View>
              <Text style={styles.price}>{this.state.price}</Text>
            </View>
            <Image style={styles.actionBg} src={this.state.actionBg} />
          </View>
        </View>
      </View>
    );
  }
}
export default HmProfitCard;
