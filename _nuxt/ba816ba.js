(window.webpackJsonp=window.webpackJsonp||[]).push([[9,7],{510:function(t,e,r){var content=r(514);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(29).default)("5fc610b0",content,!0,{sourceMap:!1})},511:function(t,e,r){var content=r(520);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(29).default)("30287170",content,!0,{sourceMap:!1})},513:function(t,e,r){"use strict";r(510)},514:function(t,e,r){var n=r(28)(!1);n.push([t.i,".hover-off[data-v-98d5a748]{pointer-events:none}",""]),t.exports=n},519:function(t,e,r){"use strict";r(511)},520:function(t,e,r){var n=r(28)(!1);n.push([t.i,".input-xrp input[data-v-3b590ba0]::-webkit-inner-spin-button,.input-xrp input[data-v-3b590ba0]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.input-xrp input[type=number][data-v-3b590ba0]{-moz-appearance:textfield}.hover-off[data-v-3b590ba0]{pointer-events:none}",""]),t.exports=n},522:function(t,e,r){"use strict";r.r(e);r(218);var n=r(89),c=r(5),l=r(526),o=r(21),f=r(57),v=Object(n.b)({setup:function(){var t=Object(n.f)({rate:Object(n.a)((function(){return o.rateStore.rate})),isSushi:Object(n.a)((function(){return o.rateStore.isSushi})),rateTable:[{food:c.a.EMOJI.KIMCHI,exchange:c.a.EXCHANGE.UPBIT,krwString:Object(n.a)((function(){return o.upBitStore.currency.krw.string})),jpyString:Object(n.a)((function(){return o.upBitStore.currency.jpy.string})),krwNumber:Object(n.a)((function(){return o.upBitStore.currency.krw.number})),jpyNumber:Object(n.a)((function(){return o.upBitStore.currency.jpy.number})),premium:c.a.TEXT.DEFAULT.STRING,lastDay:Object(n.a)((function(){return o.upBitStore.currency.krw.lastDay})),lastDayPercentage:c.a.TEXT.DEFAULT.STRING},{food:c.a.EMOJI.SUSHI,exchange:c.a.EXCHANGE.BITBANK,krwString:Object(n.a)((function(){return o.bitBankStore.currency.krw.string})),jpyString:Object(n.a)((function(){return o.bitBankStore.currency.jpy.string})),krwNumber:Object(n.a)((function(){return o.bitBankStore.currency.krw.number})),jpyNumber:Object(n.a)((function(){return o.bitBankStore.currency.jpy.number})),premium:c.a.TEXT.DEFAULT.STRING,lastDay:Object(n.a)((function(){return o.bitBankStore.lastDay})),lastDayPercentage:c.a.TEXT.DEFAULT.STRING}]});return Object(n.i)((function(){return Object(l.cloneDeep)(t.rateTable)}),(function(){if(0!==t.rate&&t.rateTable.every((function(data){return data.krwString.value!==c.a.TEXT.DEFAULT.STRING}))){var e=Object(f.c)(t.rateTable[0].krwNumber.value,t.rateTable[1].krwNumber.value);t.rateTable[0].premium=e.toFixed(2);var r=Object(f.c)(t.rateTable[1].krwNumber.value,t.rateTable[0].krwNumber.value);t.rateTable[1].premium=r.toFixed(2);var n=Object(f.c)(t.rateTable[0].krwNumber.value,t.rateTable[0].lastDay.value);t.rateTable[0].lastDayPercentage=n.toFixed(2);var l=Object(f.c)(t.rateTable[1].jpyNumber.value,t.rateTable[1].lastDay.value);t.rateTable[1].lastDayPercentage=l.toFixed(2)}})),{COMMON:c.a,state:t}}}),d=(r(513),r(99)),S=r(129),T=r.n(S),h=r(504),O=r(537),component=Object(d.a)(v,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-row",[r("v-simple-table",{staticStyle:{width:"100%","margin-bottom":"5px"},scopedSlots:t._u([{key:"default",fn:function(){return[r("thead",[r("tr",[r("th",{staticClass:"text-left"},[t._v("\n            "+t._s(t.COMMON.TABLE.COLUMNS.LABEL.EXCHANGE)+"\n          ")]),t._v(" "),r("th",{staticClass:"text-left",staticStyle:{width:"30%"}},[t._v("\n            "+t._s(t.COMMON.TABLE.COLUMNS.LABEL.PRICE)+"\n          ")]),t._v(" "),r("th",{staticClass:"text-left",staticStyle:{width:"25%","text-align":"right"}},[t._v("\n            "+t._s(t.COMMON.TABLE.COLUMNS.LABEL.LAST_DAY)+"\n          ")]),t._v(" "),r("th",{staticClass:"text-left",staticStyle:{width:"25%","text-align":"right"}},[t._v("\n            "+t._s(t.COMMON.TABLE.COLUMNS.LABEL.PREMIUM)+"\n          ")])])]),t._v(" "),r("tbody",t._l(t.state.rateTable,(function(e){return r("tr",{key:e.food,staticClass:"hover-off"},[r("td",{staticClass:"exchange-font"},[t._v(t._s(e.food)+" "+t._s(e.exchange))]),t._v(" "),r("td",[t._v("\n            "+t._s(t.state.isSushi?e.jpyString.value:e.krwString.value)+"\n          ")]),t._v(" "),e.lastDayPercentage>0?r("td",[r("span",{staticStyle:{color:"teal"}},[t._v("+"+t._s(e.lastDayPercentage)+"%")])]):e.lastDayPercentage<0?r("td",[r("span",{staticStyle:{color:"tomato"}},[t._v(t._s(e.lastDayPercentage)+"%")])]):r("td",[t._v("\n            "+t._s(e.lastDayPercentage)+"\n          ")]),t._v(" "),e.premium>0?r("td",[r("span",{staticStyle:{color:"teal"}},[t._v("+"+t._s(e.premium)+"%")])]):e.premium<0?r("td",[r("span",{staticStyle:{color:"tomato"}},[t._v(t._s(e.premium)+"%")])]):r("td",[t._v("\n            "+t._s(e.premium)+"\n          ")])])})),0)]},proxy:!0}])})],1)}),[],!1,null,"98d5a748",null);e.default=component.exports;T()(component,{VRow:h.a,VSimpleTable:O.a})},523:function(t,e,r){"use strict";r.r(e);r(39);var n=r(89),c=r(5),l=r(21),o=Object(n.b)({setup:function(){var t=function(t){return r.isSushi?{min:Math.floor(t.currency.jpy.range.lowNumber),max:Math.floor(t.currency.jpy.range.highNumber),lowString:t.currency.jpy.range.lowString,highString:t.currency.jpy.range.highString}:{min:t.currency.krw.range.lowNumber,max:t.currency.krw.range.highNumber,lowString:t.currency.krw.range.lowString,highString:t.currency.krw.range.highString}},e=function(t){return r.isSushi?Math.floor(t.currency.jpy.number):t.currency.krw.number},r=Object(n.f)({rate:Object(n.a)((function(){return l.rateStore.rate})),isSushi:Object(n.a)((function(){return l.rateStore.isSushi})),satisfactionEmojis:c.a.EMOJI.SATISFACTION,range:[{food:"".concat(c.a.EMOJI.KIMCHI," ").concat(c.a.EXCHANGE.UPBIT),style:"height: 65px",slider:Object(n.a)((function(){return t(l.upBitStore)})),price:Object(n.a)({get:function(){return e(l.upBitStore)},set:function(){}})},{food:"".concat(c.a.EMOJI.SUSHI," ").concat(c.a.EXCHANGE.BITBANK),style:"",slider:Object(n.a)((function(){return t(l.bitBankStore)})),price:Object(n.a)({get:function(){return e(l.bitBankStore)},set:function(){}})}]});return{COMMON:c.a,state:r,calculateSatisfaction:function(t,e){return r.satisfactionEmojis[Math.min(Math.round((e-t.min)/(t.max-t.min)*c.a.RANGE.PERCENTAGE),c.a.RANGE.SATISFACTION)]}}}}),f=r(99),v=r(129),d=r.n(v),S=r(527),T=r(504),h=r(538),component=Object(f.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",t._l(t.state.range,(function(e){return r("v-row",{key:e.food+3,style:e.style},[r("v-col",{attrs:{cols:"12"}},[[t._v("\n        "+t._s(e.food)+"\n      ")],t._v(" "),r("v-slider",{attrs:{min:e.slider.value.min,max:e.slider.value.max,"thumb-size":24,"thumb-label":"always",readonly:""},scopedSlots:t._u([{key:"prepend",fn:function(){return[t._v("\n          "+t._s(e.slider.value.lowString)+"\n        ")]},proxy:!0},{key:"thumb-label",fn:function(r){var n=r.value;return[t._v("\n          "+t._s(t.calculateSatisfaction(e.slider.value,n))+"\n        ")]}},{key:"append",fn:function(){return[t._v("\n          "+t._s(e.slider.value.highString)+"\n        ")]},proxy:!0}],null,!0),model:{value:e.price.value,callback:function(r){t.$set(e.price,"value",r)},expression:"item.price.value"}})],2)],1)})),1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{VCol:S.a,VRow:T.a,VSlider:h.a})},524:function(t,e,r){"use strict";r.r(e);r(39),r(41),r(62);var n=r(89),c=r(5),l=r(21),o=r(57),f=Object(n.b)({setup:function(){var t=Object(n.f)({isSushi:Object(n.a)((function(){return l.rateStore.isSushi})),calculationTarget:Object(n.a)((function(){return l.calculatorStore.target})),hasAssets:Object(n.a)({get:function(){return""===l.calculatorStore.hasAssets&&(t.assetHint=""),l.calculatorStore.hasAssets},set:function(t){return l.calculatorStore.assets(t)}}),assetHint:"",estimateTable:[{exchange:"".concat(c.a.EMOJI.KIMCHI," ").concat(c.a.EXCHANGE.UPBIT),estimate:c.a.TEXT.DEFAULT.STRING},{exchange:"".concat(c.a.EMOJI.SUSHI," ").concat(c.a.EXCHANGE.BITBANK),estimate:c.a.TEXT.DEFAULT.STRING}],rules:[function(t){return null===t||""===t||t>c.a.RANGE.XRP.MIN||"Must be greater than 0."},function(t){return t<c.a.RANGE.XRP.MAX||"Must be less than or equal 100,000,000,000"}]}),e=function(e){return""===t.hasAssets?c.a.TEXT.DEFAULT.STRING:l.calculatorStore.target===c.a.CALCULATOR.TARGET.XRP?t.isSushi?Object(o.b)(c.a.LANG.CODE.SUSHI,c.a.LANG.CURRENCY.SUSHI,t.hasAssets*e.currency.jpy.number,3):Object(o.b)(c.a.LANG.CODE.KIMCHI,c.a.LANG.CURRENCY.KIMCHI,t.hasAssets*e.currency.krw.number):l.calculatorStore.target===c.a.CALCULATOR.TARGET.KRW?(t.assetHint=Object(o.b)(c.a.LANG.CODE.SUSHI,c.a.LANG.CURRENCY.SUSHI,t.hasAssets/l.rateStore.rate,3),"".concat(c.a.CALCULATOR.UNIT.XRP," ")+Object(o.a)(t.hasAssets/e.currency.krw.number)):l.calculatorStore.target===c.a.CALCULATOR.TARGET.JPY?(t.assetHint=Object(o.b)(c.a.LANG.CODE.KIMCHI,c.a.LANG.CURRENCY.KIMCHI,t.hasAssets*l.rateStore.rate,3),"".concat(c.a.CALCULATOR.UNIT.XRP," ")+Object(o.a)(t.hasAssets/e.currency.jpy.number)):c.a.TEXT.DEFAULT.STRING};return{COMMON:c.a,state:t,estimateCurrency:function(){Object(n.d)((function(){null===t.hasAssets?t.hasAssets="":t.hasAssets=t.hasAssets.replace(/^0+/,"")})),t.hasAssets<c.a.RANGE.XRP.MIN&&Object(n.d)((function(){return t.hasAssets=c.a.RANGE.XRP.MIN})),t.hasAssets>c.a.RANGE.XRP.MAX&&Object(n.d)((function(){return t.hasAssets=c.a.RANGE.XRP.MAX})),t.estimateTable[0].estimate=Object(n.a)((function(){return e(l.upBitStore)})),t.estimateTable[1].estimate=Object(n.a)((function(){return e(l.bitBankStore)}))}}}}),v=(r(519),r(99)),d=r(129),S=r.n(d),T=r(527),h=r(210),O=r(504),m=r(537),y=r(574),component=Object(v.a)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-row",[r("v-text-field",{staticClass:"input-xrp",attrs:{label:"Input your "+t.state.calculationTarget,min:t.COMMON.RANGE.XRP.MIN,max:t.COMMON.RANGE.XRP.MAX,type:"number",clearable:"",rules:t.state.rules,"hide-details":"auto",hint:t.state.assetHint,prefix:t.COMMON.CALCULATOR.UNIT[t.state.calculationTarget]},on:{input:t.estimateCurrency},model:{value:t.state.hasAssets,callback:function(e){t.$set(t.state,"hasAssets",e)},expression:"state.hasAssets"}})],1),t._v(" "),r("v-row",[r("v-simple-table",{staticStyle:{width:"100%"},scopedSlots:t._u([{key:"default",fn:function(){return[r("thead",[r("tr",[r("th",{staticClass:"text-left"},[t._v("\n              "+t._s(t.COMMON.TABLE.COLUMNS.LABEL.EXCHANGE)+"\n            ")]),t._v(" "),r("th",{staticClass:"text-left",attrs:{width:"70%"}},[t._v("\n              "+t._s(t.COMMON.TABLE.COLUMNS.LABEL.ESTIMATE)+"\n            ")])])]),t._v(" "),r("tbody",t._l(t.state.estimateTable,(function(e){return r("tr",{key:e.exchange+1,staticClass:"hover-off"},[r("td",[t._v(t._s(e.exchange))]),t._v(" "),r("td",[t._v(t._s(e.estimate.value||e.estimate))])])})),0)]},proxy:!0}])}),t._v(" "),r("v-col",{attrs:{cols:"12"}},[r("div",{staticStyle:{display:"flex"}},[r("span",{staticStyle:{"font-size":"12px","margin-left":"0","line-height":"40px"}},[t._v("\n          Circulating Supply 46,135,372,183 XRP\n        ")]),t._v(" "),r("div",{staticStyle:{"font-size":"12px","margin-left":"auto","line-height":"40px"}},[t._v("\n          46.14%\n        ")])]),t._v(" "),r("v-progress-linear",{attrs:{value:"46.14"}}),t._v(" "),r("div",{staticStyle:{"font-size":"12px","margin-left":"auto","line-height":"40px","text-align":"right"}},[t._v("\n        * Max Supply 100,000,000,000 XRP\n      ")])],1)],1)],1)}),[],!1,null,"3b590ba0",null);e.default=component.exports;S()(component,{VCol:T.a,VProgressLinear:h.a,VRow:O.a,VSimpleTable:m.a,VTextField:y.a})},525:function(t,e,r){"use strict";r.r(e);var n=r(89),c=r(5),l=r(21),o=Object(n.b)({setup:function(){var t=Object(n.f)({trend:Object(n.a)((function(){return l.upBitStore.trends})),sparkline:[{key:Object(n.a)((function(){return l.upBitStore.trendKey[0]})),gradient:c.a.TREND.GRADIENTS[4],lineWidth:2,type:"trend"},{key:Object(n.a)((function(){return l.upBitStore.trendKey[1]})),gradient:c.a.TREND.GRADIENTS[5],lineWidth:4,type:"bar"}]});return{COMMON:c.a,state:t}}}),f=r(99),v=r(129),d=r.n(v),S=r(527),T=r(504),h=r(575),component=Object(f.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-row",{staticStyle:{"align-items":"center"}},t._l(t.state.sparkline,(function(e){return r("v-col",{key:e.key.value,attrs:{cols:"12"}},[r("v-sparkline",{attrs:{fill:!1,gradient:e.gradient,"line-width":e.lineWidth,padding:8,smooth:10,value:t.state.trend,"auto-draw":"",type:e.type}})],1)})),1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{VCol:S.a,VRow:T.a,VSparkline:h.a})},530:function(t,e,r){var content=r(544);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(29).default)("14f45f69",content,!0,{sourceMap:!1})},543:function(t,e,r){"use strict";r(530)},544:function(t,e,r){var n=r(28)(!1);n.push([t.i,".input-xrp input[data-v-77d92949]::-webkit-inner-spin-button,.input-xrp input[data-v-77d92949]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.input-xrp input[type=number][data-v-77d92949]{-moz-appearance:textfield}.info-width[data-v-77d92949]{position:absolute;top:0;right:0;text-align:right}",""]),t.exports=n},581:function(t,e,r){"use strict";r.r(e);r(47),r(84),r(218);var n=r(89),c=r(5),l=r(21),o=r(522),f=r(523),v=r(524),d=r(525),S=Object(n.b)({components:{Trend:d.default,Calculator:v.default,LowAndHigh:f.default,Premium:o.default},setup:function(){Object(n.e)((function(){l.rateStore.rates(),setInterval(l.rateStore.rates,c.a.INTERVAL.RATE_REQUEST),l.upBitStore.socket(),l.bitBankStore.socket(),l.bitBankStore.lastDayPrice(),setInterval(l.bitBankStore.lastDayPrice,c.a.INTERVAL.REST_API_REQUEST),l.upBitStore.trend(),setInterval(l.upBitStore.trend,c.a.INTERVAL.TREND_REQUEST)})),Object(n.h)({title:c.a.HEAD.INDEX.TITLE.join(" | ")});var t=Object(n.f)({calculationTarget:Object(n.a)({get:function(){return l.calculatorStore.target},set:function(t){e(t)}}),rateJpyToKrw:Object(n.a)((function(){return(100*l.rateStore.rate).toFixed(2)}))}),e=function(e){l.calculatorStore.changeTarget(e),l.calculatorStore.assets(),t.calculationTarget===c.a.CALCULATOR.TARGET.KRW&&l.rateStore.isSushi?l.rateStore.toggleSushi():t.calculationTarget!==c.a.CALCULATOR.TARGET.JPY||l.rateStore.isSushi||l.rateStore.toggleSushi()};return{COMMON:c.a,state:t,changeCalculationTarget:e}},head:{}}),T=(r(543),r(99)),h=r(129),O=r.n(h),m=r(583),y=r(209),A=r(98),E=r(527),_=r(504),C=r(580),N=r(579),component=Object(T.a)(S,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-row",{attrs:{justify:"center",align:"center"}},[r("v-col",{attrs:{cols:"12",sm:"8",md:"6"}},[r("v-card",[r("v-card-title",{staticClass:"headline"},[t._v("Price")]),t._v(" "),r("v-col",{staticClass:"info-width",attrs:{cols:"8",sm:"8"}},[r("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,c=e.attrs;return[r("v-alert",t._g(t._b({attrs:{dense:"",outlined:"",type:"info"}},"v-alert",c,!1),n),[t._v("\n              "+t._s(t.COMMON.CALCULATOR.UNIT.JPY)+"100 =\n              "+t._s(t.COMMON.CALCULATOR.UNIT.KRW)+t._s(t.state.rateJpyToKrw)+"\n            ")])]}}])},[t._v(" "),r("span",[t._v("Exchange rate information is updated every 15 minutes.")])])],1),t._v(" "),r("v-card-text",[r("premium")],1)],1)],1),t._v(" "),r("v-col",{attrs:{cols:"12",sm:"8",md:"6"}},[r("v-card",[r("v-card-title",{staticClass:"headline"},[t._v("24H Low & High")]),t._v(" "),r("v-card-text",[r("low-and-high")],1)],1)],1),t._v(" "),r("v-col",{attrs:{cols:"12",sm:"8",md:"6"}},[r("v-card",[r("v-card-title",{staticClass:"headline"},[t._v("Trend Last 7 Days")]),t._v(" "),r("v-card-text",[r("trend")],1)],1)],1),t._v(" "),r("v-col",{attrs:{cols:"12",sm:"8",md:"6"}},[r("v-card",[r("v-card-title",{staticClass:"headline"},[t._v(" XRP Calculator ")]),t._v(" "),r("v-col",{staticStyle:{position:"absolute",top:"0",right:"0"},attrs:{cols:"5",sm:"5"}},[r("v-select",{attrs:{label:"Calculation target",outlined:"",dense:"",items:t.COMMON.CALCULATOR.ITEMS},model:{value:t.state.calculationTarget,callback:function(e){t.$set(t.state,"calculationTarget",e)},expression:"state.calculationTarget"}})],1),t._v(" "),r("v-card-text",[r("calculator")],1)],1)],1)],1)}),[],!1,null,"77d92949",null);e.default=component.exports;O()(component,{Premium:r(522).default,LowAndHigh:r(523).default,Trend:r(525).default,Calculator:r(524).default}),O()(component,{VAlert:m.a,VCard:y.a,VCardText:A.b,VCardTitle:A.c,VCol:E.a,VRow:_.a,VSelect:C.a,VTooltip:N.a})}}]);