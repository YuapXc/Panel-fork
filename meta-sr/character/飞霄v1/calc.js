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
  title: '触发特效后速度',
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.speed) * 1)
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
  title: '触发特效后击破特攻',
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.stance) * 1)
    }
  }
}, {
  title: '触发特效后效果命中',
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.effPct) * 1)
    }
  }
}, {
  title: '触发特效后效果抵抗',
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.effDef) * 1)
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
  title: '当前遗器套装',
  dmg: ({ artis , attr, calc, talent }) => {
    return {
      avg: artis ,
      type: 'text'
    }
  }
},{
  title: '[E]钺贯伤害',
  dmg: ({ talent }, dmg) => dmg(talent.e['技能伤害'], 'e')
}, {
  title: '[Q]闪裂刃舞伤害',
  dmg: ({ talent }, dmg) => dmg(talent.q['闪裂刃舞伤害'], 'q')
},{
  title: '[弱点击破状态]闪裂刃舞伤害',
  dmg: ({ talent }, dmg) => dmg(talent.q['闪裂刃舞伤害'] + talent.q['闪裂刃舞倍率提高'], 'q')
},{
  title: '[Q]钺贯天冲伤害',
  dmg: ({ talent }, dmg) => dmg(talent.q['钺贯天冲伤害'], 'q')
},{
  title: '[弱点击破状态]钺贯天冲伤害',
  dmg: ({ talent }, dmg) => dmg(talent.q['钺贯天冲伤害'] + talent.q['钺贯天冲倍率提高'], 'q')
},{
  title: '[飞黄:6点]最后一击总伤害',
  check: ({ cons }) => cons < 1,
  dmg: ({ talent }, dmg) => dmg(talent.q['最后一击伤害'] * 6, 'q')
},{
  title: '[弱点击破状态-飞黄:6点]最后一击总伤害',
  check: ({ cons }) => cons < 1,
  dmg: ({ talent }, dmg) => dmg(talent.q['最后一击伤害'] * 6 + talent.q['倍率提高'], 'q')
},{
  title: '[飞黄:9点]最后一击总伤害',
  check: ({ cons }) => cons < 1,
  dmg: ({ talent }, dmg) => dmg(talent.q['最后一击伤害'] * 9, 'q')
},{
  title: '[弱点击破状态-飞黄:9点]最后一击总伤害',
  check: ({ cons }) => cons < 1,
  dmg: ({ talent }, dmg) => dmg(talent.q['最后一击伤害'] * 9 + talent.q['倍率提高'], 'q')
},{
  title: '[飞黄:12点]最后一击总伤害',
  check: ({ cons }) => cons < 1,
  dmg: ({ talent }, dmg) => dmg(talent.q['最后一击伤害'] * 12, 'q')
},{
  title: '[弱点击破状态-飞黄:12点]最后一击总伤害',
  check: ({ cons }) => cons < 1,
  dmgKey: 'AE',
  dmg: ({ talent }, dmg) => dmg(talent.q['最后一击伤害'] * 129+ talent.q['倍率提高'], 'q')
},{
  title: '[飞黄:6点]最后一击总伤害',
  check: ({ cons }) => cons > 0,
  dmg: ({ talent }, dmg) => dmg((talent.q['最后一击伤害'] + talent.q['一命额外伤害']) * 6, 'q')
},{
  title: '[弱点击破状态-飞黄:6点]最后一击总伤害',
  check: ({ cons }) => cons > 0,
  dmg: ({ talent }, dmg) => dmg((talent.q['最后一击伤害'] + talent.q['一命额外伤害']) * 6 + talent.q['倍率提高'], 'q')
},{
  title: '[飞黄:9点]最后一击总伤害',
  check: ({ cons }) => cons > 0,
  dmg: ({ talent }, dmg) => dmg((talent.q['最后一击伤害'] + talent.q['一命额外伤害']) * 9, 'q')
},{
  title: '[弱点击破状态-飞黄:9点]最后一击总伤害',
  check: ({ cons }) => cons > 0,
  dmg: ({ talent }, dmg) => dmg((talent.q['最后一击伤害'] + talent.q['一命额外伤害']) * 9 + talent.q['倍率提高'], 'q')
},{
  title: '[飞黄:12点]最后一击总伤害',
  check: ({ cons }) => cons > 0,
  dmg: ({ talent }, dmg) => dmg((talent.q['最后一击伤害'] + talent.q['一命额外伤害']) * 12, 'q')
},{
  title: '[弱点击破状态-飞黄:12点]最后一击总伤害',
  check: ({ cons }) => cons > 0,
  dmgKey: 'AE',
  dmg: ({ talent }, dmg) => dmg((talent.q['最后一击伤害'] + talent.q['一命额外伤害']) * 12 + talent.q['倍率提高'], 'q')
},{
  title: '[T]雷狩伤害',
  check: ({ cons }) => cons < 6,
  dmg: ({ talent }, dmg) => dmg(talent.t['技能伤害'], 't')
},{
  title: '[Q]雷狩伤害',
  check: ({ cons }) => cons > 5,
  params: { LM : false},
  dmg: ({ talent }, dmg) => dmg(talent.t['技能伤害'] + talent.t['六命增加倍率'], 'q')
}]

export const mainAttr = 'hp,cpct,cdmg,heal'
export const defDmgKey = 'AE'

export const buffs = [{
  check: ({ params , cons }) => cons < 6,
  title: '电举：追加攻击的暴击伤害提高60%。',
  data: {
    tdmg: 60
  }
}, {
  check: ({ params , cons }) => cons > 5 && params.LM === true,
  title: '电举：雷狩的暴击伤害提高60%。',
  data: {
    dmg: 60
  }
},{
  check: ({ params , cons }) => cons > 5 && params.LM === true,
  title: '6命：追加攻击的风属性抗性穿透提高20%。天赋的追加攻击伤害倍率提高360%，并且造成的伤害视为终结技伤害。',
  data: {
    kx: 20
  }
}]

export const createdBy = 'Ehya丶Calc'
