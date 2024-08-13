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
},{
  title: '[Q]最后一击伤害',
  check: ({ cons }) => cons < 1,
  params: { LM : false,QA : false,QB : false,QC : true,QAT : false,QBT : false},
  dmg: ({ talent }, dmg) => dmg(talent.q['最后一击伤害'], 't')
}, {
  title: '[Q]最后一击伤害',
  check: ({ cons }) => cons > 0,
  params: { LM : false,QA : false,QB : false,QC : true,QAT : false,QBT : false},
  dmg: ({ talent }, dmg) => dmg(talent.q['最后一击伤害'] * 1.5, 't')
},{
  title: '[Q]闪裂刃舞伤害',
  check: ({ cons }) => cons < 1,
  params: { LM : false,QA : true,QB : false,QC : false,QAT : false,QBT : false},
  dmg: ({ talent }, dmg) => dmg(talent.q['闪裂刃舞伤害'], 't')
},{
  title: '[Q]闪裂刃舞伤害',
  check: ({ cons }) => cons > 0,
  params: { LM : false,QA : true,QB : false,QC : false,QAT : false,QBT : false},
  dmg: ({ talent }, dmg) => dmg(talent.q['闪裂刃舞伤害'] * 1.5, 't')
},{
  title: '[弱点击破状态]闪裂刃舞伤害',
  check: ({ cons }) => cons < 1,
  dmgKey: 'AE',
  params: { LM : false,QA : false,QB : false,QC : false,QAT : true,QBT : false},
  dmg: ({ talent }, dmg) => dmg(talent.q['闪裂刃舞伤害'] + talent.q['闪裂刃舞倍率提高'], 't')
},{
  title: '[弱点击破状态]闪裂刃舞伤害',
  check: ({ cons }) => cons > 0,
  dmgKey: 'AE',
  params: { LM : false,QA : false,QB : false,QC : false,QAT : true,QBT : false},
  dmg: ({ talent }, dmg) => dmg(talent.q['闪裂刃舞伤害'] + talent.q['闪裂刃舞倍率提高'] * 1.5, 't')
},{
  title: '[Q]钺贯天冲伤害',
  check: ({ cons }) => cons < 1,
  params: { LM : false,QA : false,QB : true,QC : false,QAT : false,QBT : false},
  dmg: ({ talent }, dmg) => dmg(talent.q['钺贯天冲伤害'], 't')
},{
  title: '[Q]钺贯天冲伤害',
  check: ({ cons }) => cons > 0,
  params: { LM : false,QA : false,QB : true,QC : false,QAT : false,QBT : false},
  dmg: ({ talent }, dmg) => dmg(talent.q['钺贯天冲伤害'] * 1.5, 't')
},{
  title: '[弱点击破状态]钺贯天冲伤害',
  check: ({ cons }) => cons < 1,
  params: { LM : false,QA : false,QB : false,QC : false,QAT : false,QBT : true},
  dmg: ({ talent }, dmg) => dmg(talent.q['钺贯天冲伤害'] + talent.q['钺贯天冲倍率提高'], 't')
},{
  title: '[弱点击破状态]钺贯天冲伤害',
  check: ({ cons }) => cons > 0,
  params: { LM : false,QA : false,QB : false,QC : false,QAT : false,QBT : true},
  dmg: ({ talent }, dmg) => dmg(talent.q['钺贯天冲伤害'] + talent.q['钺贯天冲倍率提高'] * 1.5, 't')
},{
  title: '[T]雷狩伤害',
  check: ({ cons }) => cons < 6,
  dmg: ({ talent }, dmg) => dmg(talent.t['技能伤害'], 't')
},{
  title: '[Q]雷狩伤害',
  check: ({ cons }) => cons > 5,
  params: { LM : false,QA : false,QB : false,QC : false,QAT : false,QBT : false},
  dmg: ({ talent }, dmg) => dmg(talent.t['技能伤害'] + talent.t['六命增加倍率'], 't')
}]

export const mainAttr = 'hp,cpct,cdmg,heal'
export const defDmgKey = 'AE'

export const buffs = [{
  title: '电举：攻击力提高48%。',
  data: {
    atkPct: 48
  }
}, {
  title: '解形：追加攻击的暴击伤害提高36%。',
  data: {
    cdmg: 36
  }
},{
  title: '1命：发动【闪裂刃舞】或【钺贯天冲】后，使飞霄造成的终结技伤害额外提高，提高数值等同于原伤害的10%，最多叠加5层，持续至终结技行动结束。',
  data: {
    dmg: 0
  }
},{
  title: '4命：飞霄处于可战斗状态时，敌方目标受到的追加攻击伤害提高10%。',
  data: {
    tdmg: 10
  }
},{
  check: ({ params , cons }) => cons > 5,
  title: '6命：飞霄造成的终结技伤害的全属性抗性穿透提高20%。天赋的追加攻击伤害同时视为终结技伤害，并且伤害倍率提高140%。',
  data: {
    Qkx: 20
  }
}]

export const createdBy = 'Ehya丶Calc'
