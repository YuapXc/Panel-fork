export const details = [{
  title: '触发特效后生命值',
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.hp) * 1)
    }
  }
}, {
  title: '触发特效后攻击力',
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.atk) * 1)
    }
  }
}, {
  title: '触发特效后防御力',
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.def) * 1)
    }
  }
}, {
  title: '触发特效后暴击率',
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.cpct) * 1)
    }
  }
}, {
  title: '触发特效后暴击伤害',
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.cdmg) * 1)
    }
  }
}, {
  title: '触发特效后元素精通',
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.mastery) * 1)
    }
  }
}, {
  title: '触发特效后充能效率',
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.recharge) * 1)
    }
  }
}, {
  title: '触发特效后治疗加成',
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.heal) * 1)
    }
  }
}, {
  title: '当前圣遗物套装',
  dmg: ({ artis , attr, calc, talent }) => {
    return {
      avg: artis ,
      type: 'text'
    }
  }
} ,{
  title: '[E]秋沙歌枕巡礼伤害',
  dmg: ({ talent }, dmg) => dmg(talent.e['技能伤害'], 'e')
}, {
  title: '[E]秋沙歌枕巡礼持续攻击伤害',
  dmg: ({ talent }, dmg) => dmg(talent.e['持续攻击伤害'], 'e')
}, {
  title: '[Q]安乐秘汤疗法伤害',
  dmg: ({ talent }, dmg) => dmg(talent.q['技能伤害'], 'q')
}, {
  title: '[Q]梦念冲击波伤害',
  dmg: ({ talent }, dmg) => dmg(talent.q['梦念冲击波伤害'], 'q')
}, {
  title: '扩散反应伤害',
  params: { KS: true , KSS : false},
  dmg: ({}, { reaction }) => reaction('swirl')
}, {
  check: ({ cons }) => cons > 0,
  title: '[二十三夜待]扩散反应伤害',
  params: { KS: true , KSS : true},
  dmg: ({}, { reaction }) => reaction('swirl')
}, {
  title: '[Q]拾取点心回复生命值',
  dmgKey: 'AE',
  dmg: ({ attr, talent }, { heal }) => heal(talent.q['拾取点心回复生命值2'][0] * attr.mastery / 100 + talent.q['拾取点心回复生命值2'][1])
}, {
  title: `[2命]火/水/冰/雷元素伤害提升值`,
  check: ({ cons }) => cons > 1,
  dmg: ({ attr, calc, talent }) => {
    return {
      avg: Format.percent(calc(attr.mastery) * 0.02 ),
      type: 'text'
    }
  }
}]

export const defDmgKey = 'AE'
export const mainAttr = 'atk,cpct,cdmg,heal'

export const buffs = [{
  title: '昼想夜梦：元素精通提升100点',
  data: {
    mastery: 100
  }
},
{
  check: ({ cons, params }) =>  params.KS === true,
  title: '梦浮：扩散伤害提升[swirldmg]%',
  data: {
    swirldmg: ({ talent, attr, calc }) => calc(attr.mastery) * talent.q['每点精通提升扩散伤害百分比'] / 100
  }
},
{
  check: ({ cons, params }) =>  params.KSS === true && cons > 0,
  title: '宿雾若水遥：二十三夜待状态的扩散伤害提升[swirlPlus]点',
  data: {
    swirlPlus: ({ talent, attr, calc }) => calc(attr.mastery) * 9
  }
}]

export const createdBy = 'Ehya丶calc'
