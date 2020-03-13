import Taro from '@tarojs/taro';
export default {
  hmProfitCard: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    width: Taro.pxTransform(750),
    height: Taro.pxTransform(454)
  },
  cardClass: {
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
    borderRadius: Taro.pxTransform(39),
    boxShadow: '0px 10px 30px rgba(209, 213, 223, 0.50)',
    backgroundColor: '#ffffff',
    width: Taro.pxTransform(721),
    height: Taro.pxTransform(376)
  },
  title: {
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: Taro.pxTransform(58),
    paddingRight: Taro.pxTransform(62),
    paddingLeft: Taro.pxTransform(58),
    width: Taro.pxTransform(721)
  },
  text: {
    opacity: 1,
    width: Taro.pxTransform(94),
    height: Taro.pxTransform(47),
    lineHeight: Taro.pxTransform(47),
    whiteSpace: 'nowrap',
    color: '#858997',
    fontSize: Taro.pxTransform(31),
    fontWeight: 400
  },
  titleimg: { marginTop: Taro.pxTransform(19), width: Taro.pxTransform(35), height: Taro.pxTransform(8) },
  body: { display: 'flex', flexDirection: 'row', marginTop: Taro.pxTransform(62) },
  priceWrap: {
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
    marginLeft: Taro.pxTransform(58),
    height: Taro.pxTransform(160)
  },
  tipsClass: { display: 'flex', alignItems: 'center', flexDirection: 'row', height: Taro.pxTransform(41) },
  iconofflineleft: { marginLeft: Taro.pxTransform(14), width: Taro.pxTransform(23), height: Taro.pxTransform(23) },
  num: {
    opacity: 1,
    marginLeft: Taro.pxTransform(19),
    width: Taro.pxTransform(95),
    height: Taro.pxTransform(41),
    lineHeight: Taro.pxTransform(41),
    whiteSpace: 'pre',
    color: '#f64000',
    fontFamily: 'Helvetica',
    fontSize: Taro.pxTransform(27),
    fontWeight: 'normal'
  },
  price: {
    opacity: 1,
    marginTop: Taro.pxTransform(31),
    width: Taro.pxTransform(263),
    height: Taro.pxTransform(78),
    lineHeight: Taro.pxTransform(78),
    whiteSpace: 'pre',
    color: '#15181a',
    fontSize: Taro.pxTransform(62),
    fontWeight: 400
  },
  actionBg: {
    marginTop: Taro.pxTransform(4),
    marginLeft: Taro.pxTransform(49),
    width: Taro.pxTransform(312),
    height: Taro.pxTransform(156)
  }
};
